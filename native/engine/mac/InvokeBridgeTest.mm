//
//  Runner.m
//  CXJ-desktop
//
//  Created by LX on 17/09/2021.
//
#include <iostream>
#include <string>

#import <Foundation/Foundation.h>
#include "InvokeBridgeTest.h"
#include "cocos/platform/apple/JsbBridge.h"
@implementation InvokeBridgeTest{
    NSMutableDictionary<NSString*, eventCallback> *cbDictionary;
    
}

static ICallback cb = ^void (NSString* _arg0, NSString* _arg1){
    NSLog(@"Here to detect self's address");
    NSLog(_arg0);
    NSLog(_arg1);
    [[JsbBridge sharedInstance] sendToScript:@"sayHelloInJs" arg1:@"Jack"];
};
-(id)init{
    self = [super init];
    cbDictionary = [NSMutableDictionary new];
    eventCallback callWithArg = ^void(NSString* arg){
        NSLog(@"Hello!");
        NSLog(@"%@", arg);
        JsbBridge* m = [JsbBridge sharedInstance];
        [m sendToScript:@"sayHelloInJs" arg1:@"Jack"];
    };
    JsbBridge* m = [JsbBridge sharedInstance];
    [self addMethod:@"callWithArg" callback:callWithArg];
    [m setCallback:cb];
    return self;
}
-(void)addMethod:(NSString*)arg0 callback:(eventCallback)callback{
    [cbDictionary setValue:callback forKey:arg0];
}
-(void)applyMethod:(NSString*)name arg1:(NSString*)arg1{
    [cbDictionary objectForKey:name](arg1);
}
@end




















