var dataArray = [];

loadCSV(); // Download the CSV data, load Google Charts, parse the data, and draw the chart

function loadCSV() {
    xmlhttp.open("GET", "temp.csv", true);
    xmlhttp.send();
    var loadingdiv = document.getElementById("loading");
    loadingdiv.style.visibility = "visible";
}

function parseCSV(string) {
    var array = [];
    var lines = string.split("\n");
    for (var i = 0; i < lines.length; i++) {
        var data = lines[i].split(",", 3);
        data[0] = new Date(parseInt(data[0]) * 1000);
        data[1] = parseFloat(data[1]);
        data[2] = parseFloat(data[2]);
        array.push(data);
    }
    return array;
}