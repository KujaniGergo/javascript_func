const a = {}
const szam = 12


if (szam > 5) 
{
    a.name("nev")
}else
{
    a["name"]="nev"
}

a.name = "name"
console.log(a.name)
console.log(a["name"])

//a["name"]=String ugyan az
//a.a = "Gergő" ugyan az

//5==="5" True
//5=="5"  False

//null == undefined True
//null === undefined False

