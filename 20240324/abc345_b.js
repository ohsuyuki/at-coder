function main(input) {
    const X = input.split(`\n`)[0];

    let negative = X[0] === `-`;
    if(negative) {
        if(X.length === 2) {
            return "0";
        } else {
            return X.substring(0, X.length - 1);
        }
    }

    if(X.length === 1) {
        if(X === `0`) {
            return "0";
        } else {
            return "1";
        }
    }

    let a = "";
    let up = 0;
    for(let i = 0; i < X.length; i++) {
        let n = Number(X[X.length - 1 - i]);

        switch(i) {
            case 0:
                up = n === 0 ? 0 : 1;
                continue;
            default:
                n = n + up
                up = 10 <= n ? 1 : 0;
                n = 10 <= n ? n - 10 : n;
                a = `${n}${a}`;
        }
    }
    if(up === 1) {
        return `1${a}`
    } else {
        return a;
    }
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`99`)

console.log(a);
