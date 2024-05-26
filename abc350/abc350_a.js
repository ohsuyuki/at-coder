function main(input) {
    input = input.split(`\n`);
    S = input[0];
    num = Number(S.slice(3, 6));
    if(num === 316) {
        return "No";
    }
    if(num < 1 || num > 349) {
        return "No";
    }
    return "Yes";
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`ABC316
`)
console.log(a);
