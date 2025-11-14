/**
 * @typedef {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} CountryWriters
 */
/**
 * @param {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}[]} gyujtemeny
*/
function renderTableBody(gyujtemeny){
    const tablebody = document.getElementById('teremtett')
    tablebody.innerHTML=''

    for(const k of gyujtemeny){

        const trd = document.createElement('tr')
        tablebody.appendChild(trd)  
        //NEMZET
        const tdN = document.createElement('td')
        tdN.innerText=k.nemzet
        trd.appendChild(tdN)

        tdN.addEventListener('click',function (e){//interakcio ha kattintasz megjelöli a tdN-t .marked-el
            /**@type {HTMLTableCellElement} */
            const target=e.target//egyik eleme
            target.classList.add('marked')//.marked css

        })

        //SZERZO
        const tdSz = document.createElement('td')
        tdSz.innerText=k.szerzo
        trd.appendChild(tdSz)
        //MŰ
        const tdM = document.createElement('td')
        tdM.innerText=k.mu
        trd.appendChild(tdM)
        //? van-e
        if(k.szerzo2 !== undefined && k.mu2 !== undefined){
            tdN.rowSpan=2

            const tr = document.createElement('tr')
            tablebody.appendChild(tr)

            //SZERZO 2
            const tdSz2 = document.createElement('td')
            tdSz2.innerText=k.szerzo2
            tr.appendChild(tdSz2)
            //MŰ 2
            const tdM2 = document.createElement('td')
            tdM2.innerText=k.mu2
            tr.appendChild(tdM2)
        }
    }
}


/**@param {HTMLElement} */
function bR(parent){
    const br = document.createElement('br')
    parent.appendChild(br)
}


/**
 *@param {HTMLlSectionTableElement} tablebody
 *@param {CountryWriters} writerRow
 */
function renderTableRow(tablebody,writerRow) {
    const trd = document.createElement('tr')
        tablebody.appendChild(trd)  
        //NEMZET
        createTableCell("td",writerRow.nemzet,tdN)

        tdN.addEventListener('click',function (e){//interakcio ha kattintasz megjelöli a tdN-t .marked-el
            /**@type {HTMLTableCellElement} */
            const target=e.target//egyik eleme
            target.classList.add('marked')//.marked css

        })

        createTableCell("td",writerRow.szerzo,tdN)

        createTableCell("td",writerRow.mu,tdM)

        if(writerRow.szerzo2 !== undefined && writerRow.mu2 !== undefined){
            tdN.rowSpan=2

            const tr = document.createElement('tr')
            tablebody.appendChild(tr)

            createTableCell("td",writerRow.szerzo2,tdSz2)

            createTableCell("td",writerRow.mu2,tdM2)
        }
}


/**
 * @param {"th"|"td"} celltype
 * @param {string} cellcontent
 * @param {HTMLTableRowElement} parentrow
 * @returns {HTMLTableCellElement}
 */

function createTableCell(celltype,cellcontent,parentrow) {
    const cell = document.createElement(celltype)
    cell.innerText = cellcontent
    parentrow.appendChild(cell)
    return cell
}


/**
 * @param {HTMLTableElement} table 
 * @param {string[]} headerlist 
 */
function generateHeader(table,headerlist) {
    const thead = document.createElement("thead")
    table.appendChild(thead)

    const tr = document.createElement("tr")
    thead.appendChild(tr)

    for (const a of headerlist) {
        createTableCell("th", a, tr);
        
    }
}


/**
 * @param {Event} e 
 */
function htmlEventListener(e) {
        //a lista cimkei:
    /**@type {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} */
    const obje ={}//ures de vannak cimkei

    /**@type {HTMLFormElement} */
    const target =e.target //lerovidites
    
    //----------------------------------------------------------------------------------
    /**@type {HTMLInputElement} */
    const nemzetisegelem= target.querySelector('#nemzetiseg')//a lista cimkéire utal
    /**@type {string} */
    const neS=nemzetisegelem.value//string lesz
    obje.nemzet = neS//egyes cimkekhez hozzarendelem a stringe alakitott targeteket
    
    //----------------------------------------------------------------------------------
    /**@type {HTMLInputElement} */
    const szerzoelemelso= target.querySelector('#szerzo1')//a lista cimkéire utal
    /**@type {string} */
    const szeS=szerzoelemelso.value//string lesz
    obje.szerzo= szeS //HOZZAADAOM AZ OBJHEZ
    
    //----------------------------------------------------------------------------------
    /**@type {HTMLInputElement} */
    const muelem= target.querySelector('#mu1')//a lista cimkéire utal
    /**@type {string} */
    const meS=muelem.value//string lesz
    obje.mu =meS
    
    //----------------------------------------------------------------------------------
    /**@type {HTMLInputElement} */
    const szerzoelemmasodik= target.querySelector('#szerzo2')//a lista cimkéire utal
    /**@type {string} */
    const szemS=szerzoelemmasodik.value//string lesz
    obje.szerzo2=szemS
    
    //----------------------------------------------------------------------------------
    /**@type {HTMLInputElement} */
    const muelemmasodik= target.querySelector('#mu2')//a lista cimkéire utal
    /**@type {string} */
    const memS=muelemmasodik.value//string lesz
    obje.mu2 = memS
    
    //----------------------------------------------------------------------------------
    const alap = document.getElementById('jsform')//html tabla idje
    const freddy = alap.querySelector('.marked')
    if(freddy !==null){
        alap.classList.remove('marked')
    }else{
        target.classList.add('marked')
    }

    arr.push(obje)
    renderTableBody(arr)
}

/** 
 * @param {HTMLFormElement} form
 * @param {string} id
 * @param {string} labelszov
*/
function createFormElement(form, labelszov, id){
    const label = document.createElement('label')
    label.htmlFor=id
    label.innerText=labelszov
    form.appendChild(label)
    bR(form)
    const input = document.createElement('input')
    input.type="text"
    input.id=id
    input.name=id
    form.appendChild(input)
    bR(form)
    bR(form)
}


