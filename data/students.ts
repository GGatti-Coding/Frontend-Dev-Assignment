/*
 * File: students.ts
 * Author: Tejanpreet Singh Dherdi
 * Date: 2026-10-28
 * Description: Holds the data for the student portal. It has no inputs.
 * It exports the Student interface, which describes one student with an
 * id, first name, last name, grade (9 to 12) and average (out of 100).
 * It also exports the students array that StudentPortal uses as its
 * starting list. The data covers every grade, has three students in
 * grade 12 and four with an average of 80 or more.
 */

export interface Student {
   id : number;
   firstName: string;
   lastName: string;
   grade : 9 | 10 | 11 | 12;
   average : number;
  };

export const Students : Student[] = 
[
{
   id : 1,
   firstName: "Tejan",
   lastName: "Dherdi",
   grade : 12,
   average : 100
},

{
   id : 2,
   firstName: "Ram",
   lastName: "Kapoor",
   grade : 12,
   average : 90
},

{
   id : 3,
   firstName: "Kevin",
   lastName: "Eleven",
   grade : 11,
   average : 80
},

{
   id : 4,
   firstName: "Naruto",
   lastName: "Uzumaki",
   grade : 9,
   average : 40
},

{
   id : 5,
   firstName: "Narendar",
   lastName: "Modi",
   grade : 10,
   average : 0
},

{
   id : 6,
   firstName: "Max",
   lastName: "Maxwell",
   grade : 12,
   average : 75
},

{
   id : 7,
   firstName: "Morty",
   lastName: "Singh",
   grade : 9,
   average : 100
},

{
   id : 8,
   firstName: "william",
   lastName: "bensworth",
   grade : 10,
   average : 65
},

{
   id : 9,
   firstName: "Karan",
   lastName: "Aujla",
   grade : 10,
   average : 55
},

];
