
$(function(){
  
  $( "#buttonmain" ).click(function() {
    
    var small= $('#small').val()
    var big= $('#big').val()

    var color= $("select option:selected").text().toLowerCase();

    //creating board
    var board=createBoard(big,small);

    
    console.log(board);

    

    
  });
  
  
  
});









