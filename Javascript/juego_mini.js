class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }
  
  atacar(objetivo){
    let ataqueReal = Math.floor(Math.random() * this.ataque);
    let defensaReal = Math.floor(Math.random() * objetivo.defensa);
    let daño = Math.max(0, ataqueReal - defensaReal);
    objetivo.vida -= daño;
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y causa ${daño} de daño. Vida de ${objetivo.nombre}: ${objetivo.vida}`);
    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha muerto.`);
    }
  }

  saludar() {
    console.log(`¡Hola! Soy ${this.nombre}`);
  }
}

class Mago extends Personaje{
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos) {
    super(nombre, vida, ataque, defensa, velocidad);
    this.hechizos = hechizos;
  }

  lanzarHechizo(objetivo){
    let hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    let defensaReal = Math.floor(Math.random() * objetivo.defensa);
    let daño = Math.max(0, hechizo.daño - defensaReal);
    objetivo.vida -= daño;
    console.log(`${this.nombre} lanza ${hechizo.nombre} a ${objetivo.nombre} y causa ${daño} de daño. Vida de ${objetivo.nombre}: ${objetivo.vida}`);
    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha muerto.`);
    }
  }
}

class Guerrero extends Personaje{
  constructor(nombre, vida, ataque, defensa, velocidad, armas) {
    super(nombre, vida, ataque, defensa, velocidad);
    this.armas = armas;
  }

  atacarConArma(objetivo){
    let arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    let defensaReal = Math.floor(Math.random() * objetivo.defensa);
    let daño = Math.max(0, arma.daño - defensaReal);
    objetivo.vida -= daño;
    console.log(`${this.nombre} ataca con ${arma.nombre} a ${objetivo.nombre} y causa ${daño} de daño. Vida de ${objetivo.nombre}: ${objetivo.vida}`);
    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha muerto.`);
    }
  }
}

class Arquero extends Personaje{
  constructor(nombre, vida, ataque, defensa, velocidad, flechas)  {
    super(nombre, vida, ataque, defensa, velocidad);
    this.flechas = flechas;
  }

  dispararFlecha(objetivo){
    let flecha = this.flechas[Math.floor(Math.random() * this.flechas.length)];
    let defensaReal = Math.floor(Math.random() * objetivo.defensa);
    let daño = Math.max(0, flecha.daño - defensaReal);
    objetivo.vida -= daño;
    console.log(`${this.nombre} dispara una flecha a ${objetivo.nombre} y causa ${daño} de daño. Vida de ${objetivo.nombre}: ${objetivo.vida}`);
    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha muerto.`);
    }
  }
}

let personajes = [
  new Mago("Super Bigote", 100, 10, 5, Math.floor(Math.random() * 10) + 1, [{nombre: "Fuego", daño: 50}, {nombre: "Hielo", daño: 40}]),
  new Mago("Kokun", 110, 10, 9, Math.floor(Math.random() * 10) + 1, [{nombre: "Relámpago", daño: 45}, {nombre: "Tierra", daño: 35}]),
  new Guerrero("Rambo", 130,20, 10, Math.floor(Math.random() * 10) + 1, [{nombre: "Espada", daño: 30}, {nombre: "Hacha", daño: 35}]),
  new Guerrero("Luis Miguel", 120, 15, 21, Math.floor(Math.random() * 10) + 1, [{nombre: "Martillo", daño: 40}, {nombre: "Espada", daño: 25}]),
  new Arquero("Niño Fortnite", 90, 12, 6, Math.floor(Math.random() * 10) + 1, [{nombre: "Flecha", daño: 20}, {nombre: "Francotirador", daño: 50}])
];



function obtenerPersonajeAleatorio() {
  return personajes[Math.floor(Math.random() * personajes.length)];
}

function obtenerAccionAleatoria(personaje){
  let acciones = ['atacar'];
  if (personaje instanceof Mago) {
    acciones.push('lanzarHechizo');
  } else if (personaje instanceof Guerrero) {
    acciones.push('atacarConArma');
  } else if (personaje instanceof Arquero) {
    acciones.push('dispararFlecha');
  }
  return acciones[Math.floor(Math.random() * acciones.length)];
}

while (personajes.length > 1){
  personajes.sort((a, b) => Math.random() * a.velocidad - Math.random() * b.velocidad);

  for (let atacante of personajes){
    let atacado;
    do {
      atacado = obtenerPersonajeAleatorio();
    } while (atacado === atacante);

    let accion = obtenerAccionAleatoria(atacante);

    if (accion === 'atacar') {
      atacante.atacar(atacado);
    } else if (accion === 'lanzarHechizo' && atacante instanceof Mago) {
      atacante.lanzarHechizo(atacado);
    } else if (accion === 'atacarConArma' && atacante instanceof Guerrero) {
      atacante.atacarConArma(atacado);
    } else if (accion === 'dispararFlecha' && atacante instanceof Arquero) {
      atacante.dispararFlecha(atacado);
    }

    personajes = personajes.filter(personaje => personaje.vida > 0);

    if (personajes.length <= 1) break;
  }
}

if (personajes.length === 1){
  console.log(`El ganador es ${personajes[0].nombre}`);
}
