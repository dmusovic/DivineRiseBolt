import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { CoursesScreen } from "./screens/CoursesScreen";
import { CourseDetailsScreen } from "./screens/CourseDetailsScreen";
import { LessonViewScreen } from "./screens/LessonViewScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Courses"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Courses"
                component={CoursesScreen}
                options={{ title: "My Courses" }}
            />
            <StackNavigator.Screen
                name="CourseDetails"
                component={CourseDetailsScreen}
                options={{ title: "Course Details" }}
            />
            <StackNavigator.Screen
                name="LessonView"
                component={LessonViewScreen}
                options={{ title: "Lesson" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);