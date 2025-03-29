function addStyle() {
    document.getElementById("add-style").style.width = "800px";
    document.getElementById("add-style").style.textAlign = "center";
    document.getElementById("add-style").style.margin = "auto";
    document.getElementById("add-style").style.border = "solid";
    document.getElementById("add-style").style.backgroundImage = "linear-gradient(#DFD7BF, #F5F5F5, #DFD7BF)";
    document.getElementById("add-style").style.fontSize = "1.6em";
    document.getElementById("add-style").style.fontFamily = "papyrus";

    document.getElementById("btn-container").style.display = "flex";
    document.getElementById("btn-container").style.justifyContent = "center";
    document.getElementById("btn-container").style.margin = "10px auto";
    document.getElementById("btn-container").style.gap = "10px";


    const iterate = document.querySelectorAll(".btn");
    for (let i = 0; i < iterate.length; i++){
        iterate[i].style.backgroundColor = "#3F2305";
        iterate[i].style.color = "#F5F5F5";
        iterate[i].style.padding = "10px 20px";
    };

}

function removeStyle() {
    document.getElementById("add-style").style.width = "";
    document.getElementById("add-style").style.textAlign = "";
    document.getElementById("add-style").style.margin = "";
    document.getElementById("add-style").style.border = "";
    document.getElementById("add-style").style.backgroundImage = "";
    document.getElementById("add-style").style.fontSize = "";
    document.getElementById("add-style").style.fontFamily = "";

    document.getElementById("btn-container").style.display = "";
    document.getElementById("btn-container").style.justifyContent = "";
    document.getElementById("btn-container").style.margin = "";
    document.getElementById("btn-container").style.gap = "";


    const iterate = document.querySelectorAll(".btn");
    for (let i = 0; i < iterate.length; i++){
        iterate[i].style.backgroundColor = "";
        iterate[i].style.color = "";
        iterate[i].style.padding = "";
    };

}