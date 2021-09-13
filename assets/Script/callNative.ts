
import { _decorator, Component, Node, MethodManager, Label } from 'cc';

const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CallNative
 * DateTime = Wed Sep 01 2021 16:09:46 GMT+0800 (中国标准时间)
 * Author = Lixin2021up
 * FileBasename = callNative.ts
 * FileBasenameNoExtension = callNative
 * URL = db://assets/Script/callNative.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('CallNative')
export class CallNative extends Component {
    
    @property(Label)
    public labelListener : Label|undefined;

    start () {
        this.registerAllEvent();
        this.dispatchJavaEventTest();
    }
    public dispatchJavaEventTest(){
        //Call with argument and success
        jsb.informApp("callWithArg", "@MYSaddHello");
        
        
    }
    public registerAllEvent(){
        MethodManager.instance.addMethod("sayHelloInJs", this.sayHelloInJs);
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

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
