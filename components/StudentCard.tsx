"use client";
import { useState } from "react";
import { Student } from "@/data/students";

type StudentProps = Student & {onRemove: (id: number) => void};

const StudentCard = ({id , firstName , lastName , grade , average , onRemove } : StudentProps) => {
     const [showDetails ,  setShowDetails] = useState(false);

     const showOrHideDetails = () => {
      setShowDetails(prev => !prev);
     }
     
     return (
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-bold text-slate-900">
              Name: {firstName} {lastName}
            </p>
            <p className="text-lg font-bold text-slate-900">Grade: {grade}</p>
          </div>

        {showDetails && 
         (
          <div>
           <p> Average : {average}</p>
           {average >= 80 && 
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 text-xs font-semibold">
                 🏅Honour roll
              </span>
           } 
          </div>
         )
        }

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  type = "button"
                  onClick={showOrHideDetails}>
            {showDetails ? "Hide details" : "Show details"}
          </button >

          <button className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors"
                  type = "button"
                  onClick = {() => onRemove(id)}>
          </button>
          
        </div>
      </div>
     );

};

export default StudentCard;