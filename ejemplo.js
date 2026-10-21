/* Devuelve la mitad de un número sólo si es par*/

let half= (num)=>{
    return new Promise((resolve, reject)=>{
    if (num%2==0) {
        resolve(num/2)
    }else{
        reject("no es par")
    }
    })
}

half(4).then(result=>console.log(result))

half(5).then(result=>console.log(result)).catch(err=>console.log(err));