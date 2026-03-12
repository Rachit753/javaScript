//Var-let-const line by line comparison

var name; // declaration
var name = "rachit"; // declaration and initialization.

//we use variable foe storing value. In JS we can declare variable using (var,let,const) 
var a = 12; 
var a = 13;  // no error

// with var redeclaration and reassign is possibile,its function based and it adds with window

//------------------------------------------------------------------------------------------------

let b = 20;
b = 30; // if i write let b =30 it will throw error
// bcz by let we can not redeclare that but we can re initialize its values,block scoped.

//-------------------------------------------------------------------------------------------------

const pi = 3.14;

//if i do (const pi =3.5 or pi =3.5  error) bcz with const we canot redec and re initialize, again it is also block scoped.

