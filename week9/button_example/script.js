/* ------------------------------------------------
// EVENT HANDLER FORMAT

Element.addEventListener(event, function){
*action that you want to take place*
}

// ARROW FUNCTION FORMAT
element.addEventListener("click", () => {

})
------------------------------------------------*/

// ADD EVENT HANDLER

let btn = document.querySelector("button"); 

btn.addEventListener("click", () => {

/* ------------------------------------------------   

// PART ONE - change background color when button is pressed

    let x = Math.floor(Math.random() * 255); 
    let y = Math.floor(Math.random() * 255); 
    let z = Math.floor(Math.random() * 255); 

    let bgColor = "rgb(" + x + "," + y + "," + z + ")"
    console.log(bgColor)

    document.body.style.background = bgColor; 
    ------------------------------------------------*/

    /* ------------------------------------------------
    // PART THREE - OPTION A - replace headers with new words

    let frm1 = document.getElementById ("frm1"); 

    let h2s = document.getElementsByTagName("H2");

    h2s[0].innerHTML = frm1.elements[0].value; 
    h2s[1].innerHTML = frm1.elements[1].value; 
    ------------------------------------------------*/


    /* ------------------------------------------------
    // PART FOUR - OPTION 2 - add headers instead of replacing 

    let frm1 = document.getElementById ("frm1"); 

    let h2s = document.getElementsByTagName("H2");

    let i; 
    let elem = []; 
    for (i = 0; i < frm1.length; i++){ 
    elem.push(document.createElement("h3")); 
    elem[i].innerHTML = frm1.elements[i].value; 
    document.body.appendChild(elem[i]);
    }
    ------------------------------------------------*/

})

/* ------------------------------------------------
// PART TWO - remove text when clicked

removeText.onclick = function() { 
removeText.remove(); 
console.log("remove")
}
------------------------------------------------*/


