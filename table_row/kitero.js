//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**@type {CountryWriters[]} */
const dataArray =[
    {
        nationality:'Orosz',
        author:'Gogol',
        work:'A köpönyeg',
        author2:'Csehov',
        work2:'A csinovnyik halála',
    },
    {
        nationality:'Cseh',
        author:'Franz Kafka',
        work:'Az átváltozás',
    },
    {
        nationality:'Magyar',
        author:'Örkény István',
        work:'Egyperces Novellák',
        author2:'József Attila',
        work2:'Klárisok',
    },
    {
        nationality:'Svájc',
        author:'Friedrich Dürrenmatt',
        work:'A fizikusok',
    }      
]
generateTable("teremtett",["Nemzetiseg","Szerzo","Mű"])
renderTableBody(dataArray)

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙



//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

/**
 * @type {LabInpData[]}
 */
const formFields=[
    {
        label: "Nemzetiség:",
        input: "nemzetiseg",
    },
    {
        label: "Szerző:",
        input: "szerzo1",
    },
    {
        label: "Mű:",
        input: "mu1",
    },
    {
        label: "Másik Szerző:",
        input: "szerzo2",
    },
    {
        label: "Mű:",
        input: "mu2",
    }
]

/**@type {HTMLFormElement} */
const htmlForm = document.getElementById('htmlform')
/**@type {HTMLFormElement} */
const jsForm = compactFormRenderer("jsform",formFields)
htmlForm.addEventListener('submit',addToHtmlTable)
jsForm.addEventListener('submit',function(i)

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙



//┍━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╝✹╚━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┑

{
    i.preventDefault()

    /**@type {CountryWriters} */
    const rowObj = {}
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

        
        dataArray.push(rowObj)
        consol.log(dataArray)
        renderTableBody(dataArray)
        
    }
}
)

//┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╗✹╔━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┙

/*
⠀⠀⠀⠀⣀⡤⢤⣄⠀⣠⡤⣤⡀⠀⠀⠀
⠀⠀⢀⣴⢫⠞⠛⠾⠺⠟⠛⢦⢻⣆⠀⠀
⠀⠀⣼⢇⣻⡀⠀⠀⠀⠀⠀⠀⢸⡇⢿⣆⠀
⠀⢸⣯⢦⣽⣷⣄⡀⠀⢀⣴⣿⣳⣬⣿⠀
⢠⡞⢩⣿⠋⠙⠳⣽⢾⣯⠛⠙⢹⣯⠘⣷
⠀⠈⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠋⠁⠀
*/