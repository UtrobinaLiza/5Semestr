

function sort_insert(arr) {
    for (j = 1; j < arr.length; j++) {
        key = arr[j];
        i = j - 1;
        while (i >= 0 && arr[i] > key) {
            // tmp = arr[i + 1];
            arr[i + 1] = arr[i];
            // arr[i] = tmp;
            i--;
        }
        arr[i + 1] = key;

    }
    return arr;
}

module.exports = {
    sort_insert
}
