function testInput(arr) {
    var a = arr[0], b = arr[1], c = arr[2], d = arr[3];
    var e = arr[4], f = arr[5], g = arr[6], h = arr[7];
    var i = arr[8], j = arr[9], k = arr[10];
    if (Math.floor(j / b) != f) return false;
    if (Math.floor(c / i) != b) return false;
    if (Math.floor(d / e) != a) return false;
    if (Math.floor(h / e) != b) return false;
    if (b % c != e) return false;
    if (f % d != Math.floor(j / d)) return false;
    if (k % i != j) return false;
    if (k % d != a * b) return false;
    if (e - g != i) return false;
    if (d - g != c) return false;
    if (k + a != d) return false;
    if (a * b != e * i) return false;
    return true;
}

function is_solution(string) {
    if (string.length != 11) return false;
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        var num = parseInt(string[i]);
        if (isNaN(num)) throw 'not a number';
        arr.push(num);
    }
    var a = arr[0], b = arr[1], c = arr[2], d = arr[3];
    var e = arr[4], f = arr[5], g = arr[6], h = arr[7];
    var i = arr[8], j = arr[9], k = arr[10];
    if (Math.floor(j / b) != f) return false;
    if (Math.floor(c / i) != b) return false;
    if (Math.floor(d / e) != a) return false;
    if (Math.floor(h / e) != b) return false;
    if (b % c != e) return false;
    if (f % d != Math.floor(j / d)) return false;
    if (k % i != j) return false;
    if (k % d != a * b) return false;
    if (e - g != i) return false;
    if (d - g != c) return false;
    if (k + a != d) return false;
    if (a * b != e * i) return false;
    return true;
}
