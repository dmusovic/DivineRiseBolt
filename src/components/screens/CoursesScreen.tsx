import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { CourseList } from "../course/CourseList";
import { courses } from "../../data/sampleData";

type CoursesScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Courses">;
};

export function CoursesScreen({ navigation }: CoursesScreenProps) {
    return (
        <gridLayout className="w-full h-full bg-gray-100">
            <CourseList
                courses={courses}
                onSelectCourse={(course) => {
                    navigation.navigate("CourseDetails", {
                        courseId: course.id,
                    });
                }}
            />
        </gridLayout>
    );
}