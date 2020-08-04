function average(testScores) {
    var n = testScores.length;
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += testScores[i];
    }
    return Math.round(sum / n);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));