/**
 * @type {{war:string, team1:string, team1Size:string, team2:string, team2Size:string}[]}
 */


const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]
const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");


document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)


const tomb = ["Harc megnevezése","Szembenálló felek","Haderő"]

for (const fejlec_title of tomb) 
{
    const th = document.createElement('th')
    tr.appendChild(th)
    th.innerText = fejlec_title

}

const tbody = document.createElement("tbody")
table.appendChild(tbody)


for (const harc of arr) 
{


    const tr = document.createElement('tr')
    tbody.appendChild(tr)


    const td1 = document.createElement('td')
    td1.innerText = harc.war
    tr.appendChild(td1)


    const td2 = document.createElement('td')
    td2.innerText = harc.team1
    tr.appendChild(td2)


    const td3= document.createElement('td')
    td3.innerText = harc.team1Size
    tr.appendChild(td3)
    

    if(harc.team2!=undefined && harc.team2Size!=undefined)
    {
        const tr2 = document.createElement("tr")
        tbody.appendChild(tr2)

        td1.rowSpan=2





        const td4 = document.createElement('td')
        td4.innerText = harc.team2
        tr2.appendChild(td4)
    
    
        const td5= document.createElement('td')
        td5.innerText = harc.team2Size
        tr2.appendChild(td5)
    }
}