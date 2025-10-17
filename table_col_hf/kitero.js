const szam = 12 // globális változó


/**
 * ez a függvény semmit nem csinál
 * @returns {void}
 */
valami1(); //lehet elötte mer van hoisting 
function valami1(){
    console.log("alma");
}



/**
 * ki logolja a golbális scope-on lévő változót
 */
function valami2(){
    console.log(szam)
}
valami2();



/**
 * declarálunk lokális változót és ki logoljuk
 */
function  valami3(){
    const localvar = 2
}
valami3();



/**
 * visszatér egy oljan számmal ami 
 * @param {number} param 
 * @returns {number}
 */
function valami4(param){
    const localvar2 = 43
    const localvar3 = localvar2 + param
    return localvar3
}
const a = valami4(2);
console.log(a)
