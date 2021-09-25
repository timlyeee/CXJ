package com.cocos.game;



import com.cocos.lib.JsbBridge;

import java.util.HashMap;

public class JsbBridgeTest {
    public interface MyCallback{
        void onTrigger(String arg);
    }

    public static JsbBridgeTest getInstance(){
        if(instance == null)
            instance = new JsbBridgeTest();
        return instance;
    }

    public static HashMap<String, MyCallback> myCallbackHashMap = new HashMap<>();
    private static JsbBridgeTest instance;
}
