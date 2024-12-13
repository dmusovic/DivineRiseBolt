import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { LessonContent } from "../lesson/LessonContent";
import { courses } from "../../data/sampleData";

type LessonViewScreenProps = {
    route: RouteProp<MainStackParamList, "LessonView">;
    navigation: FrameNavigationProp<MainStackParamList, "LessonView">;
};

export function LessonViewScreen({ route, navigation }: LessonViewScreenProps) {
    const course = courses.find((c) => c.id === route.params.courseId);
    const lesson = course?.lessons.find((l) => l.id === route.params.lessonId);

    if (!course || !lesson) {
        return (
            <gridLayout className="w-full h-full items-center justify-center">
                <label text="Lesson not found" />
            </gridLayout>
        );
    }

    return (
        <gridLayout rows="*" className="w-full h-full">
            <LessonContent
                lesson={lesson}
                onComplete={() => {
                    navigation.goBack();
                }}
            />
        </gridLayout>
    );
}