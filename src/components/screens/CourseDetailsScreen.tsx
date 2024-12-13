import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { LessonList } from "../lesson/LessonList";
import { courses } from "../../data/sampleData";

type CourseDetailsScreenProps = {
    route: RouteProp<MainStackParamList, "CourseDetails">;
    navigation: FrameNavigationProp<MainStackParamList, "CourseDetails">;
};

export function CourseDetailsScreen({ route, navigation }: CourseDetailsScreenProps) {
    const course = courses.find((c) => c.id === route.params.courseId);

    if (!course) {
        return (
            <gridLayout className="w-full h-full items-center justify-center">
                <label text="Course not found" />
            </gridLayout>
        );
    }

    return (
        <gridLayout rows="auto, *" className="w-full h-full bg-gray-100">
            <stackLayout row={0} className="p-4 bg-white">
                <label className="text-2xl font-bold" text={course.title} />
                <label className="text-gray-600" text={course.description} />
            </stackLayout>
            <LessonList
                row={1}
                lessons={course.lessons}
                onSelectLesson={(lesson) => {
                    navigation.navigate("LessonView", {
                        courseId: course.id,
                        lessonId: lesson.id,
                    });
                }}
            />
        </gridLayout>
    );
}