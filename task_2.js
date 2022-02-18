function isNumberAscending(number) {
    let numberStr = number.toString()
    for (let i = 0; i < numberStr.length - 1; ++i)
        if (numberStr[i] > numberStr[i + 1]) return false;
    return true;
}

function runTestsTask2() {
    let currNumber = "0";
    for (let i = 0; i <= 1e6; ++i) {
        if (isNumberAscending(i)) currNumber = i.toString();
        if (solveTask2(i.toString()) !== currNumber) {
            alert("Error in task 2 tests.");
            return;
        }
    }
    if ((solve("1000000000000000000000") !== "999999999999999999999") || (solve("999999999999999999998") !== "899999999999999999999")) {
        alert("Error in task 2 tests.");
        return;
    }
    alert("Success");
}

function solveTask2(numberStr) {
    let numberArr = Array.from(numberStr)
    let turning_point = numberArr.length;
    let subtract = false;
    for (let i = 1; i < numberArr.length; ++i) {
        if (turning_point !== numberArr.length) numberArr[i] = '9';
        else if (numberArr[i] < numberArr[i - 1]) turning_point = i;
    }
    let lastNonZero = 0;
    if (turning_point !== numberArr.length) {
        for (let i = turning_point; i >= 0; --i) {
            if (subtract) {
                numberArr[i] = (numberArr[i] === '0' ? '9' : numberArr[i] - '1')
                subtract = false;
            }
            if (i > 0 && numberArr[i] < numberArr[i - 1]) {
                numberArr[i] = '9';
                subtract = true;
            }
            if (numberArr[i] !== 0) lastNonZero = i
        }
    }

    return numberArr.slice(lastNonZero).join("")
}

function runTask2() {
    let input = document.getElementById("task2Input").value;
    if (input === null || input === '')  document.getElementById("task2Result").value = "";
    document.getElementById("task2Result").value = solveTask2(input);
}

