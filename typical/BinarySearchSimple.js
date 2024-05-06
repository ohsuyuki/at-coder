function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;
    // console.log(left, right);

    while(left <= right) {
        // console.log(left, right);
        const mid = Math.floor((left + right) / 2);
        const current = arr[mid];
        if(current === target) {
            return mid;
        } else if(current < target) {
            left = mid  + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

const arr = [1, 14, 32, 51, 51, 51, 243, 419, 750, 910];
const target = [51, 1, 910, 52, 0, 911];

for(let t of target) {
    console.log(t, binarySearch(arr, t));
}