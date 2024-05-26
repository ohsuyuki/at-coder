function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);
    const H = input[1].split(` `).map(Number);

    const first = H[0];
    for(let i = 1; i < H.length; i++) {
        if(first < H[i]) {
            return i + 1;
        }
    }
    return -1;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`7
10 5 10 2 10 13 15
`)

console.log(a);
