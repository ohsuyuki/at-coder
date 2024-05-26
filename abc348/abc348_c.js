function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);

    const mins = {};
    for(let i = 0; i < N; i++) {
        const [a, c] = input[1 + i].split(` `).map(Number);
        if(c in mins) {
            mins[c] = Math.min(a, mins[c]);
        } else {
            mins[c] = a;
        }
    }

    let ret = 0;
    for(const c in mins) {
        const current = mins[c];
        ret = Math.max(ret, current);
    }
    return ret;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`4
100 1
20 5
30 5
40 1
`)

console.log(a);
