function binarySearch(arr, conditioner) {
    let left = -1;
    let right = arr.length;
    // console.log(left, right);

    while((right - left) > 1) {
        // console.log(left, right);
        const mid = Math.floor((left + right) / 2);
        const value = arr[mid];
        if(conditioner(value)) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return right;
};

const arr = [1, 14, 32, 51, 51, 51, 243, 419, 750, 910];
const target = [51, 1, 910, 52, 0, 911];

for(let t of target) {
    console.log(t, binarySearch(arr, (v) => v >= t));
}