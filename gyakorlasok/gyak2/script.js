/**
 *  @type {{col1:string,col2:string,col3:string,col4:string}[]}
 */

const arr = [
    {
        col1: 'Sor 1 Adat 1',
        col2: 'Sor 1 Adat 2',
        col3: 'Sor 1 Adat 3',
        col4: 'Sor 1 Adat 4',
    },
    {
        col1: 'Sor 2 Adat 1',
        col2: 'Sor 2 Adat 2',
        col3: 'Sor 2 Adat 2',
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
        col4: 'Sor 5 Adat 4',
    },
    {
        col1: 'Sor 6 Adat 1',
        col2: 'Sor 6 Adat 2',
    },
    {
        col1: 'Sor 7 Adat 1',
        col2: 'Sor 7 Adat 2',
        col3: 'Sor 7 Adat 3',
        col4: 'Sor 7 Adat 4',
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

const fejlec = ["cimsor1","cimsor2","cimsor3","cimsor4"]

for (const adat of fejlec) {
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = adat
}


for (const adatok of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)
    
    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = adatok.col1

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = adatok.col2

    if(adatok.col3==undefined){
        td2.colSpan=3

    }else if(adatok.col4==undefined) {
        const td3 = document.createElement("td")
        tr.appendChild(td3)
        td3.innerText = adatok.col3
        td3.colSpan = 2
    }else{
        const td3 = document.createElement("td")
        tr.appendChild(td3)
        td3.innerText = adatok.col3

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = adatok.col4
    }
}       