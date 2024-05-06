function main(input) {
    input = input.split(`\n`);
    const A = input[0].split(` `).map(Number);
    const B = input[1].split(` `).map(Number);
    const totalA = A.reduce((prev, current) => prev + current, 0);
    const totalB = B.reduce((prev, current) => prev + current, 0);
    return (totalA - totalB) + 1;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
`)
console.log(a);
