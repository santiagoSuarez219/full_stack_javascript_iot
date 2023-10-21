"use strict";
(() => {
    let myName = 'Santiago';
    // console.log(myName);
    let myAge = 24;
    // let year = '2023'
    // let year_number =  parseInt(year)
    // console.log(year_number + 5);
    let learningTypeScript = true;
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [1, 2, 3, 4, 5, 'Hola'];
    // Union Types
    let userId;
    userId = 20;
    userId = '30';
    function saludar(id) {
        return `hola, usuario ${id}`;
    }
    let variableDinamica = '300';
    variableDinamica = 23;
    variableDinamica = true;
    let tallaPrendas;
    // tipos literales
    tallaPrendas = 'S';
    tallaPrendas = 'M';
    // tallaPrendas = 'Y'
})();
