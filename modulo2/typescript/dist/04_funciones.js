"use strict";
(() => {
    // type Talla = 's'|'M'|'L'
    // function createProduct(
    //     name: string,
    //     createAt: Date,
    //     size: Talla
    // ){
    //     return {
    //         name,
    //         createAt,
    //         size
    //     }
    // }
    // console.log(createProduct('Camisa', new Date(), 's')
    // );
    function saludar(name, lastname) {
        if (typeof (lastname) != 'undefined') {
            return `Hola, ${name} ${lastname}`;
        }
        return `Hola, ${name}`;
    }
    console.log(saludar('Santiago'));
    console.log(saludar('Santiago', 'Suarez'));
})();
