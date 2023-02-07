function mindGame(number) {
    let multi = number * 3;
    add = multi + 10;
    div = add / 2;
    add = div - 5;
    return add;
}

let total = mindGame(5);
console.log(total);

