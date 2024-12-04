const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  const swap=(fantasticFour, indice1,indice2)=> {
    if(indice1 < 0 || indice2 < 0 || indice1 >= fantasticFour.length || indice2 >= fantasticFour.length){
        return 'fuera de rango'
    }else{
        let contenidoIndice1 = fantasticFour[indice1];
        let contenidoIndice2 = fantasticFour[indice2];
    
        fantasticFour[indice1] = contenidoIndice2;
        fantasticFour[indice2] = contenidoIndice1;
        return fantasticFour
    }
    
}
console.log(swap(fantasticFour, 0,3));
console.log(swap(fantasticFour, 0,5));