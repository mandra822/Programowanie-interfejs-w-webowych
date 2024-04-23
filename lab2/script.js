"use strict";

//zmienna = 5; // very BAD
//var zmienna2 = 7; //meh
//let zmiennazmienna = 10; 

//const zmiennaOStalejReferencji = 10; //najlepsza opcja zmiennej

//float, int -> number
//boolean -> Boolean
//char, str --> String
//null, None -> null
//undifined
//symbol
//inne - object

//function adder2 () {}
//const adder3 = function (){}
const adder = () => { //<-najlepsza opcja
    console.log("Dodaję!")

    const numberA = document.getElementById("number-a");
    //console.log({numberA}); 
    //console.log(numberA.value)
    const numberB = document.querySelector("#number-b");

    if(numberA.value === "" || numberB.value === ""){

        console.log("A lub B jest puste!!!")
        const modal = document.getElementsByTagName("dialog")[0];
        modal.showModal();
        modal.addEventListener("click", () =>{
            modal.close();
        })
        return;
    }
    const numA = Number(numberA.value);
    const numB = Number(numberB.value);

    if(isNaN(numA) || isNaN(numB)){
        console.log("A lub B jest nieliczbą")
    }
    console.log(`${numA} + ${numB} = ${numA + numB}`);

    const listItem = document.createElement("li");
    listItem.innerText = `${numA} + ${numB} = ${numA + numB}`;
    const theList= document.getElementById("unordered-list");
    theList.append(listItem); 
}

window.onload = ()=>{
    const button = document.getElementById("closing");

    button.addEventListener("click", () => {
        const modal = document.getElementsByTagName("dialog"[0]);
        modal.showModal();
    })
}

//getbootstrap