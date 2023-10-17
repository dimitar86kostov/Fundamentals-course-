function guineaPig(params) {

    let weight = Number(params.pop());
    weight *= 1000;
    let [food, hay, cover] = params.map(Number);
    food *= 1000;
    hay *= 1000;
    cover *= 1000;
    let day = 30;
    let counter = 0;
    let dailyFood = 300;

    for (let i = 1; i <= day; i++) {
        counter++
        if (i % 2 != 0) {
            food -= dailyFood;
        } else {
            food -= dailyFood;
            hay -= food * 0.05;
        }
        if (counter == 3) {
            cover -= weight / 3;
            counter = 0;
        }
    }
    food /= 1000;
    hay /= 1000;
    cover /= 1000;
    if (food >= 0 && hay >= 0 && cover >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }else{
        console.log(`Merry must go to the pet store!`);
    }
}
guineaPig(["10",
    "5",
    "5.2",
    "1"])