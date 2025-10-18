//1. Megnyitottuk a table_row mappát vscode-ban és beágyaztunk egy script-et kitero.js néven. Deklaráltunk egy változót, aminek adtunk egy string értéket (egy szavasat). Ezután deklaráltunk egy üres objektumot constal. Az objektumnak definiáltunk egy tulajdonságot az objvaltozo.tulajdonsagnev mintát követve és egy szám értéket adtunk neki. Ezután logoltuk a megadott tulajdonság értékét.

let szoveg = "alma";

const obj = {};

obj.szam = 42;

console.log(obj.szam);

//2. Deklaráltunk egy új változót aminek egy szám értéket adtunk meg. Ezt a szám értékét vizsgáltuk, hogy nagyobb-e mint 5. Ha nagyobb 5, akkor korábban létrehozott objektumnak bracket notationnel definiáltunk egy tulajdonságot string értékkel az objvaltozo["stringertek"] mintát követve. Ha a feltételünk hamis volt, akkor az első stringet tároló értéket használtuk fel a bracket notation-ben egy új tulajdonság definiálásához az objvaltozo[valtozonev] segitségével. Az if alatt logoltuk az objektumunkat, és megnéztük mit műveltünk. Miután megfigyeltük az if működését, megváltoztattuk a számunk értékét, hogy a másik ágba fusson bele.

let szam = 23
if (szam < 5) {
    obj["name"] = "alma";
} else {
    obj.name = "korte";
}
console.log(obj)

//3. Ezután deklaráltunk egy boolean értékkel rendelkező változót, és megvizsgáltuk, hogy a negáltja igaz-e, abban ha a negált igaz az esetben kilogoltunk egy üzenetet. Mivel a javascriptben az undefined (pl ha olyan objektum tulajdonságát vizsgáljuk, amely nem rendelkezik értékkel) egy falsy érték, ezért azt is lehet negálni. Tehát ha arra vagyunk kíváncsi van-e értéke az objektum.valtozonevnek, azt egyszerűen be tudjuk írni feltételként, és ha nincs értéke azt false-ként fogja kiértékelni az elágazás.

let boolean_ertek = true
if (boolean_ertek == true) {
    console.log("a logiaki érték igaz")
}

//4. Ezután írtunk egy példát a két egyenlőségjeles elágazásra, ahol egy 5-ös számot hasonlítottunk egy stringel, ami 5-öst tartalmazott és az elágazás igaz ágába kilogoltunk egy stringet. Meglepetten vettük észre, hogy ez igaz. Majd megnéztük ugyanezt 3 egyenlőségjellel, akkor már nem volt igaz.

let otos1 = "5"
let otos2 = 5
if (otos1 == otos2) {
    console.log("alma")
}

//5. Miután átbeszéltük az elágazás dolgot, visszamentünk a table_col mappába, hogy megnézzük az elágazásunkat a for cikluson belül. Itt egy olyan vizsgálatnak kell lennie, ami azt vizsgálja, hogy az objektumunknak az adott tulajdonsága rendelkezik-e értékkel. A vizsgálatunk tárgya tehát, hogy valami undefined-e. Mivel az undefined egy falsy érték ezért az elágazásban lehet annyi is, hogy a változó adott tulajdonságára utalunk. Ha ezt negáljuk, akkor természetesen az azzal ekvivalens, mintha != undefined-et írnánk. Egy másik fontos dolog a null (amit c#-ból ismerhettek) és az undefined javascriptben nem ugyanaz. A null értéke azonos az undefineddel, de a típusa nem (obj.valtozonev == null) az igaz undefinednél, de (obj.valtozonev === null) hamis!!!!
// Van egy objektumunk néhány tulajdonsággal

/**
 * @type {{nemzetiseg?:string,szerzo:string,mu:string}[]}
 */


const arr = [
  {
    nemzetiseg: "Orosz",
    szerzo: "Gogol",
    mu: "A köpönyeg"
  },
  {
    szerzo: "Csehov",
    mu: "A csinovnyik halála"
  },
  {
    nemzetiseg: "Cseh",
    szerzo: "Franz Kafka",
    mu: "Az átváltozás"
  },
  {
    nemzetiseg: "Magyar",
    szerzo: "Örkény István",
    mu: "Egyperces Novellák"
  },
  {
    szerzo: "József Attila",
    mu: "Klárisok"
  },
  {
    nemzetiseg: "Svájc",
    szerzo: "Friedrich Dürrenmatt",
    mu: "A fizikusok"
  }
];



const table = document.createElement("table");
document.body.appendChild(table)
const thead = document.createElement("thead");
table.appendChild(thead)
const tr = document.createElement("tr")
thead.appendChild(tr)



const cimsor = ["Nemzetiség","Szerzó","Mű"]
for (const fejlec of cimsor) {
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = fejlec
}


let szamlalo1 = 0;
for (const x of arr) {
    const tr = document.createElement("tr");
    thead.appendChild(tr);

    if (x.nemzetiseg !== undefined) {
        szamlalo1 = document.createElement("td");
        tr.appendChild(szamlalo1);
        szamlalo1.innerText = x.nemzetiseg;
    }

    const td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.innerText = x.szerzo;
    const td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.innerText = x.mu;

    if (x.nemzetiseg == undefined) {
        szamlalo1.rowSpan = (szamlalo1.rowSpan) + 1;    
    }
}





























