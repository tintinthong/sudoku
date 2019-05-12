
$(function(){
  
  var small= $('#small').val()
  var big= $('#big').val()

  //create object here 
//  var obj= createSudoku(small,big);
  
  $( "#createboard" ).click(function() {

    
    
    
    var color= $("select option:selected").text().toLowerCase();
    
    //creating board
    var board=createBoard(big,small);
    
    
    //add numbers 
    
    console.log(board);
    
    
  });
  
  $( "#addnumbers" ).click(function() {
  
    //creating board
    addNumbers(null);
    
    
    //add numbers 
    
    
    
  });
  
  
  
});









