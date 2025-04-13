document.querySelectorAll('path').forEach(function(path) {
    path.addEventListener('mouseenter', function() {
        this.parentNode.appendChild(this);
    });
});

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
        suggestions(resultadoBusqueda);
}

// function suggestions(list){
//     const listsug=document.createElement("ul");
//     listsug.className='dropdown-menu show position-absolute w-100 top-100';
//     document.querySelector('#busqueda').appendChild(listsug);
//     list.forEach((deptos)=>{
//         const redireccion=document.createElement("a");
//         redireccion.href=`#contenido-${deptos.toLowerCase()}`;
//         redireccion.className='link-primary link-underline-opacity-0';
//         listsug.appendChild(redireccion);
//         const lis=document.createElement("li");
//         lis.innerHTML=deptos;
//         redireccion.appendChild(lis);
//     })
// }
function suggestions(list){
    const listsug=document.createElement("ul");
    listsug.className='dropdown-menu show position-absolute w-100 top-100';
    document.querySelector('#busqueda').appendChild(listsug);
    list.forEach((deptos)=>{

        const lis=document.createElement("li");
        lis.className='dropdown-item';
        const redireccion=document.createElement("a");
        redireccion.href=`#contenido-${deptos.toLowerCase()}`;
        redireccion.className='link-primary link-underline-opacity-0';
        redireccion.innerHTML=deptos;
        lis.appendChild(redireccion);
        listsug.appendChild(lis);
    })
}

function borrar(){
    const lista=document.querySelector('#dropdown');
    const divv=document.querySelector('#resultados');
    if(lista) lista.remove();
    if(divv) divv.remove();
}