let body = document.body.style;
body.backgroundImage = 'url("/form/pictures/fire.jpeg")';



function handleSubmit(event) {
  body.backgroundImage= 'url("/form/pictures/calm.jpeg")';
//to be honest, idk how this works
    event.preventDefault();

    const data = new FormData(event.target);

   const value = Object.fromEntries(data.entries());
  
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


  const form = document.querySelector('form');
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

