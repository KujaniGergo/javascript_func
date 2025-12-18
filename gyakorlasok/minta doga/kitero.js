/**
 * @type {{telepules?:string,agazat:string,pelda1:string,pelda2?:string}[]}
 */

//Table struktúra létrehozása
const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);
const thead = document.createElement("thead");
table.appendChild(thead);
const tr = document.createElement("tr");
thead.appendChild(tr);

//Címsor adatai
const cimarr = ["Ókori település", "Ágazat", "Példa"];

//Címsor adatoknak a feltöltése a címsorba
for (const count of cimarr) {
    createTableCell("th", count, tr);
}

// Lista a táblázat adataival
const arr = [
    { telepules: "Athén", agazat: "politika", pelda1: "demokrácia" },
    { telepules: "Athén", agazat: "tudomány", pelda1: "filozófia" },
    { telepules: "Egyiptom", agazat: "mezőgazdaság", pelda1: "csatornák" },
    { telepules: "Spárta", agazat: "neveléstudomány", pelda1: "agogé" },
    { telepules: "Spárta", agazat: "harcászat", pelda1: "hoplita" }
];

//Adatok eltárolása a rowspan-hez
let elozoTelepulesTd = null;
let elozoTelepulesErtek = null;
let RowspanCount = 1;

//Táblázat feltöltése adatokkal
for (let i = 0; i < arr.length; i++) {

    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    // MEG NÉZZÜK, hogy szükséges-e rowspan
    if (arr[i].telepules === elozoTelepulesErtek) {

        RowspanCount++;
        elozoTelepulesTd.rowSpan = RowspanCount;

    } else {

        // új település → új cella jön
        const td1 = createTableCell("td", arr[i].telepules, tr);

        elozoTelepulesTd = td1;
        elozoTelepulesErtek = arr[i].telepules;
        RowspanCount = 1;
    }

    // 2. cella (ágazat)
    createTableCell("td", arr[i].agazat, tr);

    // 3. cella (példa)
    createTableCell("td", arr[i].pelda1, tr);
}


const jsSection = document.createElement("div");
jsSection.id = "jssection";
jsSection.classList.add("hide"); // kezdetben rejtett
document.body.appendChild(jsSection);

// beletesszük a kész táblázatot
jsSection.appendChild(table);

// változók
const htmlSection = document.getElementById("htmlsection");
const selector = document.getElementById("tableselector");

// eseményfigyelő
selector.addEventListener("change", toggleTables);

// induláskor lefuttatjuk
toggleTables();
