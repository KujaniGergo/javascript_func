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
const tr = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const tbody = document.createElement("tbody");

document.body.appendChild(table)
table.appendChild(thead)
tr.appendChild(thead)
th1.appendChild(tr)
th2.appendChild(tr)
th3.appendChild(tr)
table.appendChild(tbody)

th1.innerText = "Fizika területe"
th2.innerText = "Időszak"
th3.innerText = "Képviselők"

th3.colSpan = 2


for (const szamlalo of arr) 
{
    const tr = document.createElement('tr')
    tbody.appendChild(tr)


    const td = document.createElement('td')
    td.innerText = szamlalo.theme
    tr.appendChild(td)


    const td2 = document.createElement('td')
    td2.innerText = szamlalo.time
    tr.appendChild(td2)


    const td3= document.createElement('td')
    td3.innerText = szamlalo.scientist1
    tr.appendChild(td3)


    if (szamlalo.scientist2 === undefined)
    {
         td3.colSpan = 2
    }


    else
    {
    const td4 = document.createElement('td')
    td4.innerText = szamlalo.scientist2
    tr.appendChild(td4)
    }
}