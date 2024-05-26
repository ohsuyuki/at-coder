function main(input) {
    input = input.split(`\n`);
    N = Number(input[0]);
    A = input[1].split(` `).map(Number);
    M = Number(input[2]);
    B = input[3].split(` `).map(Number);
    L = Number(input[4]);
    C = input[5].split(` `).map(Number);
    Q = Number(input[6]);
    X = input[7].split(` `).map(Number);

    const sum = new Set();
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            for(let k = 0; k < L; k++) {
                sum.add(A[i] + B[j] + C[k]);
            }
        }
    }

    for(let i = 0; i < Q; i++) {
        if(sum.has(X[i])) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`3
1 2 3
2
2 4
6
1 2 4 8 16 32
4
1 5 10 50
`)
