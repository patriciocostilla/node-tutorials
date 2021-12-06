function sayHello(name) {
  console.log("Hello " + name); // global
}

sayHello("Pato");
//console.log(window); -> ReferenceError: 'window' is not defined
