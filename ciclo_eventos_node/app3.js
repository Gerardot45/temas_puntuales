/**
 * Todas las líneas son instrucciones no bloqueantes
 */
console.log("Inicio de programa");
setTimeout(() => {
    console.log('Primer Timeout')
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout')
}, 0);

setTimeout(() => {
    console.log('Tercero Timeout')
}, 0);

//este programa se ejecuta en 2° lugar
console.log("Fin de programa");

/**
 * 1. Crea un Main(); en call stack
 * 2. Ejecuta el SetTimeOut(()=>{},3000)
 * 2.1 Node manda la función anterior al NODE API'S 
 * 3. registra el segundo SettimeOut al call stack
 * 3.1 Node manda la función anterior al NODE API'S 
 * 4. registra el tercer SettimeOut al call stack
 * 4.1 Node manda la función anterior al NODE API'S
 * 5. el segundo setTimeOut se manda a la cola de callbacks
 * 6. el segundo setTimeOut se manda a la cola de callbacks
 * 7. Se termina el proceso MAIN
 * 8. El segundo setTimeOut se manda al call stack
 * 8.1 Se ejecuta el segundo setTimeOut
 * 9. El tercer setTimeOut se manda al call stack
 * 9.1 Se ejecuta el tercer setTimeOut
 * 10. El tercer setTimeOut se manda a la cola de callbacks
 * 10.1 El tercer setTimeOut se manda a la pila de procesos
 * Finaliza la aplicación
 */