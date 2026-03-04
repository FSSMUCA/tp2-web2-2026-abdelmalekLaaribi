let nombres=[0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0]

let i;

for(i=0;i<nombres.length;i++){

    if(Number.isNaN(nombres[i])){
        console.log(`${nombres[i]} ->INVALIDE`)
    }else if((nombres[i] === Infinity || nombres[i] === -Infinity)){
        console.log(`${nombres[i]} ->INFINI`)
    }else if( Object.is(nombres[i], -0)){
        console.log(`${nombres[i]} ->ZERO NEGATIF`)
    }else if(Number.isInteger(nombres[i])){
        console.log(`${nombres[i]}->${Number.isSafeInteger(nombres[i]) ? "ENTIER SUR" : "ENTIER HORS LIMITES"}`)
    }else{console.log(`${nombres[i]} ->DECIMAL`)}
   
}