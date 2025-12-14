let paleta = document.getElementById("paleta");
let teclado = document.getElementById("teclado");
let mensaje = document.getElementById("mensaje");

// Layout del teclado
let todasTeclas = [
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM"
];

let filaActual = 0;
let columnaActual = 0;

function crearinput() {
  paleta.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      let input = document.createElement("div");
      input.className = "casilla";
      input.id = `input-${i}-${j}`;
      paleta.appendChild(input);
    }
  }
}

function crearTeclado() {
  teclado.innerHTML = "";

  for (let i = 0; i < todasTeclas.length; i++) {
    let filaDiv = document.createElement("div");
    filaDiv.className = "filaTeclas";

    let fila = todasTeclas[i];
    for (let j = 0; j < fila.length; j++) {
      let tecla = document.createElement("div");
      tecla.className = "teclas";
      tecla.textContent = fila[j];
      tecla.dataset.key = fila[j];

      filaDiv.appendChild(tecla);
    }

    teclado.appendChild(filaDiv);
  }
}


document.addEventListener("keydown", (e) => {
  let letra = e.key.toUpperCase();

  if (/^[A-Z]$/.test(letra)) {
    if (columnaActual < 5 && filaActual < 6) {
      let casilla = document.getElementById(
        `input-${filaActual}-${columnaActual}`
      );
      casilla.textContent = letra;
      columnaActual++;
    }
  }


  if (e.key === "Backspace") {
    if (columnaActual > 0) {
      columnaActual--;
      let casilla = document.getElementById(
        `input-${filaActual}-${columnaActual}`
      );
      casilla.textContent = "";
    }
  }

  // Enter → pasar a la siguiente fila
  if (e.key === "Enter") {
    if (columnaActual === 5) {
      filaActual++;
      columnaActual = 0;
    }
  }
});

crearTeclado();
crearinput();
