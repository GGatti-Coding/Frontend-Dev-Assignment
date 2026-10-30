/*
 * File: StatsPanel.tsx
 * Author: Tejanpreet Singh Dherdi 
 * Date: 2026-10-29
 * Description: Shows three numbers about the whole student list: the total
 * number of students, how many are on the honour roll (an average of 80 or
 * more) and how many are in grade 12. It takes the students array as a prop
 * and calculates the counts on every render, so they update as soon as a
 * student is added or removed.
 */

import type { Student } from "@/data/students";

interface StatsPanelProps {
  students:Student[];
}


const StatsPanel = ({students} : StatsPanelProps) => {

  const total = students.length;
  const honourRoll = students.filter((student) => student.average >= 80 ).length;
  const grade12 = students.filter((student) => student.grade === 12).length;

  return (
    <div className = "grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className = "rounded-2xl bg-white p-6 shadow-md">
        <p className = "text-sm text-slate-500">Total students</p>
        <p className = "text-3xl font-bold text-slate-900">{total}</p>
      </div>

      <div className = "rounded-2xl bg-white p-6 shadow-md">
        <p className = "text-sm text-slate-500">Honour roll</p>
        <p className = "text-3xl font-bold text-slate-900">{honourRoll}</p>
      </div>

      <div className = "rounded-2xl bg-white p-6 shadow-md">
        <p className = "text-sm text-slate-500">Grade 12</p>
        <p className = "text-3xl font-bold text-slate-900">{grade12}</p>
      </div>
    </div>
  )
};

export default StatsPanel