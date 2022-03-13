const calculator = () =>{
  let number;
  let number2;

  number = prompt(`Bienvenido a Calculadora!
Introduce un número`);

  while (isNaN(number) || number === "") {
      alert(`${number}
No es un número. Vuelve a intentar`);
      number = prompt("Introduce un número");
  }
  number = parseFloat(number);

  if (number === null) {
      alert('Has cancelado la operación');
  } else {
      number2 = prompt(`Introduce un segundo número.
Este número es opcional. Si das a Ok o cancelas te devolverá
la raíz cuadrada del primer número que introdujiste.`);

      while (isNaN(number2)) {
          alert("No es un número. Vuelve a intentar");
          number2 = prompt("Introduce un número");
      }
      number2 = parseFloat(number2);

      if (isNaN(number2)) {
          alert(`La raíz cuadrada de ${number} es ${number * number}`);
      } else {
          let results = [
              (number + number2).toFixed(3),
              (number - number2).toFixed(3),
              (number * number2).toFixed(3),
              (number / number2).toFixed(3)
          ];

      alert(`Los resultados son:      
SUMA: ${number} + ${number2} = ${results[0]},
RESTA: ${number} - ${number2} = ${results[1]},
MULTIPLICACIÓN: ${number} * ${number2} = ${results[2]},
DIVISIÓN: ${number} / ${number2} = ${results[3]}`)
      }
  }
}

calculator();