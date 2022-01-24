// seleccion de idioma español o ingles

const seleccionIdioma = ()=>{
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
    })    
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
    })
}

const idioma = localStorage.getItem("idioma");

if (idioma ===  null) seleccionIdioma();
else {
    console.log(`idioma: ${idioma}`);
}