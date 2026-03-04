let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

//partie a
console.log("-------------parite a----------");

console.log(`nom :?? ${nom ?? "valeur par défaut"}`)
console.log(`age :?? ${age ?? "valeur par défaut"}`)
console.log(`ville :??${ville ?? "valeur par défaut"}`)
console.log(`score :??${score ?? "valeur par défaut"}`)
console.log(`actif :??${actif ?? "valeur par défaut"}`)

//partie b
console.log("-------------parite b----------");
console.log(`nom :|| ${nom || "valeur par défaut"}`)
console.log(`age :|| ${age || "valeur par défaut"}`)
console.log(`ville :||${ville || "valeur par défaut"}`)
console.log(`score :||${score || "valeur par défaut"}`)
console.log(`actif :||${actif || "valeur par défaut"}`)

//partie c
console.log("-------------parite c----------");
console.log(`nom :?? et || ${((nom ?? "valeur par défaut")===(nom || "valeur par défaut"))?"meme resultat":"resultat different"}`)
console.log(`age :?? et || ${((age ?? "valeur par défaut")===(age || "valeur par défaut"))?"meme resultat":"resultat different"}`)
console.log(`ville :?? et || ${((ville ?? "valeur par défaut")===(ville || "valeur par défaut"))?"meme resultat":"resultat different"}`)
console.log(`score :?? et || ${((score ?? "valeur par défaut")===(score || "valeur par défaut"))?"meme resultat":"resultat different"}`)
console.log(`actif :?? et || ${((actif ?? "valeur par défaut")===(actif || "valeur par défaut"))?"meme resultat":"resultat different"}`)
