const createBtn = document.getElementById("create");
const notesContainer = document.getElementById("nostes");
const tasksContainer = document.getElementById("tasks");
const menuBtn = document.getElementById("btn");
const nav = document.querySelector("nav");
let tn = document.querySelector('#tn');
let inputty = document.querySelector("#inputty");
daata = document.querySelector("textarea");
let inp = document.querySelector('.inp');
let i = 1;

function navopen(){
  if (menuBtn.innerText==="☰") {
    nav.style.opacity=1;
    nav.style.right='15px';
    menuBtn.innerText="x"
  } else {
    nav.style.opacity=0;
    nav.style.right='-150px';
    menuBtn.innerText="☰"
  }
}
function create(){
  if(tn.style.right === "10px"){
    tn.style.right = "-250px";
    tn.style.bottom = "-200px";
    document.getElementById('create').style.transform = "rotate(0deg)";
    tn.style.opacity=0;
  } else {
    tn.style.right = "10px";
    tn.style.bottom = "100px";
    document.getElementById('create').style.transform = "rotate(-45deg)";
    tn.style.opacity=1;
  }
}

function not(){
    document.querySelector('main').style.opacity= 0.3;
   document.querySelector('.inp').style.display='block';
  create()
  i=1; 
  
}
function task(){
  document.querySelector('main').style.opacity= 0.3;
   document.querySelector('.inp').style.display='block';
  create()
  i=2;
}
function save1(){

  if (inputty.value === "" || daata.value === "") {
    alert('Error');
    return;
  }

  let newItem = {
    title: inputty.value,
    content: daata.value
  };

  if(i === 1){
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(newItem);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayData("notes", notesContainer);
  }
  else if(i === 2){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newItem);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayData("tasks", tasksContainer);
  }

  document.querySelector('.inp').style.display='none';
  document.querySelector('main').style.opacity= 1;

  daata.value="";
  inputty.value="";
}

function displayData(type, container){
  container.innerHTML = "";
  let data = JSON.parse(localStorage.getItem(type)) || [];

  data.forEach(item => {
    let outerd1 = document.createElement('div');
    let innerd1 = document.createElement('div');
    let span1 = document.createElement('span');

    innerd1.innerText = item.content;
    span1.innerText = item.title;

    outerd1.appendChild(innerd1);
    outerd1.appendChild(span1);

    container.appendChild(outerd1);
  });
}

window.onload = function(){
  displayData("notes", notesContainer);
  displayData("tasks", tasksContainer);
}
localStorage.removeItem("notes");
localStorage.removeItem("tasks");