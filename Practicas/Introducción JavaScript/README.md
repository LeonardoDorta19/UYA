# Introducción JavaScript

### 1. Crea una tabla describiendo el propósito de las funciones javascript incluidas en la última trasparencia del documento de introducción a javascript


|                 |                                       |                                                                                                                                                                                                      |
|-----------------|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tipo de función | Funcion                               | Descripción                                                                                                                                                                                          |
| Array           | split()                               | se usa para dividir una array en una matriz de subcadenas y devuelve la nueva matriz.                                                                                                                |
|                 | join()                                | une todos los elementos de una array en string y devuelve esta cadena.                                                                                                                               |
|                 | push()                                | El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.                                                                                              |
|                 | shift()                               | El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array. Sintaxis                                                                            |
|                 | reverse()                             | El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.                                              |
| número          | isNaN(valor)                          | determina cuando el valor es NaN o no                                                                                                                                                                |
|                 | toFixed(digitos)                      | ) formatea un número usando notación de punto fijo.                                                                                                                                                  |
| String          | concat()                              | El método concat() se utiliza para combinar dos o más cadenas. Este método no cambia las cadenas existentes, sino que retorna una nueva cadena.                                                      |
|                 | toUpperCase()                         | devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.                                                                                                                      |
|                 | toLowerCase()                         | retorna la cadena de texto desde la que se llama convertida en minúsculas, de acuerdo con cualquier localización específica de correspondencia de mayúsculas y minúsculas.                           |
|                 | charAt(posición)                      | El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.                                                                                                           |
|                 | indexOf(caracter)                     | Devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor. |
|                 | lastIndexOf(caracter)                 | Devuelve la posición (índice) en la que se encuentra el valor de Busqueda, dentro del objeto String que realiza la llamada, de la última ocurrencia del valor especificado; o -1 si no se halla.     |
|                 | substring(inicio, fin)                | Devuelve un subconjunto de un objeto String.                                                                                                                                                         |
|                 | split(separador)                      | El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separacion de la cadena en subcadenas                                                                  |
| Métodos DOM     | document.getElementById(id)           | Devuelve una referencia de objeto al elemento identificado.                                                                                                                                          |
|                 | document.getElementsByTagName(name)   | Devuelve una lista de elementos con el nombre de etiqueta dado.                                                                                                                                      |
|                 | document.getElementsByClassName(name) | Devuelve una lista de elementos con el nombre de clase dado.                                                                                                                                         |
|                 | document.createElement(element)       | Creates a new element with the given tag name.                                                                                                                                                       |
|                 | document.removeChild(element)         | Elimina un nodo hijo del DOM y puede devolver el nodo eliminado.                                                                                                                                     |
|                 | document.appendChild(element)         | Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.                                                                                                     |
|                 | document.replaceChild(new, old)       | Reemplaza un nodo hijo del elemento especificado por otro.                                                                                                                                           |
|                 | document.write(text)                  | Escribe expresiones HTML o código JavaScript en un documento.                                                                                                                                        |

### 2. Realiza un esquema del árbol DOM que genera el [código HTML en el fichero enlazado](https://campusvirtual.ull.es/1920/pluginfile.php/258285/mod_assign/intro/dom.html)

![dom1](squema/dom1.jpeg)

![dom2](squema/dom2.jpeg)



### 3. Define una función en javascript en la que se pueda calcular el cambio entre diferentes monedas (al menos 3 diferentes).

```javascript
 function moneda() {
            this.nombre
            this.tipoDeCambio

            this.convertir = function(monto) {
                resultado = monto * this.tipoDeCambio
                document.getElementById('resultado_cambio').innerHTML = monto + ' Euros son : ' + resultado + ' ' + this.nombre
               
            }
        }

        var yen = new moneda()
        yen.nombre = "Yenes"
        yen.tipoDeCambio = 117.20

        var dolares = new moneda()
        dolares.nombre = "Dolares"
        dolares.tipoDeCambio = 1.09

        var libras = new moneda()
        libras.nombre = "Libras"
        libras.tipoDeCambio = 0.88

        function convertirMoneda(tipo_moneda) {
            var monto_input = document.getElementById('cantidad').value

            if(tipo_moneda == "yenes"){
                yen.convertir(monto_input)
            } else if(tipo_moneda == "dolares"){
                dolares.convertir(monto_input)
            } else if(tipo_moneda == "libras"){
                libras.convertir(monto_input)
            }

        }
```

Para su ejecucion, hacemos click en el siguiente enlace en rojo

![enlaceEnRojo](screenshots/enlaceEnRojo.png)

![cambioDeMoneda](screenshots/cambioDeMoneda.png)


### 4. Define una función javascript que calcule la edad de los usuarios, y su sueldo. Debes considerar un json de ejmplo con los datos, en el que se registra para cada usuario su dni, año de nacimiento, fecha de ingreso en la empresa, plus de productividad en %, plus de antigüedad bruto (0,1% por cada tres años trabajado) y el sueldo base. (El json debe estar en el propio código, inicializando una variable, explica por qué se te exige este requisito).

```javascript
let companyUsers = 

{
	"dni": 54445454,
	"bornYear": 1991,
	"startDate": 2015,
	"productivityPlus": 15,
	"baseSalary": 1500,
}




function AgeAndSalary(companyUsers){

	var date = new Date() 
	var age =  parseInt(date.getFullYear()) - parseInt(companyUsers.bornYear)
	var longevity = (parseInt(date.getFullYear()) - parseInt(companyUsers.startDate))
	var totalSalary = companyUsers.baseSalary * (longevity + companyUsers.productivityPlus) 
	alert("el usuario tienes" + age + " y su salario es de  " + totalSalary )
}

console.log(companyUsers)
```

![AgeAndSalary function](screenshots/AgeAndSalary.png)

### 5. Crear un script que muestre un informe de la cantidad de párrafos, enlaces y encabezados en tu página de inicio.

```javascript
function report(){
	var links = document.getElementsByTagName("a")
	console.log("cantidad de links: " + links.length)
	var paragraph = document.getElementsByTagName("p")
	console.log("cantidad de parrafos: " + paragraph.length)


	var typesOfHeaders = ["h1","h2","h3","h4","h5","h6","h7"]

	typesOfHeadersLength = 0

	for (i of typesOfHeaders){
		typesOfHeadersLength += document.getElementsByTagName(i).length
	}

	console.log("cantidad de encabezados: " + typesOfHeadersLength)
}
```
Para ejecutarla, es necesario abrir la consola en el navegador y ejecutar la función `report()`

![codigoEnEjecucion](screenshots/reportFunction.png)
