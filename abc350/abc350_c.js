function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);
    const indexes = new Array(N);

    const A = input[1].split(` `).map((a, i) => {
        indexes[a - 1] = i;
        return Number(a);
    });

    const log = [];
    for(let i = 0; i < A.length; i++) {
        indexInA = indexes[i];
        if(indexInA === i) {
            continue;
        }

        // swap
        const tmp = A[i];
        A[i] = i + 1;
        A[indexInA] = tmp;

        indexes[i] = i;
        indexes[tmp - 1] = indexInA;

        log.push([i + 1, indexInA + 1])
    }
    return log;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`5
3 4 1 2 5
`)
console.log(a.length);
for(const l of a) {
    console.log(`${l[0]} ${l[1]}`);
}
