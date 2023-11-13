function cutAndReverse(str) {

    let left = str.slice(0, str.length / 2);
    let right = str.slice(str.length / 2);

    let leftStr = left.split('');
    let rightStr = right.split('');

    console.log(leftStr.reverse().join(''));
    console.log(rightStr.reverse().join(''));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')