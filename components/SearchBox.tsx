/*
 * File: SearchBox.tsx
 * Author: Tejanpreet Singh Dherdi 
 * Date: 2026-10-29
 * Description: Text box that filters the student list by name as the user
 * types. It takes the current search text (query) and an onQueryChange
 * callback as props and keeps no state of its own. Every keystroke is
 * reported to StudentPortal, which does the case-insensitive filtering.
 */

"use client"

import { useState } from "react"
import { Students } from "@/data/students"
import { Student } from "@/data/students"

interface SearchBoxProps {
  query : string ,
  onQueryChange: (query : string) => void
};

const SearchBox = ({query , onQueryChange} : SearchBoxProps) => {

  
  return(<div>
    <label htmlFor="student-search">
      Search students
    </label>

    <input type="text" 
           value={query} 
           onChange={(event) => onQueryChange(event.target.value)} 
           placeholder="search by name" 
           className="rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"/>
  </div>
  );
};

export default SearchBox;