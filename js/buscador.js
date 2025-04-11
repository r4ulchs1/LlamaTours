
document.querySelectorAll('path').forEach(function(path) {
    path.addEventListener('mouseenter', function() {
        this.parentNode.appendChild(this);
    });
});

//  //


const tooltip = document.getElementById('tooltip');

// Función para mostrar el tooltip
function mostrarTooltip(event, nombre) {
    tooltip.textContent = nombre;
    tooltip.style.left = event.pageX + 10 + 'px'; // Posicionar cerca del cursor
    tooltip.style.top = event.pageY + 10 + 'px';
    tooltip.style.opacity = 1; // Mostrar el tooltip
}


function ocultarTooltip() {
    tooltip.style.opacity = 0;
}

// Agregar eventos a cada path
document.querySelectorAll('path').forEach(path => {
    
    path.addEventListener('mousemove', (event) => {
        const nombre = path.getAttribute('id'); 
        mostrarTooltip(event, nombre);
    });

    // Ocultar el tooltip cuando el cursor salga del path
    path.addEventListener('mouseleave', ocultarTooltip);
});

//          //



let names=[];
nombreDeptos();
async function nombreDeptos(){
    const deptos= document.querySelectorAll('svg path');
    deptos.forEach(path=>{
        names.push(path.id);
    });
    console.log(names);  
}

borrar();
const entrada=document.querySelector("#buscador");
entrada.addEventListener("input",textoEntrada);

function textoEntrada(){
    borrar();
    const res=entrada.value.toLowerCase();

    if(res.length===0){
        return;
    }

    const resultadoBusqueda=[];

    names.forEach((depto)=>{
        if(depto.substr(0, res.length).toLowerCase()=== res)
        resultadoBusqueda.push(depto);
    })
        const divv=document.createElement("div");
        divv.id='resultados';
        document.querySelector('#buscardiv-contenido').appendChild(divv);
        suggestions(resultadoBusqueda);
}

function suggestions(list){
    const listsug=document.createElement("ul");
    listsug.id="dropdown";
    document.querySelector('#resultados').appendChild(listsug);
    list.forEach((deptos)=>{
        const redireccion=document.createElement("a");
        redireccion.href=`#contenido-${deptos.toLowerCase()}`;
        redireccion.className='enlace';
        listsug.appendChild(redireccion);
        const lis=document.createElement("li");
        lis.innerHTML=deptos;
        redireccion.appendChild(lis);
    })
}

function borrar(){
    const lista=document.querySelector('#dropdown');
    const divv=document.querySelector('#resultados');
    if(lista) lista.remove();
    if(divv) divv.remove();
}