const textoDesEncriptar = document.querySelector("#des-encriptar");
const textoResultado = document.querySelector("#resultado-mensaje");

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
    crearBoton()
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

function crearBoton() {
    // Create the element
    let crearCopiarBtn = document.createElement("div");
    // Add attributes
    crearCopiarBtn.setAttribute("id", "copy-text"); // Set ID attribute
    crearCopiarBtn.setAttribute("class", "copiar-btn"); // Set class attribute
    crearCopiarBtn.setAttribute("onclick", "copiarTexto()"); // Set eventListener attribute
    crearCopiarBtn.textContent = "Copiar"; // Add text content 
    // Crea el boton dentro del "resultado-mensaje"
    document.getElementById("seccionEncriptar").appendChild(crearCopiarBtn);
}

function copiarTexto() {
    // Get the element (optional, assuming it already exists)
    const resultadoMensaje = document.getElementById("resultado-mensaje");
    // Extract the desired text content
    const textToCopy = resultadoMensaje.textContent;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
            console.log(`Texto copiado al portapapeles: ${textToCopy}`);
            })
            .catch((err) => {
            console.error("Error al copiar texto:", err);
            });
        } else {
        // Fallback for older browsers (use a temporary element)
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        console.log("Texto copiado al portapapeles (método alternativo)");
        }

    // JS para Notificación de Mensaje copiado (Debe estar creado en HTML y depende del CSS)
    // Show toast notification
    const copyMessage = document.getElementById("copy-message");
    copyMessage.classList.add("show"); // Add class to show the notification

    setTimeout(() => {
        copyMessage.classList.remove("show"); // Remove class to hide after a timeout
    }, 1000); // Hide the notification after 1 seconds
}

function copyTouchDevices() {
    // Example for triggering on a button's touchend event:
    const copyButton = document.getElementById("copy-text");
    copyButton.addEventListener("touchend", copiarTexto);

    // Example for simulating a long press (if needed):
    copyButton.addEventListener("touchstart", () => {
        let isLongPress = false;
        const timeout = setTimeout(() => {
            isLongPress = true;
            copiarTexto(); // Call the function if held for a certain duration
        }, 500); // Adjust the timeout duration as needed

        copyButton.addEventListener("touchend", () => {

            clearTimeout(timeout);
            if (!isLongPress) {
            // Handle regular tap behavior if a long press wasn't triggered
            }
        });
    });
}