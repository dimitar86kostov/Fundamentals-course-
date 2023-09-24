function chessBoard(num) {

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
    console.log('</div>');
}
chessBoard(3)