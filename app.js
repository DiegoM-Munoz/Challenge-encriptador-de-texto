const textoDesEncriptar = document.querySelector("#des-encriptar");
const textoResultado = document.querySelector("#resultado-mensaje")

let matriz_code = [
    // En esta matriz, la columna de las vocales corresponde a la posición 0 y los codigos a la posición 1
    ["e", "enter"], // indice 0
    ["i", "imes"],  // indice 1
    ["a", "ai"],    // indice 2
    ["o", "ober"],  // indice 3
    ["u", "ufat"],  // indice 4
];

function encriptarTexto(){
    const texto = encriptar(textoDesEncriptar.value);
    textoResultado.innerHTML = texto;
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function desencriptarTexto(){
    const texto = desencriptar(textoDesEncriptar.value);
    textoResultado.innerHTML = texto;
}

function desencriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseEncriptada;
}