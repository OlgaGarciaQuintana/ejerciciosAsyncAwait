let medio = (num) => {
    if (num % 2 === 0) {
        console.log(num/2)
    } else {
    console.log("no es par")
    }
}

let medioasync=async(num)=>{
    return await medio(num)
}

medioasync(2)