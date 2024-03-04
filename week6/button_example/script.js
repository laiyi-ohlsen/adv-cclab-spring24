/* syntax
Element.addEventListener(event, function){
    
    *action that you want to take place*

}

//arrrow syntax
element.addEventListener("click", () => {

})

*/ 

//  Part One

let btn = document.querySelector("button"); 

btn.addEventListener("click", () => {
    let x = Math.floor(Math.random() * 255); 
    let y = Math.floor(Math.random() * 255); 
    let z = Math.floor(Math.random() * 255); 

    let bgColor = "rgb(" + x + "," + y + "," + z + ")"
    console.log(bgColor)
    
    document.body.style.background = bgColor; 

    // Part Three

    let frm1 = document.getElementById ("frm1"); 

    let h2s = document.getElementsByTagName("H2");

    console.log(frm1);
    console.log(frm1.elements);
    console.log(h2s);

    h2s[0].innerHTML = frm1.elements[0].value; 
    h2s[1].innerHTML = frm1.elements[1].value; 

    // let i; 
    // for (i = 0; i < frm1.length; i++){ 
    //     h2s[i].innerHTML = frm1.elements[i].value; 
    // }



    // Part 4
    /*
    let frm1 = document.getElementById ("frm1"); 

    let h2s = document.getElementsByTagName("H2");

    console.log(frm1);
    console.log(frm1.elements);
    console.log(h2s);

    let i; 
    let elem = []; 
    for (i = 0; i < frm1.clientHeight; i++){ 
        elem.push(document.createElement("h3")); 
        elem[i].innerHTML = frm1.elements[i].value; 
        document.body.appendChild(elem[i]);
    }
*/ 

})

// Part Two

removeText.onclick = function() { 
    removeText.remove(); 
    console.log("remove")
}



