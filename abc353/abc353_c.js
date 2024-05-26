function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);
    const A = input[1].split(` `).map(BigInt);
    const base = BigInt(Math.pow(10, 8));

    const f = (Ai, Aj) => {
        return BigInt((Ai + Aj) % base);
    }

    let total = BigInt(0);
    for(let i = 0; i < N - 1; i++) {
        for(let j = i + 1; j < N; j++) {
            total += f(A[i], A[j]);
        }
    }
    return total;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`5
1 3 99999999 99999994 1000000
`)

console.log(String(a));
