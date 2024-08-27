// Seleccionamos los elementos del DOM
const entradaTexto = document.querySelector(".entrada-texto");
const salidaTexto = document.querySelector(".salida-texto");
const seccionTexto1 = document.querySelector(".texto1");
const seccionTexto2 = document.querySelector(".texto2");
const btnCopiar = document.querySelector(".copiar");

const reemplazos = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

// Función de validación
function validar(textoValidar) {
    return !/[ÁÉÍÓÚáéíóúÑ]/.test(textoValidar); // Permite mayúsculas y minúsculas
}

// Función de encriptado
function encriptar() {
    const texto = entradaTexto.value.toLowerCase(); // Convertir todo a minúsculas
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }
    const salida = texto.split('').map(letra => reemplazos[letra] || letra).join('');
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

// Función de desencriptado
function desencriptar() {
    let texto = entradaTexto.value.toLowerCase(); // Convertir todo a minúsculas
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }
    for (const [letra, codificacion] of Object.entries(reemplazos)) {
        texto = texto.split(codificacion).join(letra);
    }
    entradaTexto.value = "";
    salidaTexto.value = texto;
    ocultar();
}

// Función para ocultar elementos
function ocultar() {
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "block";
}

// Función para mostrar elementos
function mostrar() {
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/notexto.png)";
    seccionTexto1.style.display = "block";
    seccionTexto2.style.display = "block";
    btnCopiar.style.display = "none";
}

// Función para copiar texto
function copiar() {
    navigator.clipboard.writeText(salidaTexto.value);
    const anuncio = document.querySelector(".anuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}
