var screen = document.getElementById('screen');

var u = document.getElementById('undo');

function btnClick(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function findResult() {
    u.value = screen.value
    var result = eval(screen.value)
    screen.value = result;
}

function calculation(value) {
    screen.value += value;
}

function percentage(value) {
    u.value = screen.value + value
    var strValue = screen.value.split(/(?=[+-])/)
    function calc() {
        var sum = 0;
        result = strValue.map(str => {
            return Number(str);
        });
        num1 = (result[0] * result[1]) / 100;
        num2 = result[0];
        sum = num1 + num2;
        return sum
    }
    screen.value = calc();
}

function del(value) {
    screen.value = screen.value.slice(0, -1)
}

screen.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn-eql").click();
    }
});
