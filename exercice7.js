let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = 10
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250


//1 sous-total
let sousTotal=prix*quantite;

//2 reduction
let reduction;
if (codePromo!==null && estMembre) {
    reduction=(sousTotal/reductionPourcentage)
    
}else{
    reduction=0
}

//3 total final
let totalFinal=sousTotal-reduction

//4 solde compte
let isAccepte=0;
if(soldeCompte>=totalFinal){
    quantite--;
    isAccepte=1;
}
let statu;
statu=(isAccepte? ("paiement accepte"):("solde insuffisant"))

//5 nouvou solde
if(isAccepte){
    soldeCompte-=totalFinal;
    
}
//recapitulatif
console.log("===========RECAPITULATIF===========")
console.log("produit :"+nomProduit)
console.log("Quantité :"+quantite)
console.log("Prix unit :"+prix)
console.log("Sous-total :"+sousTotal.toFixed(2))
console.log("Réduction :"+reduction.toFixed(2))
console.log("Total :"+totalFinal.toFixed(2))
console.log("Statut :"+statu)
console.log("Solde :"+soldeCompte.toFixed(2))
console.log("===================================")
