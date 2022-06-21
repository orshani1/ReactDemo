import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OtherComponent from "./MyOtherComponent";
import Cac from "./ComponentAsClass";
import Countries from "./Countries";
import HomePage from "./Pages/HomePage";

function GetCountries(){
  let countriesObjArray = [
    {contryCode:24323,countryName:"France",capital:"Paris"},
    {contryCode:2111,countryName:"Israel",capital:"Jerusalem"},
    {contryCode:4411,countryName:"California",capital:"USA"},

];
return countriesObjArray;
}


//#region Homwork 02
function StudentComp(props){
  let rowStyle = {};
  let teacherLecture = '';
  const studentsList = StudentsListComp();
  {  
    //#region Handling Styles
    if(props.grade <= 56){
      rowStyle = {color:"red"};
      teacherLecture = "poor"
    }
    else if(props.grade >= 57 && props.grade <=75){
      teacherLecture = "ok"
      rowStyle = {color:"yellow"};
  
    }
    else if(props.grade >= 76 && props.grade <= 85){
      teacherLecture = "Good";
      rowStyle = {color:"orange"};
    }
    else{
      rowStyle = {color:"green"};
      teacherLecture= "MF You smart !";
    }
  }
    //#endregion

  return(
    <>
    <h1>HomeWork 02</h1>
    <hr/>
{studentsList.map(s =>  

<p  style={s.grade <= 56 ? {color:"red"} : s.grade >= 57 && s.grade <=75 ? {color:"yellow"} : s.grade >= 76 && s.grade <=85 ? {color:"orange"} : {color:"green"} } 
>{`${s.id} - ${s.name} - ${s.grade} Teacher Words : ${s.grade <= 56 ? "poor":  s.grade >= 57 && s.grade <=75 ? "ok" : s.grade >= 76 && s.grade <=85 ? "good": "MF you smart" }`}</p>
)}
    </>
  );
}
function StudentsListComp(){
  let studentsList = [
    {id:1,name:"Or Shani",grade:100},
    {id:2,name:"Shmolik",grade:20},
    {id:3,name:"Misho",grade:57},
    {id:4,name:"ze ah",grade:76},
    {id:5,name:"ze talmid hamor",grade:100},

  ];
return studentsList;
  
}
//#endregion



//#region  Homework 03
//#endregion


function CountriesFunc(){
  const  countries =GetCountries();
  return(
    <ul>
      {
        countries.map((c)=>
            <li>{` [${c.contryCode}] - ${c.countryName} - (${c.capital})`}</li>
        )
      }
    </ul>
  )
}

function MyComponent() {
  return (
    <React.Fragment>
      <HomePage></HomePage>
    </React.Fragment>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 <StudentComp/>
);
