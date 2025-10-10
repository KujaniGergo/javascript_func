const valt = {}
const szam = 12


if (szam > 5) 
{
    valt.name = "nev"
}else
{
    valt["name"]="nev"
}

console.log(valt.name)
console.log(valt["name"])

//valt["name"]=String ugyan az
//valt = "Gergő" ugyan az

//5==="5" True
//5=="5"  False

//null == undefined True
//null === undefined False

