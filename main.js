//Jag börjar med att hämta alla element från html dokumentet
//för att sedan spara dem i varsin variabel

let textArea = document.getElementById("textBox");
let passengers = document.getElementById("list");
let buttonAdd = document.getElementById("add");
let buttonCheckIn = document.getElementById("checkIn");

//Jag skapar en array som ska vara synkad med listan
//Arrayens längd kan jag använda som krav i villkorssattser.

let amountOfPassengers = [];

//Eftersom att listan är tom i början så kallas denna funktion
//när sidan har laddat

function emptyQueue() {
  if(amountOfPassengers.length === 0){
    alert("There’s currently no people standing in line");
  }
  else{ 
//Gör ingenting
  } 
}

//Variabeln där jag lagrat add knappen får en eventlistener
//Om textfältet är tomt > skriv ut ange ditt namn
//Om arrayens längd är mindre än eller nio > lägg till ett li element
//med en fastTrack knapp i

buttonAdd.addEventListener("click",() =>{
  if(textArea.value === ""){
    alert("Please enter your name")
  }
  else if(amountOfPassengers.length <= 9){
    //li elementet skapas först och får ett värde
    //Till sist appendas det i ol passengers

    let listItem = document.createElement("li");
    listItem.innerText = textArea.value;
    passengers.appendChild(listItem);

    //sedan skapas en knapp som ska bli li´s child
    //Knappen får en text, samt ett id för css styling
    //Knappen appendas 

    let buttonFastTrack = document.createElement("button")
    buttonFastTrack.innerText = "FastTrack";
    buttonFastTrack.id = "fastTrack"
    listItem.appendChild(buttonFastTrack);

    //Till sist synkar vi arrayen med listan.
    //Ett nytt element pushas in i arayen med värdet av
    //användarens inputs.
    //Textfältet lämnas därefter tomt genom att nollställa dess värde.

    amountOfPassengers.push(textArea.value)
    textArea.value = "";
   
    //Den skapade FastTrack knappen får en eventlistener.
    //Jag skapar upp två temporära variabler.
    //Knappens parent element (li) tas bort efter click
    //och sätts in som det första childet i listan.

    buttonFastTrack.addEventListener("click", (e) => {
      let parent = e.target.parentElement;
      let itemToMove = parent;
      parent.remove();
      passengers.insertBefore(itemToMove, passengers.firstChild);
    })
  }

    //Jag sätter en gräns för hur många passagerare som får
    //befinna sig i listan, om antalet överstiger 10 så får användaren
    //en alert med en sträng

  else if(amountOfPassengers.length >= 9){
    alert("The list is full and you have to wait until someone checks in")
  }
})
   
//Variabeln där jag lagrat checkIn knappen får en eventlistener.
//Om du trycker på checkIn när listan är tom får du en alert
//Annars så tas den första personen i listan bort

buttonCheckIn.addEventListener("click", () => {
  if(amountOfPassengers.length === 0){
    emptyQueue();
  }
  else{
  passengers.firstElementChild.remove();
  amountOfPassengers.shift();
  }
})
