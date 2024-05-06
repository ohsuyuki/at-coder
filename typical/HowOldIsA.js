// const answer = [true, false, true, false];

function binarySearch(min, max, conditioner) {
    let ng = min - 1;
    let ok = max + 1;

    while(Math.abs(ok - ng) > 1) {
        const mid = Math.ceil((ok + ng) / 2);
        if(conditioner(mid)) {
            ok = mid;
        } else {
            ng = mid;
        }
    }
    return ok;
}

// 20 - 35
for(let i = 20; i < 36; i++) {
    const age = i;
    let count = 0;
    const conditioner = (v) => {
        console.log(++count);
        return age <= v;
    }

    const ans = binarySearch(20, 35, conditioner);
    console.log("age", age);
    console.log("ans", ans);
}
