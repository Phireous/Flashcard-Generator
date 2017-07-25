var word = "this is a test";
var answer = "a test";

var split = word.split(" ");

var aSplit = answer.split(" ");

for (i = 0; i < split.length; i++) {
    for (j = 0; j < aSplit.length; j++) {
        if (aSplit[j] == split[i]) {
            split.splice(i, 1, "...")
        }
    }
}

console.log(split.join(" "));