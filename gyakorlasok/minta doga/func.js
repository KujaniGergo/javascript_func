// láthatóság váltása
function toggleTables() {
    if (selector.checked) {
        htmlSection.classList.add("hide");
        jsSection.classList.remove("hide");
    } else {
        htmlSection.classList.remove("hide");
        jsSection.classList.add("hide");
    }
}


/**
 * 
 * @param {"td"|"th"} celltype //th vagy td típúsú cellát használ a func
 * @param {string} cellcontent //string típúsú adatot tartalmaz a cella
 * @param {HTMLTableRowElement} cellparent //HTMLTableRowElement amihez fűzzük a cellát
 * @returns {HTMLTableCellElement}
 */

function createTableCell(celltype,cellcontent,cellparent){
    const cella = document.createElement(celltype); //cella létrehozása
    cellparent.appendChild(cella) //cella hozzáfűzése a cellparent-hez
    cella.innerText(cellcontent) //cella feltöltése adattal a cellcontent-ből
    return cella //returnoli a cellát
}