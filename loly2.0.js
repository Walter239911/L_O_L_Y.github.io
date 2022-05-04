const contenedor = document.querySelectorAll(".li");
const container = document.querySelector(".position-center");
const hamburger = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

let texthtml = "";

hamburger.addEventListener("click",()=>{
    nav.classList.toggle("nav-2")
  /*  texthtml = `<ul>
    <li class="li">inicio</li>
    <li class="li">precio</li>
    <li class="li">estetica</li>
    <li class="li">info</li>
</ul>`
    nav.style.border = "green";
    
   nav.innerHTML = texthtml;*/
})



contenedor.forEach((el)=>{
    el.addEventListener("click", ()=>{
        console.log(`precionaste ${el.textContent}`)
        if(el.textContent.includes(el.textContent)){
            if(el.textContent.includes("inicio")){
                texthtml =` 
                <div class="position-center">
                <h1>Peluqueria</h1>
                <h3>centro de estetica</h3>
                </div>
                `
                container.innerHTML = texthtml;
            }
            if(el.textContent.includes("precio")){
                texthtml = `
                <h1>peluqueria</h1>
                <div class="contenedor-Precios">
                <ul>
                <li>corte $300</li>
                <li>tinte $1500</li>
                <li>lavado $200</li>
                </ul>
                <ul>
                <li>corte $300</li>
                <li>tinte $1500</li>
                <li>lavado $200</li>
                </ul>
                <ul>
                <li>corte $300</li>
                <li>tinte $1500</li>
                <li>lavado $200</li>
                </ul>
                <ul>
                <li>corte $300</li>
                <li>tinte $1500</li>
                <li>lavado $200</li>
                </ul>
                </div>
                `
                container.innerHTML = texthtml;
            }
            if(el.textContent.includes("info")){
                texthtml = `
                <div class ="info">
                <h2>quienes somos?</h2>
                <p>L O L Y es un centro de estetica que cuenta con mas de 10 años de experiacia. pero solo somos eso?, no en nuestro local contamos con diversas actividades</p>
                <h2>que actividades realizamos?</h2>
                <p>las actividades con la que contamos son: peluqueria(especializado es mujeres), depilacion(con zera y laser),y maquinaria para la estetica femenina (....) </p>
                </div>
                `
                container.innerHTML = texthtml;
            }
        }
    })
})


    
