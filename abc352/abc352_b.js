function main(input) {
    input = input.split(`\n`);
    const S = input[0];
    const T = input[1];

    const ret = [];
    let current = 0;
    for(let i = 0; i < S.length; i++) {
        const s = S[i];
        for(let j = current; j < T.length; j++) {
            const t = T[j];
            if(s === t) {
                ret.push(current + 1);
                current++;
                break;
            }
            current++;
        }
    }
    return ret;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`atcoder
atcoder
`)
console.log(a.join(` `));
