console.log(`0 == "" -> ${0 == ""}  | 0 === "" -> ${0 === ""}`)
console.log(`0 == "0" -> ${0 == "0"}  | 0 === "0" -> ${0 === "0"}`)
console.log(`0 == false -> ${0 == false}  | 0 === false -> ${0 === false}`)
console.log(`"" == false -> ${"" == false}  | "" === false -> ${"" === false}`)
console.log(`null == undefined -> ${null == undefined}  | null === undefined -> ${null === undefined}`)
console.log(`null == false -> ${null == false}  | null === false -> ${null === false}`)
console.log(`NaN == NaN -> ${NaN == NaN}  | NaN === NaN -> ${NaN === NaN}`)
console.log(`1 == "1" -> ${1 == "1"}  | 1 === "1" -> ${1 === "1"}`)
console.log(`" \\t\\n " == 0 -> ${" \t\n " == 0}  | " \\t\\n " === 0 -> ${" \t\n " === 0}`)

console.log("------------------------------------------------");
const data = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

let i;
let result=0;
for(i=0;i<data.length;i++){
if((data[i][0]==data[i][1])!=(data[i][0]===data[i][1])){
    
    result++;
}
}
console.log(`${data.length} paire(s) où == et === donnent des résultats différents :${result}`)

