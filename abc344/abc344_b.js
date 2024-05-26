function main(input) {
    input = input.split(`\n`);
    for(let i = input.length - 2; 0 <= i; i--) {
        const A = input[i];
        console.log(A);
    }
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`123
456
789
987
654
321
0
`)

// console.log(a);
