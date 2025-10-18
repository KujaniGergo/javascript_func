/**
*  @type {{col1:string,col2:string,col3:string}[]}
*/

const arr = [
    {
        col1: 'Sor 1 Adat 1',
        col2: 'Sor 1 Adat 2',
        col3: 'Sor 1 Adat 3',
    },
    {
        col1: 'Sor 2 Adat 1',
        col2: 'Sor 2 Adat 2',
    },
    {
        col1: 'Sor 3 Adat 1',
        col2: 'Sor 3 Adat 2',
        col3: 'Sor 3 Adat 3',
    },
    {
        col1: 'Sor 4 Adat 1',
        col2: 'Sor 4 Adat 2',
    },
    {
        col1: 'Sor 5 Adat 1',
        col2: 'Sor 5 Adat 2',
        col3: 'Sor 5 Adat 3',
    },
    {
        col1: 'Sor 6 Adat 1',
        col2: 'Sor 6 Adat 2',
    },
    {
        col1: 'Sor 7 Adat 1',
        col2: 'Sor 7 Adat 2',
        col3: 'Sor 7 Adat 3',
    }
];


const tbody = document.createElement("tbody");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");


document.body.appendChild(table)
table.appendChild(tbody)
table.appendChild(thead)
thead.appendChild(tr)

const tomb = ["adat1","adat2","adat3"]


for (const fejlec of tomb)
{
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = fejlec
}

for (const adat of arr)
{
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = adat.col1

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = adat.col2

    if(adat.col3!=undefined){
        td3 = document.createElement("td")
        tr.appendChild(td3)
        td3.innerText = adat.col3
    }
    else{
        td2.colSpan = 2
    }
}




