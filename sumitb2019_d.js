// function main(input) {
//     const inputs = input.split(`\n`);
//     const N = Number(inputs[0]);
//     const S = inputs[1];

//     // Nから3個取る
//     const pins = new Set();
//     for(let i=0; i<N-2; i++) {
//         for(let j=i+1; j<N-1; j++) {
//             for(let k=j+1; k<N; k++) {
//                 const pin = S[i] + S[j] + S[k];
//                 pins.add(pin);
//             }
//         }
//     }
//     return pins.size;
// }

function main(input) {
    const inputs = input.split(`\n`);

    const N = Number(inputs[0]);
    const S = inputs[1];

    const pos = [[],[],[],[],[],[],[],[],[],[]];
    // 数字が出現する位置を記録。計算量はN？
    for(let i=0; i<N; i++) {
        const s = Number(S[i]);
        pos[s].push(i);
    }

    // console.log(pos);

    // 000から999までが成立するかを調べる。計算量は10^3？
    let count = 0;
    for(let i=0; i<10; i++) {
        if(pos[i].length === 0) {
            continue;
        }

        const l = pos[i][0];

        for(let j=0; j<10; j++) {
            if(pos[j].length === 0) {
                continue;
            }

            const m = pos[j].find(p => l < p);
            if(m == null) {
                continue;
            }

            for(let k=0; k<10; k++) {
                if(pos[k].length === 0) {
                    continue;
                }

                const r = pos[k][pos[k].length - 1];
                if(r <= m) {
                    continue;
                }

                // console.log(i,j,k, " : ", l, m, r);
                count++;
            }
        }
    }
    return count;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
