window.onload = function(){
    for(let i = 0; i < 9;i++){
    document.getElementById('game').innerHTML += '<div class = "block"></div>'; 
     }

    let qayl = 0;


     document.getElementById('game'). onclick = function(event){
         if(event.target.className == 'block'){
             if(qayl % 2 == 0){
                  event.target.innerHTML = 'x';
              }else{
                event.target.innerHTML = 'o';
              }
            qayl++;
            winnerStopGame();
          }
     }
     function winnerStopGame(){
         var blocks = document.getElementsByClassName('block');
         if(blocks[0].innerHTML == 'x' && blocks[1].innerHTML == 'x' && blocks[2].innerHTML == 'x')alert('Winner X');
         if(blocks[3].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[5].innerHTML == 'x')alert('Winner X');
         if(blocks[6].innerHTML == 'x' && blocks[7].innerHTML == 'x' && blocks[8].innerHTML == 'x')alert('Winner X');
         if(blocks[0].innerHTML == 'x' && blocks[3].innerHTML == 'x' && blocks[6].innerHTML == 'x')alert('Winner X');
         if(blocks[1].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[7].innerHTML == 'x')alert('Winner X');
         if(blocks[2].innerHTML == 'x' && blocks[5].innerHTML == 'x' && blocks[8].innerHTML == 'x')alert('Winner X');
         if(blocks[0].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[8].innerHTML == 'x')alert('Winner X');
         if(blocks[2].innerHTML == 'x' && blocks[4].innerHTML == 'x' && blocks[6].innerHTML == 'x')alert('Winner X');

         if(blocks[0].innerHTML == 'o' && blocks[1].innerHTML == 'o' && blocks[2].innerHTML == 'o')alert('Winner O');
         if(blocks[3].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[5].innerHTML == 'o')alert('Winner O');
         if(blocks[6].innerHTML == 'o' && blocks[7].innerHTML == 'o' && blocks[8].innerHTML == 'o')alert('Winner O');
         if(blocks[0].innerHTML == 'o' && blocks[3].innerHTML == 'o' && blocks[6].innerHTML == 'o')alert('Winner O');
         if(blocks[1].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[7].innerHTML == 'o')alert('Winner O');
         if(blocks[2].innerHTML == 'o' && blocks[5].innerHTML == 'o' && blocks[8].innerHTML == 'o')alert('Winner O');
         if(blocks[0].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[8].innerHTML == 'o')alert('Winner O');
         if(blocks[2].innerHTML == 'o' && blocks[4].innerHTML == 'o' && blocks[6].innerHTML == 'o')alert('Winner O');
     }
}
