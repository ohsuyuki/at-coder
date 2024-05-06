function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);
    const coords = new Array(N);
    for(let i = 0; i < N; i++) {
        const coord = input[i + 1].split(` `).map(Number);
        coords[i] = coord;
    }

    const getDistance = (lhs, rhs) => {
        const x = Math.pow(lhs[0] - rhs[0], 2);
        const y = Math.pow(lhs[1] - rhs[1], 2);
        return Math.sqrt(x + y);
    };

    const ret = new Array(N).fill([undefined, 0]);
    for(let i = 0; i < N - 1; i++) {
        let maxIndex = ret[i][0];
        let maxDistance = ret[i][1];
        const rhs = coords[i];
        for(let j = i + 1; j < N; j++) {
            const lhs = coords[j];
            const currentDistance = getDistance(lhs, rhs);

            if(currentDistance > maxDistance) {
                maxIndex = j;
                maxDistance = currentDistance;
            }

            const tmpMaxDistance = ret[j][1];
            if(tmpMaxDistance < currentDistance) {
                ret[j] = [i, currentDistance]
            }
        }
        ret[i] = [maxIndex, maxDistance];
    }
    return ret;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`6
3 2
1 6
4 5
1 3
5 5
9 8
`)
for(let ans of a) {
    console.log(ans[0] + 1);
}
