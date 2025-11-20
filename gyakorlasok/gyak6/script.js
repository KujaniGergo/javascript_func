 const obj = [{
 age: 18,
 name: 'Laci'
}]
for(const elem in obj){
 if(obj[elem] == 18){
 console.log(elem.name)
 }
}