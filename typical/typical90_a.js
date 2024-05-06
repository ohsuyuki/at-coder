function main(input) {
    input = input.split(`\n`);
    [N, L] = input[0].split(` `).map(Number);
    K = Number(input[1]);
    A = input[2].split(` `).map(Number);

    const isOK = (val) => {
        let prev = 0;
        let count = 0;
        for(let i = 0; i < A.length; i++) {
            const current = A[i];
            if(current - prev >= val) {
                count++;
                prev = current;
            }
        }
        if(L - prev >= val) {
            count++;
        }

        return count >= K + 1;
    };

    let left = -1;
    let right = L + 1;
    while(right - left > 1) {
        const mid = Math.ceil((left + right) / 2);
        if(isOK(mid)) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return left;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`20 1000
4
51 69 102 127 233 295 350 388 417 466 469 523 553 587 720 739 801 855 926 954
`)

console.log(a);
