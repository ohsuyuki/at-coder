function getDivisorCount(n) {
    if(n === 1) {
        return 1;
    }

    const max = Math.floor(n / 2);
    let counter = 2;
    for(let i = 2; i <= max; i++) {
        if(n % i === 0) {
            counter++;
        }
    }
    return counter;
}

function main(input) {
    let N = Number(input);

    let counter = 0;
    for(let i = 1; i <= N; i+=2) {
        const c = getDivisorCount(i);
        if(c === 8) {
            counter++;
        }
    }
    return counter;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
