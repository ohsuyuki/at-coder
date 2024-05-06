function main(input) {
    const inputs = input.split(`\n`);
    const N = Number(inputs[0]);
    const P = inputs[1].replaceAll(` `, ``);
    const Q = inputs[2].replaceAll(` `, ``);

    let src = "";
    for(let i=1; i<=N; i++) {
        src += `${i}`;
    }

    let [p, q] = [null, null];
    let count = 0;
    const permutation = (src, numbers) => {
        if(p != null && q != null) {
            return;
        }

        if(numbers.length === N) {
            count++;

            if(P === numbers) {
                p = count;
            }

            if(Q === numbers) {
                q = count;
            }

            return;
        }

        for(let i=0; i<src.length; i++) {
            const tmp = src.slice(0, i) + src.slice(i+1);
            permutation(tmp, numbers + src[i]);
        }
    };
    permutation(src, "");

    return Math.abs(p-q);
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
