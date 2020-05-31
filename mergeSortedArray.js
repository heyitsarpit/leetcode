function pushToMerged(merged, arr, index) {
    for (let i = index; i < arr.length; i++) {
        merged.push(arr[i]);
    }
}

function mergeSortedArray(arr1, arr2) {
    let merged = [];

    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            merged.push(arr2[j]);
            j++;
        } else {
            merged.push(arr1[i]);
            merged.push(arr2[j]);
            i++;
            j++;
        }
    }

    arr1.length < arr2.length ? pushToMerged(merged, arr2, j) : pushToMerged(merged, arr1, i);

    return merged;
}

console.log(mergeSortedArray([3, 4, 8, 11, 16, 20], [1, 5, 10, 15]));

// [1, 5, 10, >15]
// [3, 4, 8, >11, 16, 20]

// [1,3,4,5, 8, 10, 11]
