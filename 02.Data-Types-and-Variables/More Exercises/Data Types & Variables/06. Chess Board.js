function chessBoard(num) {
/*
    console.log('<div class="chessboard">');

    for (let row = 1; row <= num; row   ++) {
        console.log('<div>');
        for (let col = 1; col <= num; col++) {

            if (row % 2 === 0) {
                if (col % 2 === 0) {
                    console.log('<span class="black"></span>')
                }else{
                    console.log('<span class="white"></span>');
                }
                
            } else {
                if (col % 2 === 0) {
                    console.log('<span class="white"></span>');
                }else{
                    console.log('<span class="black"></span>')
                }
                
            }
        }
        console.log('</div>')
    }
    console.log('</div>')
    */

    let result = '<div class="chessboard">\n';

    for (let i = 0; i < num; i++) {
        let row = '';
        row += '  <div>\n';
        for (let j = 0; j < num; j++) {
            let color = (i + j) % 2? 'white' : 'black';
            row += `    <span class=${color}></span>\n`
            
        }
        row += '  </div>\n';
        result += row;
    }
   result += '</div>\n'
   console.log(result);
}
chessBoard(3)