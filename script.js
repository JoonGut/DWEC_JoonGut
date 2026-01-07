const paleta = document.getElementById("paleta");
const teclado = document.getElementById("teclado");
const mensaje = document.getElementById("mensaje");
const desc = document.getElementById("desc");
const btnReiniciar = document.getElementById("btnReiniciar");

const todasTeclas = [
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM"
];

let filaActual = 0;
let columnaActual = 0;
let palabraObjetivo = "";
let juegoTerminado = false;


function llamarApi() {
  return fetch("https://api.api-ninjas.com/v1/randomword", {
    headers: {
      "X-Api-Key": "TU-API-KEY"
    }
  })
    .then(res => res.json())
    .then(data => {
      const palabra = data.word[0].trim().toLowerCase();
      if (palabra.length !== 5) return llamarApi();
      return palabra;
    });
}


function crearInput() {
  paleta.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      const div = document.createElement("div");
      div.className = "casilla";
      div.id = `input-${i}-${j}`;
      paleta.appendChild(div);
    }
  }
}


function crearTeclado() {
  teclado.innerHTML = "";

  todasTeclas.forEach(fila => {
    const filaDiv = document.createElement("div");
    filaDiv.className = "filaTeclas";

    [...fila].forEach(letra => {
      const tecla = document.createElement("div");
      tecla.className = "teclas";
      tecla.textContent = letra;
      tecla.dataset.key = letra;
      filaDiv.appendChild(tecla);
    });

    teclado.appendChild(filaDiv);
  });
}


function pintarTecla(letra, color) {
  const tecla = document.querySelector(`.teclas[data-key="${letra.toUpperCase()}"]`);
  if (!tecla) return;

  if (color === "green") {
    tecla.style.backgroundColor = "green";
  } else if (color === "yellow" && tecla.style.backgroundColor !== "green") {
    tecla.style.backgroundColor = "yellow";
  } else if (
    color === "gray" &&
    tecla.style.backgroundColor !== "green" &&
    tecla.style.backgroundColor !== "yellow"
  ) {
    tecla.style.backgroundColor = "gray";
  }
}


document.addEventListener("keydown", e => {
  if (juegoTerminado) return;

  const letra = e.key.toUpperCase();

  if (/^[A-Z]$/.test(letra) && columnaActual < 5) {
    document.getElementById(`input-${filaActual}-${columnaActual}`).textContent = letra;
    columnaActual++;
  }

  if (e.key === "Backspace" && columnaActual > 0) {
    columnaActual--;
    document.getElementById(`input-${filaActual}-${columnaActual}`).textContent = "";
  }

  if (e.key === "Enter" && columnaActual === 5) {
    comprobarPalabra();
  }
});

function comprobarPalabra() {
  let palabraIngresada = "";

  for (let j = 0; j < 5; j++) {
    palabraIngresada += document
      .getElementById(`input-${filaActual}-${j}`)
      .textContent.toLowerCase();
  }

  const letrasDisponibles = palabraObjetivo.split("");
  const colores = Array(5).fill("");

  // Verdes
  for (let i = 0; i < 5; i++) {
    if (palabraIngresada[i] === palabraObjetivo[i]) {
      colores[i] = "green";
      letrasDisponibles[i] = null;
    }
  }

  // Amarillos y grises
  for (let i = 0; i < 5; i++) {
    if (colores[i]) continue;

    const idx = letrasDisponibles.indexOf(palabraIngresada[i]);
    if (idx !== -1) {
      colores[i] = "yellow";
      letrasDisponibles[idx] = null;
    } else {
      colores[i] = "gray";
    }
  }

  // Pintar tablero y teclado
  for (let i = 0; i < 5; i++) {
    const casilla = document.getElementById(`input-${filaActual}-${i}`);
    casilla.style.backgroundColor = colores[i];
    pintarTecla(palabraIngresada[i], colores[i]);
  }

  if (palabraIngresada === palabraObjetivo) {
    finalizarJuego(true);
    return;
  }

  if (filaActual === 5) {
    finalizarJuego(false);
    return;
  }

  filaActual++;
  columnaActual = 0;
}


function finalizarJuego(ganado) {
  juegoTerminado = true;

  if (ganado) {
    desc.textContent = "¡Has adivinado la palabra!";
  } else {
    desc.textContent = ` Has perdido. La palabra era ${palabraObjetivo.toUpperCase()}`;
    btnReiniciar.style.display = "block";
  }
}


btnReiniciar.addEventListener("click", iniciarJuego);

function iniciarJuego() {
  filaActual = 0;
  columnaActual = 0;
  juegoTerminado = false;
  btnReiniciar.style.display = "none";
  desc.textContent = "";
  mensaje.textContent = "";

  crearInput();
  crearTeclado();

  llamarApi().then(palabra => {
    palabraObjetivo = palabra;
    console.log("Palabra:", palabraObjetivo);
  });
}


iniciarJuego();
