function main(input) {
    input = input.split(`\n`);
    const [N, X, Y, Z] = input[0].split(` `).map(Number);
    const min = Math.min(X, Y);
    const max = Math.max(X, Y);
    if(min <= Z && Z <= max) {
        return "Yes";
    } else {
        return "No";
    }
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`100 23 67 45
`)

console.log(a);
