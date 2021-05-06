function change_color() {

    const number = Math.floor(Math.random()*16777215).toString(16); 

    const  color  = "#" + number 

    document.getElementById("color-code").innerHTML = color

    

    document.getElementById("container").style.backgroundColor = color




    // by Mathues S 2021
   }