function main(input) {
    input = input.split(`\n`);
    const S = input[0];
    const hist = {};
    for(let i = 0; i < S.length; i++) {
        const c = S.charAt(i);
        if(c in hist) {
            hist[c] += 1;
        } else {
            hist[c] = 1;
        }
    }
    const counter = new Array(100).fill(0);
    for(const num of Object.values(hist)) {
        counter[num] += 1;
    }
    return counter.some((v) => v != 0 && v != 2) ? "No" : "Yes";
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`ab
`)

console.log(a);
