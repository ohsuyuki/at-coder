const PIANO = "wbwbwwbwbwbw";

function getWB(start, len) {
    const piano = PIANO + PIANO;

    let [w, b] = [0, 0];

    const div = Math.floor(len / PIANO.length);
    w = div * 7;
    b = div * 5;

    const remain = len % PIANO.length;
    for(let i = start; i<start + remain; i++) {
        if(piano[i] === "w") {
            w++;
        } else {
            b++;
        }
    }
    return [w, b];
}

function main(input) {
    const inputs = input.split(`\n`);
    const [W, B] = inputs[0].split(` `).map(Number);
    const len = W + B;
    for(let i=0; i<PIANO.length; i++) {
        const [w, b] = getWB(i, len);
        if(w === W && b === B) {
            return "Yes";
        }
    }
    return "No";
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`3 2
`)

console.log(a);
