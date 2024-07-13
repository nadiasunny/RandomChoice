let body = document.body.style;
body.backgroundImage = 'url("/form/pictures/fire.jpeg")';


function change(){
  let all = document.getElementsByTagName("*");

  for (let i=0, max=all.length; i < max; i++) {
  all[i].style.color = "blue";
}
  document.borderColor = 'blue';
  body.backgroundImage= 'url("/form/pictures/water.jpg")';
}

function handleSubmit(event) {
  //change background image to a calming one
  document.body.style.backgroundImage= 'url("images/water.jpg")';
  //prevent default behavior: refreshing and erasing form inputs
  event.preventDefault();

  //set data to be a type pf data that holds the form's values
  const data = new FormData(event.target);

  //set value to be an object that contains the forms inputs
  const value = Object.fromEntries(data.entries());
  
  //print to console the object of values
  console.log({ value }); 

//make an array of all activities

    let acts = [];
    for (let key in value){
      let result = (value[key]);
      acts.push(result);
    }
//pick random one and assign to chosen one textbox

    let choice = acts[Math.floor(Math.random()*acts.length)];
    document.getElementById("chosenOne").setAttribute("value", choice);
  }

  //assign form to hold form
  const form = document.querySelector('form');
  //when the form is submitted, perform handleSubmit func
  form.addEventListener('submit', handleSubmit);


  
let count = 3;
  function add() {
    body.backgroundImage = 'url("/form/pictures/fire.jpeg")';
    //create input type dynamically
    let element = document.createElement("input");

    //creat labels
    let label = document.createElement("Label");
    label.innerHTML = `Activity ${count}: `;

    //assign attributes to the element.
    element.setAttribute("type", "text");
    element.setAttribute("value", "");
    element.setAttribute("name", `${count} Act.`);
    linebreak = document.createElement("br")
    //element.setAttribute("style", "width:90px");

    label.setAttribute("style", "font-weight:normal");

    //'foobar' is the div id, where new fields are added
    let foo = document.getElementById("fooBar");

    //append element in page
    foo.append(label);
    foo.appendChild(element);
    foo.appendChild(linebreak);
    count++;

  }

function returnRand(){
  body.backgroundImage= 'url("images/water.jpg")';
  let actVal = document.getElementById("chosenOne");

    
  let acts = {  0: 'Eat a whole kiwi, skin & all.',
                1: 'Go ride a bike',
                2: 'Go for a walk.',
                3: 'Get ice cream',
                4: 'Debate where God is.'
  };
  let numuro = Math.floor(Math.random()*3);
  actVal.value = acts[`${numuro}`];

  
}


let randBtn = document.getElementById("randAct");
randBtn.addEventListener('click', changeVibe);

function changeVibe(){
  let labels = document.querySelectorAll('label');
  const myStyles = `
    color: white;
    background: blue;
    opacity: 1.0;
  `;
  labels.style.cssText = myStyles;
}
