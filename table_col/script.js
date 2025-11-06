/**
@param {string} id
@param {string} cim
*/
function Input(id,cim){
    const label = document.createElement('label')
    label.htmlFor =id
    label.innerText=cim
    form.appendChild(label)
    Sortores()
    
    const input = document.createElement('input')
    input.type ='text'
    input.id = id
    input.name = id
    form.appendChild(input)
    Sortores()

}

function Sortores(){
    const br = document.createElement('br')
    form.appendChild(br)
}

/**
 * @type {{neve: string, kora:string, szeretője1:string, szeretője2?:string}[]}
 */


// const bumm = "1, 2, 3, 4, 5"
// console.log(bumm)
// const b=["a","b","c"]
// for(let i=0;i<b.length;i++)
// {
//     console.log(b[i])
// }
// console.log(b[1])


// for(const a of b)
// {
//     console.log(a)
// }


// for(const key in b)
// {
//     console.log(`${key}: ${b[key]}`)
// }


// const objektum=
// {
//     name : "Gergő",
//     age : 17
// }


// for(const key in objektum)
// {
//     console.log(objektum[key])
// }


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
th2.colSpan = 2


for (const szamlalo of arr) 
{
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    createcell("td",szamlalo.neve,tr)
    createcell("td",szamlalo.kora,tr)
    const td3 = createcell("td",szamlalo.szeretője1,tr)

    if (szamlalo.szeretője2 === undefined)
    {
         td3.colSpan = 2
    }
    else
    {
    createcell("td",szamlalo.szeretője2,tr)
    }
}

/**
 * létrehozunk egy táblázat cellát a bemeneti paramáterek alapján és hozzáfűzzük.
 * @param {string} celltype "th","td" értéket vesz fel
 * @param {string} cellcontent a cella tartalma
 * @param {HTMLTableRowElement} parentrow sor amihez hozzá adjuk
 * @returns {HTMLTableCellElement} visszatélrunk a létrehozott táblzat cellával hogy késöbb tuduj módosítani annak a tuljdonságáz
 */

function createcell(celltype,cellcontent,parentrow){
    const td = document.createElement(celltype)
    td.innerText = cellcontent
    parentrow.appendChild(td)
    return td
}


const form = document.createElement('form')
const h2 = document.createElement('h2')


document.body.appendChild(form)
form.appendChild(h2)
form.id = 'form_js'

Input('Neve','költő neve:')
Input('Kor','Korszak:')
Input('Szerelme1','Szerelme:')
Input('Szerelme2','Szerelme:')


const button = document.createElement('button')
button.innerText='Hozzáadás'
form.appendChild(button)