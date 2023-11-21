var jugador = document.getElementById("jugador");
var maquina = document.getElementById("maquina");
var resultado = document.getElementById("resultado");

var jugadas = ["piedra", "papel", "tijeras"];

function jugar() {
    var jugadaJugador = jugador.querySelector('input[name="jugada"]:checked').value;
    var jugadaMaquina = jugadas[Math.floor(Math.random() * 3)];
  
    resultado.innerHTML = `Jugador: ${jugadaJugador} - Máquina: ${jugadaMaquina}`;
  
    // Determina el ganador
  
    if (jugadaJugador === jugadaMaquina) {
      resultado.innerHTML += ` - Empate`;
    } else if (jugadaJugador === "piedra" && jugadaMaquina === "tijeras") {
      resultado.innerHTML += ` - ¡Gana el jugador!`;
    } else if (jugadaJugador === "papel" && jugadaMaquina === "piedra") {
      resultado.innerHTML += ` - ¡Gana el jugador!`;
    } else if (jugadaJugador === "tijeras" && jugadaMaquina === "papel") {
      resultado.innerHTML += ` - ¡Gana el jugador!`;
    } else {
      resultado.innerHTML += ` - ¡Gana la máquina!`;
    }
  }

jugador.addEventListener("click", jugar);
