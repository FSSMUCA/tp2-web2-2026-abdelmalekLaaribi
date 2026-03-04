let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

//nom
let nomSEpace=nom.trim();
if(nomSEpace===""){
    nomSEpace="INCONNU"
}

//age
let ageInt=parseInt(age);
let ageValide=1;
if(ageInt<=0 || Number.isNaN(ageInt)){
    ageValide=0
}

//email
const regexSimple = /@.*\./;
let emailValide=0;
if (regexSimple.test(email)) {
  emailValide=1;
} 

//scoreJeu
let scoreJeuValid=1;
let scoreJeuInt=parseInt(scoreJeu,10);
if(Number.isNaN(scoreJeuInt)){
    scoreJeuInt=0
}

//estAdmin
let estAdminBolien=JSON.parse(estAdmin);

//dernier connextion
derniereConnexionValide=derniereConnexion??"jamais connecte"

//nombre de connexions
let nombreConnexionsInt=parseInt(nombreConnexions)
let nombreConnexionValide=(nombreConnexionsInt?nombreConnexionsInt:"aucune connexion")



//sortie
console.log("============= rapport utilisateur ============")
console.log(`nom          : "${nomSEpace}"`);
console.log(`age          : ${ageInt} (${ageValide?"valide":"invalid"})`);
console.log(`email        : "${email}" (${emailValide?"valide":"invalid"})`);
console.log(`scoreJeu     : ${scoreJeuInt} (${scoreJeuValid?"extrai":"nest pas extre"})`);
console.log(`est admin    : ${estAdminBolien} ()`);
console.log(`dernier connexion  : "${derniereConnexionValide}" `);
console.log(`nombre de connection  : "${nombreConnexionValide}" `);

