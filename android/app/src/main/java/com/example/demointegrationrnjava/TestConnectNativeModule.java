package com.example.demointegrationrnjava;

import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestConnectNativeModule extends ReactContextBaseJavaModule {
    TestConnectNativeModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "TestConnectNative";
    }

    @ReactMethod
    public void sendMessageToNative(String message){
        Log.d("This log is from java",message);
    }

    @ReactMethod
    public void sendCallbackToNative(Callback callback){
        callback.invoke("A greeting from java");
    }

    @ReactMethod
    public void finishActivity(){
        getCurrentActivity().finish();
    }

    @ReactMethod
    public void goToSecondActivity(){
        Intent intent = new Intent(getCurrentActivity(),SecondActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}