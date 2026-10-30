/*
 * File: StudentPortal.tsx
 * Author: Tejanpreet Singh Dherdi 
 * Date: 2026-10-29
 * Description: Main component of the page. It owns the data: the list of
 * students and the search text, both held in state. It draws three sections
 * (Overview, Students and Add a student) and passes data and callbacks down
 * to StatsPanel, SearchBox, StudentList and AddStudent. It also provides
 * the add, remove and Clear all handlers, and filters the list by the search
 * text before passing it to StudentList.
 */


"use client"

import { useState } from "react";
import { Student , Students } from "@/data/students";
import StatsPanel from "./StatsPanel";
import SearchBox from "./SearchBox";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

const StudentPortal = () => {
  const [students , setStudents] = useState<Student[]>(Students);
  const [query , setQuery] =  useState("");

  const addStudent = (
    firstName: string,
    lastName : string,
    grade : Student["grade"],
    average : number
  ) => {
    setStudents((prev) => {
      const id = prev.reduce((max , s) => Math.max(max , s.id) , 0) + 1;
      return [...prev , {id , firstName , lastName , grade , average}]

    });
  };

  const removeStudent = (id : number) => {
    setStudents((prev) => prev.filter((student) => student.id !== id ));
  };

  const clearAll = () =>{
    setStudents([]);
  };

  const normalised= query.trim().toLowerCase();
  const visibleStudents = normalised === "" ? students : students.filter((student)=> `${student.firstName} ${student.lastName}`.toLowerCase().includes(normalised));

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className = "text=x1 font-bold text-slate-900">
          Overview
        </h2>

        <StatsPanel students = {students} />
      </section>

      <section className = "flex flex-col gap-4">
        <h2 className = "text-x1 font-bold text-slate-900">
          Students
        </h2>

        <SearchBox query = {query} onQueryChange={setQuery}/>
        <StudentList students={visibleStudents} onRemove = {removeStudent}/>
        <button type = "button"
         onClick = {clearAll}
         className = "w-fit rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer">
          clear all
        </button>
      </section>

      <section>
        <h2 className = "text-x1 font-bold text-slate-900">Add a student</h2>
        <AddStudent addStudent={addStudent}/>
      </section>
    </div>
  );
};

export default StudentPortal;

