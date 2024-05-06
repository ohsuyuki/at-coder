function main(input) {
    console.log(input);

    const inputs = input.split(`\n`);
    const months = Number(inputs[0]);
    const days = inputs[1].split(` `).map(Number);

    const total = days.reduce((prev, current) => prev + current, 0);
    let remain = Math.ceil(total / 2);

    for(let i = 0; i < days.length; i++) {
        if(remain <= days[i]) {
            return [i + 1, remain];
        } else {
            remain -= days[i];
        }
    }

    return undefined;
}

const [m, d] = main(`12
31 28 31 30 31 30 31 31 30 31 30 31`)

// const [m, d] = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(m, d);
