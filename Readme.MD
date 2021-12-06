# node-tutorials

## ¿Qué es Node?

Node es un entorno de ejecución _open-source_ y multiplataforma para ejecutar código Javascript fuera de un navegador.

Normalmente se utiliza Node para construir servicios de Backend (APIs), que se comunican, por ejemplo, con aplicaciones web ejecutandose en el navegador de un cliente o aplicaciones móviles.

Node es ideal para construir aplicaciones en tiempo real, altamente escalables y enfocadas en manipulación de datos.

### ¿Qué hace a Node una buena herramienta para el desarrollo backend?

- Fácil de comenzar a usar
- Muy bueno para hacer prototipos y desarrollar de forma ágil
- Se puede hacer para construir aplicaciones muy rápidas y altamente escalables
- Es usado por compañías grandes como Paypal, Uber, Netflix, Walmart, y más.
- Se utiliza Javascript, por lo tanto los programadores front-end pueden aprovechar sus habilidades con JS para hacer desarrollo full-stack
- Al tener la posibilidad de utilizar JS tanto en el front-end como en el back-end, el código fuente se puede hacer más limpio y consistente (por ejemplo, usando las mismas convenciones de nombres, herramientas y buenas prácticas)
- Tiene uno de los más grandes ecosistemas de librerías _open-source_ para utilizar.

## Arquitectura de Node

### ¿Qué es un entorno de ejecución?

Antes de Node, se utilizaba JavaScript para construir solamente aplicaciones que se ejecutaban dentro de un navegador. Cada navegador tiene un componente llamada "Motor de JavaScript" (_JavaScript Engine_) que interpreta el código JS. Cada navegador utiliza un motor diferente:

| **Navegador** | **Motor de JS** |
| ------------- | --------------- |
| Edge          | Chakra          |
| Firefox       | SpiderMonkey    |
| Chrome        | v8              |

De hecho, es esta variedad de motores lo que hace el código JS se comporte de forma diferente en los navegadores.

Cada navegador provee un entorno de ejecución para el código JavaScript. Por ejemplo: en los navegadores se tienen los objetos `window` y `document`, que permiten la interacción con el entorno en el cual el código se ejecuta.

El crador de Node tomó el motor v8 de Google y lo embebió dentro de un programa `C++`, al cual llamó `node`.

De forma similar a un navegador, Node es un entorno de ejecución para código JavaScript. Contiene un motor de JS que puede ejecutar código, y además tiene ciertos objetos que proveen un entorno para el código. Estos objetos de entorno son diferentes a los que se tiene cuando se ejecuta JS desde un navegador. Por ejemplo, no se tiene el objeto `document`, pero existen objetos que permiten interactuar con el sistema de archivos (`fs`) y escuchar _requests_ sobre un determinado puerto (`http`).

Entonces, tanto Chrome como Node comparten el mismo motor de JS, pero proveen un entorno diferente al mismo.

### Node NO ES un lenguaje de programación

Muchas veces se trata de comparar Node con varios lenguajes de programación (como C# o Ruby). La realidad es que Node no es un lenguaje de programación, por lo tanto no tiene sentido realizar esta comparación.

De igual manera, **Node no es un framework**, es un entorno de ejecución para código JavaScript.

## Como funciona Node

Node es una buena herramienta para construir aplicaciones altamente escalables debido a su naturaleza **asíncrona**.

En nodo, se utiliza un solo hilo para manejar varias peticiones de forma concurrente. Cuando se tiene que realizar procesamiento de I/O, el hilo de Node atiende otras peticiones.

Una vez que el procesamiento de I/O de una petición finaliza, se crea un mensaje en una estructura conocida como _Event Queue_. Esta estructura es constantemente monitoreada por Node, y cada vez que aparece un mensaje en la misma, este lo toma y lo procesa.

Es esta arquitectura lo que hace que Node sean tan bueno para crear aplicaciones con una alta carga de operaciones de I/O. Se pueden atender más clientes sin la necesidad de aumentar las capacidades de hardware. Esto es lo que hace a Node altamente escalable.

En contraparte, Node no debería ser usado para aplicaciones que hagan un uso intensivo de la CPU (como _video encoding_ o manipulación de imagénes)

## Node Core Modules

## Comandos útiles

Verificar versión de Node:

```sh
node --version
```

## Node globals

```js
/* JS Globals */
console.log(); // print a message in console

setTimeout(); // call a function after a delay

clearTimeout();

setInterval();

clearInterval();
```

```js
/* Node Globals */

global; // NodeJS global scope, like 'window' in web browsers
global.console.log();
```

Las variables que se instancian en Node, no se agregan al ámbito global, como sucede en el caso de los navegadores web. Esto quiere decir que el siguiente código arrojaría un `undefined`:

```js
var message = "";
console.log(global.message); // -> undefined
```

Cuando se crea una variable dentro de un fichero, estas solamente pertenecen al ámbito del mismo fichero. Esto se debe al sistema modular de Node.

Este es un comportamiento deseado, ya que para poder construir aplicaciones modulares y evitar colisiones de nombres, no se debe declarar objetos en el ámbito global.

## Módulos de node

Cada fichero (archivo) que compone una aplicación de Node se conoce como **módulo**, las declaraciones que se realizan dentro de un módulo permanencen en el ámbito de dicho módulo, es decir, dentro de ese archivo. Pensando en OOP, vamos a decir que esos objetos declarados son **privados**.

Si se quiere utilizar un objeto declarado dentro de un módulo en otro, entonces este debe exportarse de forma explícita (hacerse público).

Cada aplicación de Node tiene al menos un módulo (archivo), que se conoce como módulo principal o _main module_.

Cada módulo se puede representar a través de un JSON, es decir un conjunto de pares clave-valor.

| Clave      | Descripción                                                 |
| ---------- | ----------------------------------------------------------- |
| `id`       | Identificador único del módulo                              |
| `exports`  | ...                                                         |
| `filename` | Ruta completa al archivo (módulo)                           |
| `loaded`   | Valor booleano que determina si el módulo está cargado o no |
