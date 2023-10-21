(() => {
    let myName: string = 'Santiago'
    // console.log(myName);
    let myAge: number = 24
    
    // let year = '2023'
    // let year_number =  parseInt(year)
    // console.log(year_number + 5);
    let learningTypeScript: boolean = true

    let array1: (number)[] = [1,2,3,4,5];
    let array2: (number | string)[] = [1,2,3,4,5,'Hola'];
    
    // Union Types
    let userId: string | number; 
    userId = 20;
    userId = '30';

    function saludar(id: string){
        return `hola, usuario ${id}`
    }

    // Alias y tipos literales
    type UserID = string | boolean | number;

    let variableDinamica: UserID = '300'
    variableDinamica = 23
    variableDinamica = true

    let tallaPrendas: 'S' | 'M' | 'L' ;

    // tipos literales
    tallaPrendas = 'S'
    tallaPrendas = 'M'
    // tallaPrendas = 'Y'
})();


