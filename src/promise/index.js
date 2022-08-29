const promise = new Promise((resolve, reject ) =>{
    resolve("hey!");
});

const cow = 3;

const countCow = new Promise ((resolve, reject) =>{
    if(cow > 10){
        resolve (`We have ${cow} cows on the farm`);

    } else {
        reject("There is not this nombres of caws in the farm");
    }
});

countCow.then ((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() =>{
    console.log("Finally");
});