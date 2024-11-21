const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
function findArrayIndex(array, text) {
    let encontrado = false;
    let posicion = undefined;
    for (let i = 0; i < array.length; i++) {
        if(array[i].toLowerCase().includes(text.toLowerCase())){
            posicion=i;
            encontrado=true;
            break;
        }
    }
    if(encontrado===false){
        return 'no esta en el array';
    }
    return posicion
}
console.log('--------------PRUEBAS CON FIND-------------')
console.log(findArrayIndex(mainCharacters,'anakin'));
console.log(findArrayIndex(mainCharacters,'aaa'));
console.log(findArrayIndex(mainCharacters,'bbb'));
console.log(findArrayIndex(mainCharacters,'Obi-Wan'));


//---------------------------------------
function removeArrayIndex(array, text) {
    let encontrado = false;
    for (let i = 0; i < array.length; i++) {
        if(array[i].toLowerCase().includes(text.toLowerCase())){
            array.splice(i,1);
            encontrado=true;
            break;
        }
    }
    if(encontrado===false){
        return 'no esta en el array'
    }

    return array;

}
console.log('--------------PRUEBAS CON REMOVE-------------')
console.log(removeArrayIndex(mainCharacters,'anakin'));
console.log(removeArrayIndex(mainCharacters,'cccc'));
console.log(removeArrayIndex(mainCharacters,'dddd'));
console.log(removeArrayIndex(mainCharacters,'Obi-Wan'));