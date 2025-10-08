/**
 * @type {{neve: string, kora:string, szeretője1:string, szeretője2?:string}[]}
 */


const bumm = "1, 2, 3, 4, 5"
console.log(bumm)
const b=["a","b","c"]
for(let i=0;i<b.length;i++)
{
    console.log(b[i])
}
console.log(b[1])


for(const a of b)
{
    console.log(a)
}


for(const key in b)
{
    console.log(`${key}: ${b[key]}`)
}


const objektum=
{
    name : "Gergő",
    age : 17
}


for(const key in objektum)
{
    console.log(objektum[key])
}


const arr = [
    {
        kora: 'reformáció',
        neve: 'Balassi Bálint',
        szeretője1: 'Losonczy Anna',
        szeretője2: 'Dobó Krisztina'
    },
    {
        kora: 'felvilágosodás',
        neve: 'Csokonai',
        szeretője1: 'Vajda Juliána',
        
    },
    {
        kora: 'magyar romantika',
        neve: 'Petőfi Sándor',
        szeretője1: 'Mednyánszky Berta',
        szeretője2: 'Szendrey Júlia'
    },
    {
        kora: '20. század',
        neve: 'Ady Endre',
        szeretője1: 'Léda',
        szeretője2: 'Csinszka'
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

th1.innerText = "Szerző neve"
th2.innerText = "IdőKorszakszak"
th3.innerText = "Szeretői"
th3.colSpan = 2


for (const szamlalo of arr) 
{
    const tr = document.createElement('tr')
    tbody.appendChild(tr)


    const td = document.createElement('td')
    td.innerText = szamlalo.neve
    tr.appendChild(td)


    const td2 = document.createElement('td')
    td2.innerText = szamlalo.kora
    tr.appendChild(td2)


    const td3= document.createElement('td')
    td3.innerText = szamlalo.szeretője1
    tr.appendChild(td3)


    if (szamlalo.szeretője2 === undefined)
    {
         td3.colSpan = 2
    }


    else
    {
    const td4 = document.createElement('td')
    td4.innerText = szamlalo.szeretője2
    tr.appendChild(td4)
    }
}