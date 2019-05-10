//this is the jquery way to create a board 

function createBoard(big, small){
    var board = [];
    
    for(var i = 0; i < big; i++){
        
        
        var row=$('<tr>').addClass('row');
        
        if(i==0){
            row.addClass('firstx')
        }
        
        if(i==(big-1)){
            row.addClass('lastx')
        }
        
        if(i%small==0 && i!=0 && i!=(big-1)){
            
            row.addClass('middlex')
        }
        
        board.push(row);
        
        
        for(var j = 0; j < big; j++){
            
            var elm= $('<td>');
            
            
            
            console.log("this is j = "+ j)
            
            if(j==0){
                console.log("j == 0")
                elm.addClass('firsty')
                
            }
            
            if(j==(big-1)){
                console.log("j == big ")
                elm.addClass('lasty')
                
            }
            
            if(j%small==0 && j!=0 && j!=(big-1)){
                console.log("j is mod ")
                elm.addClass('middley')
                
            }
            
            
            board[i].append(elm)
            
            
            
        }
        
    }
    
    $('tbody').empty().append(board);

    return board
    
    // console.log(checkerBoard)
    
}
