import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OtherComponent from "./MyOtherComponent";
import Cac from "./ComponentAsClass";
import Countries from "./Countries";
import HomePage from "./Pages/HomePage";


//#region  TestWithGil
var myArray = [[1,1,4],[1,2,2],[3,3,3],[1,0]];

function Test(array){
  // var shortest = myArray.reduce(function(p,c) {return p.length>c.length?c:p;},{length:Infinity});
  // return shortest;
  let index = 0;//1
  let count = 0;//3
  let perviosTotal = 1000;//1
  for(let p  of array){

    let currentTotal = 0;  /// 
    for(let u in p){
      currentTotal += u;
    }
    
    if(currentTotal < perviosTotal){
      perviosTotal = currentTotal;
      index = count;
    }
      count++;
  }



  return array[index];
}
//#endregion
//#region Homwork 02
function StudentComp(props){
  let rowStyle = {};
  let teacherLecture = '';
var result = Test(myArray);

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
    {console.log(result)}
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
function GetYouTubeList(){
  const youTubeVideo = [
    {title:"how to create website",url:"https://www.youtube.com/embed/5UtCf4faDyY",width:250,heigth:250},
    {title:"how to get hired as  fullstack develoepr",url:"https://www.youtube.com/embed/py0wRutmMF4",width:500,heigth:450},
    {title:"how to feed my dog",url:"https://youtube.com/embed/srig0ZH5sUU/",width:200,heigth:100},
    {title:"how to ",url:"https://youtube.com/embed/g7DC-4eQj24/",width:550,heigth:550},


];
return youTubeVideo;


}
function YouTubeListComp(){
  let objects = GetYouTubeList();
  return(
     objects.map(o=>   
    
       <YoutubeVideoComp width={o.width}  height={o.heigth} url={o.url} title={o.title} ></YoutubeVideoComp>
    ));

  
}

function YoutubeVideoComp(props){
  console.log("props in video comp is ", props);
  return(
    <>
    <h1>HomeWork 03</h1>
    <hr/>
    <h3>{props.title}</h3>

    <iframe width={props.width}  height={props.heigth} src={props.url} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
}




//#endregion


//#region  Class Work
function GetCountries(){
  let countriesObjArray = [
    {contryCode:24323,countryName:"France",capital:"Paris"},
    {contryCode:2111,countryName:"Israel",capital:"Jerusalem"},
    {contryCode:4411,countryName:"California",capital:"USA"},

];
return countriesObjArray;
}

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
//#endregion
const root = ReactDOM.createRoot(document.getElementById("root"));
const videos = 
root.render(
  <React.Fragment>
 <YouTubeListComp/>
 </React.Fragment>
);
