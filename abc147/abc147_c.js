function getCount(n) {
    let count = 0;
    while(n>0) {
        if(n&1) {
            count++;
        }
        n = n >> 1;
    }
    return count;
}

function main(input) {
    const inputs = input.split(`\n`);
    const N = Number(inputs[0]);
    const testimony = new Array(N);
    let total = 0;
    for(let i=0; i<N; i++) {
        const A = Number(inputs[i+1+total]);
        const at = new Array(A);
        for(let j=0; j<A; j++) {
            at[j] = inputs[i+1+total+j+1].split(` `).map(Number);
        }
        testimony[i] = at;
        total += A;
    }

    let n = 0;
    ROOT: for(let i=(1<<N)-1; i>=1; i--) {
        for(let j=0; j<N; j++) {
            if(((i>>j)&1) === 0) {
                // 真偽不明の証言は判断材料にしない
                continue;
            }

            for(let k=0; k<testimony[j].length; k++) {
                const t = testimony[j][k];
                const x = t[0] - 1;
                const y = t[1];
                if(((i>>x)&1) !== y) {
                    continue ROOT;
                }
            }
        }

        const count = getCount(i);
        n = Math.max(n, count);
    }
    return n;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(a);
