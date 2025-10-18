/**
 * @type {{szerzo:string,mu:string,szereplok1:string,szereplok2?:string}[]}
 */
const arr = [
  {
    szerzo : "Katona József",
    mu : "Bánk bán",
    szereplok1 : "Gertrudis királyné"
  },
  {
    szerzo : "ikszáth Kálmán",
    mu : "Beszterce ostroma",
    szereplok1 : "Pongrác István gróf",
    szereplok2 : "Estella"
  },
  {
    szerzo : "Arany János",
    mu : "Toldi",
    szereplok1 : "Toldi Miklós",
  }
]


const table = document.createElement("table");
document.body.appendChild(table)
const thead = document.createElement("thead");
table.appendChild(thead)
const tbody = document.createElement("tbody")
table.appendChild(tbody)
const tr = document.createElement("tr")
thead.appendChild(tr)


const cimsor = ["Szerző","MŰ","Szereplők"]

for (const i of cimsor) {
  const th = document.createElement("th")
  tr.appendChild(th)
  th.innerText = i
}


for (const x of arr) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = x.szerzo

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = x.mu

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = x.szereplok1
   
    if (x.szereplok2 == undefined) {
        td3.colSpan = 2
    }else {
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = x.szereplok2
    }
}
