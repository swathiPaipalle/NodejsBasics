console.log("User 1 made a request");
setTimeout(callback, 5000);

console.log("User 2 made a request");
setTimeout(callback, 5000);


console.log("User 3 made a request");
setTimeout(callback, 5000);

// console.log("Takes 5 seconds");
// console.log('Delivered');

function callback(){
    console.log("Queried and delivered data in 5 seconds");
}