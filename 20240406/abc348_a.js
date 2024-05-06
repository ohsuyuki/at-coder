function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);

    let ret = "";
    for(let i = 0; i < N; i++) {
        current = ((i + 1) % 3 === 0) ? "x" : "o";
        ret += current;
    }
    return ret
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`9
`)
console.log(a);
