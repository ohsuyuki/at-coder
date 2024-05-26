function main(input) {
    input = input.split(`\n`);
    [N, Q] = input[0].split(` `).map(Number);
    const T = input[1].split(` `).map(Number);
    const teeth = new Array(N).fill(1);
    for(const t of T) {
        const i = t - 1;
        if(teeth[i] === 1) {
            teeth[i] = 0;
        } else {
            teeth[i] = 1;
        }
    }
    const total = teeth.reduce((prev, current) => prev + current, 0);
    return total;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`9 20
9 5 1 2 2 2 8 9 2 1 6 2 6 5 8 7 8 5 9 8
`)

console.log(a);
