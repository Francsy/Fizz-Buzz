/* // Hacemos un bucle que se repetirá 1000 veces.
La expresión inicial será el contador igual a 0.
La condición menor que 1000 para que el bucle continue 1000 veces (la primera iteración es 0)
La expresión final i++ para actualizar el contador para la siguiente iteración.
) */
for (let i = 0; i < 1000; i++) {
    if (i%3==0 && i%5==0) {
            console.log("FizzBuzz")
        }
        else {
            if (i%3==0) {
            console.log("Fizz");
            } if (i%5==0) {
            console.log("Buzz");
            }
            else {
        console.log(i);
        }
    }
}
/* Una primera condición imprime FizzBuzz solo si es múltiplo de 3 y de 5.
Primer else: cuando lo anterior no ocurre se pueden dar dos condiciones:

- Que sea múltiplo solo de 3 (imprime Fizz)
- Que sea múltiplo solo de 5 (imprime Buzz)
- Segundo else: Que no sea ninguno de ellos (imprime el valor del contador)*/