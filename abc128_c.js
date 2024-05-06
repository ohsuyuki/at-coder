function allOn(i, lights, P) {
    for(let j=0; j<lights.length; j++) {
        let x = 0;
        for(let k=0; k<lights[j].length; k++) {
            let a = lights[j][k] - 1;
            if((i>>a)&1) {
                x ^= 1;
            }
        }

        if(P[j] !== x) {
            return false;
        }
    }
    return true;
}

function main(input) {
    const inputs = input.split(`\n`);
    const [N, M] = [...inputs[0].split(` `).map(Number)];
    const lights = new Array(M);
    for(let i = 0; i<M; i++) {
        lights[i] = inputs[i+1].split(` `).map(Number).slice(1);
    }
    const P = inputs[M+1].split(` `).map(Number);

    let count = 0;
    for(let i=0; i<(1<<N); i++) {
        if(allOn(i, lights, P)) {
            count++;
        }
    }
    return count;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(a);
