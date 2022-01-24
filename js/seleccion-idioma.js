// seleccion de idioma español o ingles
const seleccion = document.querySelector(".bienvenida--modificacion");
const seleccionIdioma = ()=>{
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
        cerrarSeleccionIdioma()
    })    
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarSeleccionIdioma();
    })
}

const cerrarSeleccionIdioma = ()=>{
    seleccion.style.animation = "desaparecer 1s forwards";
    setTimeout(()=>seleccion.style.display = "none",1000)
}
const idioma = localStorage.getItem("idioma");

if (idioma ===  null) seleccionIdioma();
else {
    console.log(`idioma: ${idioma}`);
    seleccion.style.display = "none";
}
