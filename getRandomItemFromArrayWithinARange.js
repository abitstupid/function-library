let exampleArray = [2, 3, 4, 5, 6, 7,8];

function randomNumber(min,max) {
    if (min > max) {
        [min , max] = [max , min];
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}  

function randomItem(arr,min,max) {
    max = Math.min(max, arr.length -1);
    if (min > arr.length-1 ) {
        min  = 0;
    }

    const randomIndex = randomNumber(min,max);
    return arr[randomIndex];
}

console.log(randomItem(exampleArray, 1, 5 ));
