
/*
File: StudentList.tsx
Author: Your Name
Date: October 26, 2026

This component receives an array of students and an onRemove callback.
It uses map to create a StudentCard for every student in the array.
Each card receives the student information and the removal callback.
A unique student ID is used as the key for each card.
A message is displayed when there are no students to show.
*/

import type { Student } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {
  if (students.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <p className="text-lg font-medium text-gray-700">
          No students found.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Try changing your search or add a new student.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          {...student}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default StudentList;
