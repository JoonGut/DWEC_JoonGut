const mostrarTabla = (event) => {
    event.preventDefault();
    const numero = Number(document.getElementById("numero").value);
    if( numero >=1 && numero <= 10 ){
        let tabla = document.getElementById('tabla')
        let tablaDividir = `<h2>Tabla de dividir del ${numero}</h2><ul>`;
        tablaDividir += '<ul>';
        for (let i = 1; i <= 10; i++) {
            let resultado = (numero / i).toFixed(2);//Añadimos el .toFixed para redondear los decimales
            tablaDividir += `<li>${numero} / ${i} = ${ resultado }</li>`;
        }
        tablaDividir += '</ul>';
        tabla.innerHTML = tablaDividir;
    }else{
        alert('El número introducido debe estar entre 1 y 10 (ambos inclusive)');
        document.getElementById("numero").value = '';
    }


}