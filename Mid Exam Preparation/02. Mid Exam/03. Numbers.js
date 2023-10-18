function numbers(params) {
    let topNums = [];
    let nums = params.split(' ').map(Number);

    let average = nums.reduce((a, b) => b + a) / nums.length;

    topNums = nums
    .filter(a => a > average)
    .sort((a, b) => b - a)
    .slice(0, 5);

    if (topNums.length < 1) {
        console.log('No');
        return;
    }else{
        console.log(topNums.join(' '));
    }
}
numbers('1');
numbers('10 20 30 40 50')
