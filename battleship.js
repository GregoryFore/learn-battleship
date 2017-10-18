$(document).ready(function(){
  var headLetter = ["A","B","C","D","E","F","G","H","I","J"];
  // var headLetterLower
  // headLetter.forEach(function(element){
  //     headLetterLower[element] = headLetter[element].toLowerCase();
  // })
  // var rowNumber = 0;
  var torpedoes = 0;
  var board = [[], [], [], [], [], [], [], [], [], []]
  const ship = 1;
  var lowerLetter = ["a","b","c","d","e","f","g","h","i","j"];
  var shipPos = [];
  var hits = 0;

  //populates ships on board


  for (i = 0; i < 5; i++){

      var letter = Math.floor(Math.random()*10);
      var number = Math.floor(Math.random()*10);
      shipPos[i] = letter + "" + number;
      console.log(shipPos);
  }

    //this is the game board
    for (h=0; h<10; h++) {
        $("#table").append("<th id="+'h'+(headLetter[h])+h+">"+(headLetter[h])+"</th>");
    }
        for (r=0; r<10; r++){
            $("#table").append("<tr id="+r+">");

}
            for (d=0; d<10; d++){
              $("tr").append("<td id="+d+"></td>");

    }


    //clicking fires torpedoes and adds to torpedo counter
    $("td").on("click", function() {
            if (hits <= 5 || torpedoes >= 25) {
            var thisSq = $(this).parent().attr("id") + $(this).attr("id");
            console.log(thisSq);
            if (shipPos.includes(thisSq)) {
                $(this).addClass("hit");
                hits++;
                console.log("hits = " + hits);
            } else {
                $(this).addClass("miss");
            }
            if (torpedoes < 25) {
            torpedoes += 1;
            $("#torpedoCount").text("Torpedoes used: " + torpedoes);
            if (torpedoes >= 25 && hits < 5) {
              $("#torpedoCount").text("You have run out of ammo, Game Over!");

          } else if (hits >= 5) {
              $("#torpedoCount").text("You Win!");

          }
      }
$(this).off("click");
  }
    });

});
