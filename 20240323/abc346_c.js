function main(input) {
    const inputs = input.split(`\n`);
    const [N, K] = inputs[0].split(` `).map(Number);
    const array = inputs[1].split(` `);

    let sum = (1n + BigInt(K)) * BigInt(K) / 2n
    const set = new Set();
    for(let i=0; i<N; i++) {
        const n = BigInt(array[i]);
        if(set.has(n)) {
            continue;
        }
        if(K < n) {
            continue;
        }
        sum -= n;
        set.add(n);
    }
    return String(sum);
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`10 158260522
877914575 24979445 623690081 262703497 24979445 1822804784 1430302156 1161735902 923078537 1189330739
`)

console.log(a);
