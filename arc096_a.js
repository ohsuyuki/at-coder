function getPrice(nc, A, B, C, X, Y) {
    const n = nc / 2;
    const na = Math.max(X - n, 0);
    const nb = Math.max(Y - n, 0);
    const p = na * A + nb * B + nc * C;
    return p;
}

function main(input) {
    const inputs = input.split(" ").map(Number);
    const [A,B,C,X,Y] = [...inputs];

    let min = Number.MAX_VALUE;
    let maxNum = Math.max(X,Y) * 2;
    for(let i=0; i<=maxNum; i+=2) {
        const price = getPrice(i, A, B, C, X, Y)
        min = Math.min(min, price);
    }
    return min;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
