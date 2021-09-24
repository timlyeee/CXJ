//
//  InvokeBridgeTest.h
//  CXJ-desktop
//
//  Created by LX on 17/09/2021.
//

#ifndef InvokeBridgeTest_h
#define InvokeBridgeTest_h
typedef void(^eventCallback)(NSString*);

@interface InvokeBridgeTest:NSObject
-(void)addMethod:(NSString*)arg0 callback:(eventCallback)callback;
-(void)applyMethod:(NSString*)name arg1:(NSString*)arg1;
@end

#endif /* InvokeBridgeTest_h */
