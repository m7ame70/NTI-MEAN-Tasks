
function countWords() {
    var text = document.getElementById("text").value;
    var output1 = document.getElementById("output1");
    var output2 = document.getElementById("output2");

    var word = text(" ");
    for (var i in word) {
        console.log(i);
        output1.innerHTML = `Total Words  ${word.length}<br>`;
        output2.innerHTML += ` <br>${word[i]} => ${word[i].length} letters`;


    }

}