function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);
    const B = input[1].split(` `).map(Number);
    console.log(N, B);
    let total = B[0];
    for(let i = 0; i < B.length; i++) {
        const b = B[i];
        total += b;
    }
    return total;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`6
0 153 10 10 23
`)

console.log(a);
