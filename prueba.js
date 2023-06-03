let altura = 5;
let arbol = '';

for(let i = 0; i < altura; i++) {
    // Genera espacios en blanco para el lado izquierdo del árbol
    let espacios = ' '.repeat(altura - i - 1);

    // Genera las ramas del árbol usando asteriscos
    let ramas = '*'.repeat(2 * i + 1);

    // Añade esta fila del árbol a la cadena de texto
    arbol += espacios + ramas + '\n';
}

// Genera el tronco del árbol
let tronco = ' '.repeat(altura - 1) + '|';

// Añade el tronco al árbol
arbol += tronco;

console.log(arbol);


// Explicar que hace el siguiente algoritmo.
function renombrar() {
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


numerosPares();