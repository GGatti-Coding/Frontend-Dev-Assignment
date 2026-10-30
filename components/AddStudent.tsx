/*
 * File: AddStudent.tsx
 * Author: Tejanpreet Singh Dherdi 
 * Date: 2026-10-29
 * Description: Form with four inputs (first name, last name, grade and
 * average) and an Add student button. Grade starts at 9 and average at 70.
 * If either name is empty, nothing is added. After a student is added, the
 * name inputs are emptied and the two numbers return to their starting
 * values. It takes an addStudent callback as a prop and keeps the form
 * values in its own state.
 */

"use client";

import { useState } from "react";
import { Student } from "@/data/students";

interface AddStudentProps {
  addStudent: (firstName: Student["firstName"],
    lastName: Student["lastName"],
    grade: Student["grade"],
    average: Student["average"]) => void
}

const AddStudent = ({ addStudent }: AddStudentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("9");
  const [average, setAverage] = useState("70");

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }

  const handleGrade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGrade(event.target.value);
  }

  const handleAverage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAverage(event.target.value);
  }

  const handleClick = () => {
    const gradeNumber = Number(grade);
    const averageNumber = Number(average);

    if (firstName.trim() === "" || lastName.trim() === "") {
      return;
    }
    if (!Number.isInteger(gradeNumber) || gradeNumber < 9 || gradeNumber > 12) {
      return;
    }
    if (Number.isNaN(averageNumber) || averageNumber < 0 || averageNumber > 100) {
      return;
    }

    addStudent(firstName.trim(), lastName.trim(), gradeNumber as Student["grade"], averageNumber);
    setFirstName("");
    setLastName("");
    setGrade("9");
    setAverage("70");
  };

  return (
    <div className="flex flex-col items-stretch">
      <div>
        <label>Enter First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="John"
          className="rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label>Enter Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Smith"
          className="rounded-lg border border-slate-300 px-4 py-2 my-3 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label>Enter Grade: </label>
        <input
          type="number"
          min={9}
          max={12}
          value={grade}
          onChange={handleGrade}
          className="rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label>Enter Average: </label>
        <input
          type="number"
          value={average}
          onChange={handleAverage}
          className="rounded-lg border border-slate-300 px-4 py-2 my-3 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        onClick={handleClick}
        className="w-fit rounded-lg bg-blue-600 px-5 py-2 mt-1 font-semibold text-white hover:bg-blue-700 transition cursor-pointer ">
        Add Student
      </button>

    </div>
  )
}

export default AddStudent;


