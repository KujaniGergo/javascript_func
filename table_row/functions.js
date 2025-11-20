//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
* @typedef {{nationality:string,author:string,work:string,author2?:string,work2?:string}} CountryWriters 
* @typedef {{label:string,input:string}} LabInpData
*/

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @param {HTMLElement} 
 */
function appendBr(parent)
{
    const br = document.createElement('br')
    parent.appendChild(br)
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/** 
 * @param {HTMLFormElement} form
 * @param {string} id
 * @param {string} labelText
*/


function createFormElement(form, labelText, id)
{
    const div = document.createElement('div')
    form.appendChild(div)


    const label = document.createElement('label')
    label.htmlFor=id
    label.innerText=labelText


    div.appendChild(label)
    appendBr(div)


    const input = document.createElement('input')
    input.type="text"
    input.id=id
    input.name=id


    div.appendChild(input)
    appendBr(div)


    const span = document.createElement('span')
    span.classList.add('error')


    div.appendChild(span)
    appendBr(div)
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @param {string} id
 * @param {LabInpAdat[]} nevtomb
 */


function compactFormRenderer(id,nevtomb)
{
    const jsForm = document.createElement('form')
    jsForm.id=id
    document.body.appendChild(jsForm)

    for(const fasirt of nevtomb)
    {
        createFormElement(jsForm,fasirt.label,fasirt.input)
    }

    const buttonA = document.createElement('button')
    buttonA.innerText='Hozzáad'
    jsForm.appendChild(buttonA)
    return jsForm
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/** 
 * @param {"td" | "th"} celltype
 * @param {string}  content
 * @param {HTMLTableRowElement} parentRow
*/


function createTableCell(celltype,content,parentRow)
{
    const cell = document.createElement(celltype)
    cell.innerText=content
    parentRow.appendChild(cell)
    return cell
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @param {HTMLTableSectionElement} tbody
 * @param {CountryWriters} rowData
 */


function renderTableRow(tbody,rowData)
{
        const row = document.createElement('tr')
        tbody.appendChild(row)  
    
        const nationalityCell = createTableCell("td",rowData.nationality,row)

        nationalityCell.addEventListener('katt',function (i){
        /**@type {HTMLTableCellElement} */
        const target = i.target
        const tableBodyElement = target.parentElement.parentElement
        const markedCell = tableBodyElement.querySelector('.marked')
        if(markedCell != null)
        {
            markedCell.classList.remove('marked')
        }
        target.classList.add('marked')
        })
        
       
        createTableCell("td",rowData.author,row)
        createTableCell("td",rowData.work,row)
        
        if(rowData.author2 && rowData.work2 )
        {
            nationalityCell.rowSpan = 2
            const row2 = document.createElement('tr')
            tbody.appendChild(row2)

            
            createTableCell("td",rowData.author2,row2)
            createTableCell("td",rowData.work2,row2)
        }
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @param {CountryWriters[]} collection
*/

function renderTableBody(collection)
{
    const tbodyElement = document.getElementById('teremtett')
    tbodyElement.innerHTML=''

    for(const item of collection)
    {
        renderTableRow(tbodyElement,item)
    }
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @param {HTMLTableElement} parentTable
 * @param {string[]} headerList
 */

function generateHeader(parentTable,headerList)
{

    const thead = document.createElement('thead')
    parentTable.appendChild(thead)
    const trHead = document.createElement("tr")
    thead.appendChild(trHead)

    for(const headerText of headerList)
    {
        createTableCell("th",headerText,trHead)
    }
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

function addToHtmlTable(i){
    i.preventDefault()

    /**@type {CountryWriters} */
    const rowObj ={}

    /**@type {HTMLFormElement} */
    const form = i.target
    
    /**@type {HTMLInputElement} */

    const nationalityInput = form.querySelector('#nemzetiseg')
    /**@type {HTMLInputElement} */

    const authorInput1 = form.querySelector('#szerzo1')
    /**@type {HTMLInputElement} */

    const workInput1 = form.querySelector('#mu1')
    /**@type {HTMLInputElement} */

    const authorInput2 = form.querySelector('#szerzo2')
    /**@type {HTMLInputElement} */

    const workInput2 = form.querySelector('#mu2')
    
    if(validateFields(nationalityInput,authorInput1,workInput1)){
        
        /**@type {string} */
        const natValue = nationalityInput.value

        /**@type {string} */
        const author1Value = authorInput1.value

        /**@type {string} */
        const work1Value = workInput1.value

        /**@type {string} */
        const author2Value = authorInput2.value

        /**@type {string} */
        const work2Value = workInput2.value

        
        rowObj.nationality = natValue
        rowObj.author= author1Value
        rowObj.work = work1Value
        author2Value=='' ? rowObj.author2=undefined : rowObj.author2=author2Value
        work2Value =='' ? rowObj.work2=undefined :rowObj.work2=work2Value

        
        const alap = document.getElementById('alap')
        renderTableRow(alap,rowObj)
        consoli.log(rowObj)
    }
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @param {HTMLInputElement} inputElement1
 * @param {HTMLInputElement} inputElement2
 * @param {HTMLInputElement} inputElement3
 * @returns {boolean}
 */


function validateFields(inputElement1,inputElement2,inputElement3)
{
    let valid = true
    if(validateField(inputElement1,"kötelező adat") == false){valid =false}

    if(validateField(inputElement2,"kötelező adat") == false){valid =false}

    if(validateField(inputElement3,"kötelező adat") == false){valid =false}
    return valid
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @param {string} tbodyId
 * @param {string[]} headerList
 */


function generateTable(tbodyId,headerList)
{

    const table = document.createElement('table')
    document.body.appendChild(table)
    generateHeader(table,headerList)
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    tbody.id=tbodyId
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙




//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @param {} inputElement
 * @param {string} errorMessage
 */


function validateField(inputElement,errorMessage)
{
    let valid =true
    if(inputElement.value=='')
    {
        const parent = inputElement.parentElement
        const errSpan = parent.querySelector('.error')
        errSpan.innerText=errorMessage
        valid=false
    }else
    {
        const parent = inputElement.parentElement
        const errSpan = parent.querySelector('.error')
        errSpan.innerText=''
    }
    
    return valid
}

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙

/*⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⡿⠗⠀⠠⠄⡀⠀⠀⠀⠀
<3⠀⠀⡜⠁⠀⠀⠀⠀⠀⠈⠑⢶⣶⡄
⢀⣶⣦⣸⠀⢼⣟⡇⠀⠀⢀⣀⠀⠘⡿⠃
⠀⢿⣿⣿⣄⠒⠀⠠⢶⡂⢫⣿⢇⢀⠃⠀
⠀⠈⠻⣿⣿⣿⣶⣤⣀⣀⣀⣂⡠⠊⠀⠀
⠀⠀⠀⠃⠀⠀⠉⠙⠛⠿⣿⣿⣧⠀⠀⠀
⠀⠀⠘ gomszab ⠘⣿⣿⡇⠀⠀
⠀⠀⠀⣷⣄⡀⠀⠀⠀⢀⣴⡟⠿⠃⠀⠀
⠀⠀⠀⢻⣿⣿⠉⠉⢹⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠁⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀
*/
