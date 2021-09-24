
import { _decorator, Component, Node, Label } from 'cc';

const { ccclass, property } = _decorator;

export class EventManager {
    private methodMap: Map<String, Function>;
    public static instance: EventManager = new EventManager;
    public addMethod(methodName: String, f: Function): boolean {
        if (!this.methodMap.get(methodName)) {
            this.methodMap.set(methodName, f);
            return true;
        }
        return false;
    }
    public applyMethod(methodName: String, arg?: String): boolean {
        if (!this.methodMap.get(methodName)) {
            console.log("Function not exist");
            return false;
        }
        var f = this.methodMap.get(methodName);
        try {
            f?.call(null, arg);
            return true;
        } catch (e) {
            console.log("Function trigger error: " + e);
            return false;
        }
    }
    public removeMethod(methodName: String):any{
        return this.methodMap.delete(methodName);
    }
    constructor() {
        this.methodMap = new Map<String, Function>();
        EventManager.instance = this;
        
    }
}
 
@ccclass('CallNative')
export class CallNative extends Component {
    //static eventMap: Map<string, Function> = new Map<string, Function>();    
    @property(Label)
    public labelListener : Label|undefined;

    start () {
        new EventManager;
        jsb.reflection.setCallback((eventname: string, arg1: string)=>{
            console.log("Trigger event for "+eventname+"is"+EventManager.instance.applyMethod(eventname, arg1));
            
        })
        this.registerAllScriptEvent();
        this.dispatchJavaEventTest();
    }
    public dispatchJavaEventTest(){
        //Call with argument and success
        jsb.reflection.sendToNative("callWithArg", "@MYSaddHello");
    }
    public registerAllScriptEvent(){
        EventManager.instance.addMethod("sayHelloInJs", this.sayHelloInJs);
    }

    //cb
    public sayHelloInJs(user: String):String {
        console.log("Hello "+ user +" I'm K");
        this.labelListener!.string = "Hello! I'm K";
        debugger;
        return "K";
    }
    public sayGoodbye(user:String):String {
        console.log("Goodbye") ;
        this.labelListener!.string = "Goodbye, I'm chasing my dream";
        return "G";
    }
    
}
