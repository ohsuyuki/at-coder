function getDistance(lhs, rhs) {
    return Math.sqrt(Math.pow(lhs[0]-rhs[0], 2) + Math.pow(lhs[1]-rhs[1], 2));
}

function main(input) {
    const inputs = input.split(`\n`);
    const N = Number(inputs[0]);
    const P = new Array(N);
    for(let i=0; i<N; i++) {
        const p = inputs[i+1].split(` `).map(Number);
        P[i] = p;
    }

    // 2*(N-1)!回(X), d1*X+d2*X+d3*X...=X*(d1+d2+d3+...)=2*(N-1)!*sum
    let sum = 0;
    for(let i=0; i<N-1; i++) {
        for(let j=i+1; j<N; j++) {
            sum += getDistance(P[i], P[j]);
        }
    }
    return sum * 2 / N;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`3
0 0
1 0
0 1
`);

console.log(a);
