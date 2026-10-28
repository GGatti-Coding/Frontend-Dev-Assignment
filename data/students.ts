// exports an interface named Student and an array of at least eight students 

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
