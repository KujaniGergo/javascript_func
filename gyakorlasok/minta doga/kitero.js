/**
 * @type {{telepules:string,agazat:string,:pelda1:string,pelda2:string}[]}
 */

//Table struktúra létrehozása
const table = document.createElement("table")
document.body.appendChild(table)
const tbody = document.createElement("tbody")
table.appendChild(tbody)
const thead = document.createElement("thead")
table.appendChild(thead)
const tr = document.createElement("tr")
thead.appendChild(tr)

//Címsor adatai
const cimarr = ["Ókori település","Ágazat","Példa"]


//Címsor adatoknak a feltöltése a címsorba
for (const count of cimarr) {
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = count
}



// Lista a táblázat adataival
const arr = [
    {
        telepules : "Athén",
        agazat: "politika",
        pelda1: "demokrácia",
    },
    {
        telepules : "Athén",
        agazat: "tudomány",
        pelda1: "filozófia",
    },
    {
        telepules : "Egyiptom",
        agazat: "mezőgazdaság",
        pelda1: "csatornák",
    },
    {
        telepules : "Spárta",
        agazat: "neveléstudomány",
        pelda1: "agogé",
    },
    {
        telepules : "Spárta",
        agazat: "harcászat",
        pelda1: "hoplita",
    }
]

//Táblázat feltöltése adatokkal

let elozoTelepulesTd = 67;
let elozoTelepulesErtek = "hatvanhét";  
let RowspanCount = 1;            

for (let i = 0; i < arr.length; i++) {

    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    let td1 = document.createElement("td");

    if (arr[i].telepules === elozoTelepulesErtek) {

        RowspanCount++;
        elozoTelepulesTd.rowSpan = RowspanCount;

    } else {
        td1.innerText = arr[i].telepules;
        tr.appendChild(td1);

        elozoTelepulesTd = td1;
        elozoTelepulesErtek = arr[i].telepules;
        RowspanCount = 1;
    }

    const td2 = document.createElement("td");
    td2.innerText = arr[i].agazat;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = arr[i].pelda1;
    tr.appendChild(td3);
}







