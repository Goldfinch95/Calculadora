
const botonSumar = document.querySelector ("#sumar");

const suma = ()=>{
  const primerNumero = Number(document.querySelector ("#primerNumero").value);
   const segundoNumero = Number(document.querySelector ("#segundoNumero").value);
     total = primerNumero + segundoNumero;
     document.getElementById ("resultado").innerHTML = (`${total}`);
}

botonSumar.addEventListener ("click", suma);

const botonRestar = document.querySelector ("#restar");

const resta = ()=>{
    const primerNumero = Number(document.querySelector ("#primerNumero").value);
    const segundoNumero = Number(document.querySelector ("#segundoNumero").value);
    total = primerNumero - segundoNumero;
    document.getElementById("resultado").innerHTML = (`${total}`);
}

botonRestar.addEventListener ("click", resta);

const botonMultiplicar = document.querySelector ("#multiplicar");

const multiplicar = ()=>{
    const primerNumero = Number(document.querySelector ("#primerNumero").value);
    const segundoNumero = Number(document.querySelector ("#segundoNumero").value);
    total = primerNumero * segundoNumero;
    document.getElementById ("resultado").innerHTML = (`${total}`);
}

botonMultiplicar.addEventListener ("click", multiplicar);

const botonDividir = document.querySelector ("#dividir");

const dividir = ()=> {
    const primerNumero = Number(document.querySelector ("#primerNumero").value);
    const segundoNumero = Number(document.querySelector ("#segundoNumero").value);
    total = primerNumero / segundoNumero;
    document.getElementById ("resultado").innerHTML = (`${total}`);
}

botonDividir.addEventListener ("click", dividir);

const botonPotencia = document.querySelector ("#potencia");

const potencia = ()=>{
    const primerNumero = Number(document.querySelector ("#primerNumero").value);
    const segundoNumero = Number(document.querySelector ("#segundoNumero").value);
    total = primerNumero ** segundoNumero;
    document.getElementById ("resultado").innerHTML = (`${total}`);
}

botonPotencia.addEventListener ("click", potencia);

const botonRaiz = document.querySelector ("#raiz");

const raiz =()=>{
    const primerNumero = Number(document.querySelector ("#primerNumero").value);
    const segundoNumero = Number(document.querySelector ("#segundoNumero").value);
    total = Math.pow(segundoNumero,(1/primerNumero));
    document.getElementById ("resultado").innerHTML = (`${total}`);
}

botonRaiz.addEventListener ("click", raiz);

const botonSalir = document.querySelector("#salir");

const salir =()=>{
    window.close();
}

botonSalir.addEventListener ("click", salir);