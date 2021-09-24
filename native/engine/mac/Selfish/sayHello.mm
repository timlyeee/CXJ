//
//  sayHello.m
//  CXJ-desktop
//
//  Created by LX on 17/09/2021.
//
#include <string>
#include <iostream>
#import <Foundation/Foundation.h>
@interface hello:NSObject
-(void)sayHello:(const std::string&)arg;

@end

@implementation hello

-(void)sayHello:(const std::string&)arg{
    std::cout<<arg;
}
-(void)callWithArg:(const std::string&)arg{
    NSLog(@"It's show time!");
    std::cout<<"Hello "<<arg<<std::endl;
}

@end
