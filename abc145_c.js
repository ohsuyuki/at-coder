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

    const totals = [];
    const permutation = (points, total, prev) => {
        if(points.length === 0) {
            totals.push(total);
            return;
        }

        for(let i=0; i<points.length; i++) {
            const p = points[i];
            const d = prev == null ? 0 : getDistance(p, prev);
            const tmp = [...points];
            tmp.splice(i,1);
            permutation(tmp, total + d, p);
        }
    };
    permutation(P, 0, null);

    return totals.reduce((prev, current) => prev + current, 0) / totals.length;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
