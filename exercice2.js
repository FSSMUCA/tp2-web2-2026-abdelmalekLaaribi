let valeurs=[0, 1, "", "0", null, undefined, NaN, false, [], {}]
let i=0;
let a;
for(i;i<valeurs.length;i++){
    
    console.log(`${String(valeurs[i])}->${valeurs[i]?"truthy":"falsy"}`)

console.log(i)
}

