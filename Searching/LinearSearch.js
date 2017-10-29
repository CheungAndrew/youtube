function linearSearch(arr, target) {

    for (var i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }
    return -1;
}

function main() {

    var arr = [1, 2, 3, 4, 16, 15, 14, 11];
    var target = 14;

    var result = linearSearch(arr, target);
    console.log(result);
}

main();