function main(input) {
    input = input.split(`\n`);
    const result = input[1].split(` `).map(Number);
    total = result.reduce((prev, current) => prev + current, 0);
    return total == 0 ? 0 : -1 * total;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`6
10 20 30 40 50
`)

console.log(a);
