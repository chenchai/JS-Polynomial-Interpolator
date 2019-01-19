// adds an empty input pair to the list of input pairs.
function addInputPair() {
    var point = document.createElement("div");

    point.setAttribute("id", "point");
    
    // create an input field
    var coord = document.createElement("input");
    coord.setAttribute("type", "text");
    var coord2 = document.createElement("input");
    coord2.setAttribute("type", "text");    

    point.append(coord);
    point.append(" "); // spaces aren't counted as nodes.
    point.append(coord2);

    var pointList = document.getElementById("pointList");
    pointList.append(point);
}

// removes the last input pair from the list if there are more that two.
function deleteInputPair() {
    var pointForm = document.getElementById("pointList");

    // we won't delete the point if there are two points or less.
    if (pointForm.childElementCount <= 2) {
        return;
    }

    pointForm.removeChild(pointForm.lastChild);
}

getPoints() {
    var pointForm = document.getElementById("pointList");
    var numPoints = pointForm.childElementCount;
    var rawPoints = pointForm.children;

    // array containing actual numbers.
    var points = [];

    for (var i = 0; i < numPoints; i++) {
        var rawPoint = rawPoints[i];
        var x = rawPoint.children[0].value;
        var y = rawPoint.children[1].value;
        var pair = [x, y];
        points.push(pair);
    }
}

// returns a vandermonde array to work with.
function getVandermondeArray() {
    var points = getPoints();
}

// validates that inputs are good.
function validateInputs() {
    var pointForm = document.getElementById("pointList");
    var numPoints = pointForm.childElementCount;
    console.log("Number of points: " + numPoints);
    var points = pointForm.children;

    // will be set to false if any input is invalid.
    var valid = true;

    // loop through each coordinate pair and validate
    for (var i = 0; i < numPoints; i++) {
        // get a point
        var point = points[i];
        console.log("number of coords: " + point.childElementCount);

        // get x and y values.
        var x = point.children[0];
        var y = point.children[1];

        // check if x is valid
        if (isNaN(x.value) || x.value == "") {
            valid = false;
            x.setAttribute("class", "invalid");
        } else {
            console.log("x is " + x.value);
            x.setAttribute("class", "");
        }

        // check if y is valid
        if (isNaN(y.value) || y.value == "") {
            valid = false;
            y.setAttribute("class", "invalid");
        } else {
            console.log("y is " + y.value);
            y.setAttribute("class", "");
        }
    }

    return valid;
}

function submitPoints() {
    var valid = validateInputs();
    if (!valid) { return; }

    var vandermonde = getVandermondeArray();
}

