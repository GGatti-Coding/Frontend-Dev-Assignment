"use client";

import { useState } from "react";
import { Student} from "@/data/students";

interface AddStudentProps {
  addStudent : (firstName:Student["firstName"], 
                lastName:Student["lastName"], 
                grade:Student["grade"], 
                average: Student["average"]) => void
}

const AddStudent = ({addStudent}:AddStudentProps) => {
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [grade , setGrade] = useState<9 | 10 | 11 | 12>(9);
  const [average , setAverage] = useState(70);

  const handleFirstNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }

  const handleGrade =(event: React.ChangeEvent<HTMLInputElement>) => {
     const n = Number(event.target.value);
     if (n>=9 && n <= 12 ) {setGrade(n as Student["grade"])}
  }

  const handleAverage =(event: React.ChangeEvent<HTMLInputElement>) => {
    setAverage(Number(event.target.value));
  }

  const handleClick = () => {
    if (firstName.trim() === "" || lastName.trim() === ""){
      return;
    }

    if (Number.isNaN(average) || average <0 || average > 100){
      return;
    }

    addStudent(firstName.trim() , lastName.trim() , grade , average);
    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  return (
    <div className = "flex flex-col items-stretch">
      <div>
        <label>Enter First Name: </label>
        <input 
        type="text"
        value = {firstName}
        onChange = {handleFirstNameChange}
        placeholder = "Tejan"
        className = "flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>
        
      <div>
        <label>Enter Last Name: </label>
        <input 
        type="text"
        value = {lastName}
        onChange = {handleLastNameChange}
        placeholder = "Dherdi"
        className = "flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>
        
      <div>
        <label>Enter Grade: </label>
        <input 
        type="number"
        value = {grade}
        onChange = {handleGrade}
        className = "flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label>Enter Average: </label>
        <input 
        type="number"
        value = {average}
        onChange = {handleAverage}
        className = "flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button 
       onClick = {handleClick}
       className = "rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 transition cursor-pointer ">
        Add Student
      </button>

    </div>
  )
}

export default AddStudent;


