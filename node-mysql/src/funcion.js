const nombre = document.querySelector('#nombreSorteo')
const descripcionSorteo = document.querySelector('#descripcionSorteo')
const btnSorteo = document.querySelector('#btnSorteo')

btnSorteo.addEventListener('click',function(){
    window.location.href = `agregarSorteo/${nombre.value}/${descripcionSorteo.value}`;
    
});
