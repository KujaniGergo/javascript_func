/**
 * @type {{theme:string,time:string,scientist1:string,scientist2:string}[]}
 */

const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
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
        time: 'XX-XXI. század',
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

table.appendChild(table)
thead.appendChild(thead)
tr.appendChild(tr)
th1.appendChild(th1)
th2.appendChild(th2)
th3.appendChild(th3)
table.appendChild(tbody)

th1.innerText = "Fizika területe"
th2.innerText = "Időszak"
th3.innerText = "Képviselők"