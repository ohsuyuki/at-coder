function main(input) {
    input = input.split(`\n`);
    const [N, K] = input[0].split(` `).map(Number);
    const A = input[1].split(` `).map(Number);

    let count = 0;
    let total = 0;
    for(let i = 0; i < N; i++) {
        const a = A[i];
        if(total + a > K) {
            // スタート
            count++;
            // 次のに載せる
            total = a;
        } else {
            // 現在のに乗せる
            total+= a;
        }
    }
    count++;
    return count;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`15 100
73 8 55 26 97 48 37 47 35 55 5 17 62 2 60
`)

console.log(a);
