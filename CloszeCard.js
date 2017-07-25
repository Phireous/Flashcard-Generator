function Cloze(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial1
    this.partial = function() {
        var textSplit = this.fullText.split(" ");
        var clozeSplit = this.fullText.split(" ");
        for (i = 0; i < textSplit.length; i++) {
            for (j = 0; j < clozeSplit.length; j++) {
                if (clozeSplit[j] == textSplit[i]) {
                textSplit.splice(i, 1, "...")
                }
            }
        }
    }
    this.printPartial = function() {
        console.log(this.partial)
    }
}

var firstPrez = new Cloze("George Washington was first blah", "George Washington");

console.log(firstPrez.fullText + "\n" + firstPrez.cloze + "\n" + firstPrez.partial1);