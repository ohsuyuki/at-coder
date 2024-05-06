function main(input) {
    input = input.split(`\n`);
    const [N, K] = input[0].split(` `).map(Number);
    const P = input[1].split(` `).map(Number);

    const index = new Array(N + 1);
    for(let i = 0; i < N; i++) {
        const tmp = P[i];
        index[tmp] = i;
    }
    console.log(index);

    let ret = N;
    for(let i = 0; i < N; i++) {
        console.log("------------------")
        console.log(P[i]);
        const v = P[i];
        for(let j = 0; j < K; j++) {
            console.log("==============")
            console.log("", j);
            const min = v - j;
            if(min <= 0) {
                continue;
            }
            const max = min + K - 1;
            if(max > N) {
                continue;
            }
            console.log("", min, max);

            const minIndex = index[min];
            const maxIndex = index[max];
            console.log("", minIndex, maxIndex);

            if(minIndex <= i && i <= maxIndex) {
                dif = Math.abs(maxIndex - minIndex);
                ret = Math.min(ret, dif);
            }
        }
    }
    return ret;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`10 5
10 1 6 8 7 2 5 9 3 4
`)

console.log(a);
