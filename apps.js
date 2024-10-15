function getMatrixA() {
    return [
        [parseFloat(document.getElementById('a00').value), parseFloat(document.getElementById('a01').value)],
        [parseFloat(document.getElementById('a10').value), parseFloat(document.getElementById('a11').value)]
    ];
}

function getMatrixB() {
    return [
        [parseFloat(document.getElementById('b00').value), parseFloat(document.getElementById('b01').value)],
        [parseFloat(document.getElementById('b10').value), parseFloat(document.getElementById('b11').value)]
    ];
}

function addMatrices() {
    const A = getMatrixA();
    const B = getMatrixB();
    const result = [
        [A[0][0] + B[0][0], A[0][1] + B[0][1]],
        [A[1][0] + B[1][0], A[1][1] + B[1][1]]
    ];
    displayResult(result, "Addition Result:");
}

function multiplyMatrices() {
    const A = getMatrixA();
    const B = getMatrixB();
    const result = [
        [
            A[0][0] * B[0][0] + A[0][1] * B[1][0],
            A[0][0] * B[0][1] + A[0][1] * B[1][1]
        ],
        [
            A[1][0] * B[0][0] + A[1][1] * B[1][0],
            A[1][0] * B[0][1] + A[1][1] * B[1][1]
        ]
    ];
    displayResult(result, "Multiplication Result:");
}

function displayResult(result, operation) {
    document.getElementById('result').innerHTML = `
        ${operation}<br>
        [ ${result[0][0]}, ${result[0][1]} ]<br>
        [ ${result[1][0]}, ${result[1][1]} ]
    `;
}
