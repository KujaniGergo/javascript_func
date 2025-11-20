/**
 * @type {{theme: string, time:string, scientist1:string, scientist2?:string}[]}
 */

const arr = [
    {
        theme: 'Optika',
        time: 'Xszamlalo. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXszamlalo. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr"); // átnevezve, hogy ne ütközzön a ciklusban lévő 'tr'-rel
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const tbody = document.createElement("tbody");

// Fejléc szövegek és colspan beállítása
th1.innerText = "Fizika területe";
th2.innerText = "Időszak";
th3.innerText = "Képviselők";
th3.colSpan = 2;

headerRow.appendChild(th1);
headerRow.appendChild(th2);
headerRow.appendChild(th3);
thead.appendChild(headerRow);

table.appendChild(thead);
table.appendChild(tbody);

// Táblázat feltöltése — a ciklusban a sor neve 'row', hogy ne ütközzön
for (const szamlalo of arr) 
{
    const row = document.createElement('tr');
    tbody.appendChild(row);

    const td = document.createElement('td');
    td.innerText = szamlalo.theme;
    row.appendChild(td);

    const td2 = document.createElement('td');
    td2.innerText = szamlalo.time;
    row.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = szamlalo.scientist1;
    row.appendChild(td3);

    if (szamlalo.scientist2 === undefined)
    {
         td3.colSpan = 2;
    }
    else
    {
        const td4 = document.createElement('td');
        td4.innerText = szamlalo.scientist2;
        row.appendChild(td4);
    }
}

// Táblázat hozzáadása a dokumentumhoz most, hogy elkészült
document.body.appendChild(table);