function magicMatrices(array) {
    let isRow = false;
    let isCol = false;
    let row0 = array[0];
    let row1 = array[1];
    let row2 = array[2];

    let row0Sum = row0[0] + row0[1] + row0[2];
    let row1Sum = row1[0] + row1[1] + row1[2];
    let row2Sum = row2[0] + row2[1] + row2[2];

    let col0 = row0[0] + row1[0] + row2[0];
    let col1 = row0[1] + row1[1] + row2[1];
    let col2 = row0[2] + row1[2] + row2[2];

    if (row0Sum == row1Sum && row1Sum == row2Sum && row0Sum == row2Sum) {
        isRow = true;
    }
    if (col0 == col1 && col1 == col2 && col0 == col2) {
        isCol = true;
    }
    isRow & isRow ? console.log('true') : console.log('false');
    console.table(array)
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])