//"The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s)".
// - W3 Schools


//dont forget to wrap your js in the ready function so the js won't attempt anything before the DOM is fully loaded
$(document).ready(function(){
    //initialize the global variables
    var wins = 0;
    var losses = 0;
    //this the value holder for the player total score
    var crystal_count = 0;
    $("#crystal_count").html(crystal_count);
    //this is the randomly generated target number 19-120
    var crystal_target = Math.floor(Math.random()*102)+19;
    $("#crystal_target").html(crystal_target);
    //this statement should randomly generate a number for each crystal
    var crystal_1 = newCrystal(), crystal_2 = newCrystal(),
    crystal_3 = newCrystal(),crystal_4 = newCrystal();
   

    //functions to be called
    function newCrystal(){
      var secret_value = Math.floor(Math.random()*11)+1;
      return secret_value;
    }

    var new_crystal_target = function(){
      Math.floor(Math.random()*102)+19;
    }

    //This section starts the onclick function that will control the rest of the game
    //there will be one onclick that targets the class of button
    //then the id of the button is found and the crystal count is updated by that button's
    //secret_value
    $(".button").click(function(){
      //the rest of the game must be contained within this onclick funciton
      //ID which button was clicked
      var userPick = this.id
      //TODO: make this if block a function called crystal_selection()
      if(userPick == "cr_1"){
        //update the crystal_count with the value of the clicked button
        crystal_count += crystal_1;
        $("#crystal_count").html(crystal_count);
      }
      
      if(userPick == "cr_2"){
        //update the crystal_count with the value of the clicked button
        crystal_count += crystal_2;
        //udpate the crystal_count display
        $("#crystal_count").html(crystal_count);
      }
      if(userPick == "cr_3"){
        //update the crystal_count with the value of the clicked button
        crystal_count += crystal_3;
        //udpate the crystal_count display
        $("#crystal_count").html(crystal_count);
      }
      if(userPick == "cr_4"){
        //update the crystal_count with the value of the clicked button
        crystal_count += crystal_4;
        //udpate the crystal_count display
        $("#crystal_count").html(crystal_count);
      }
      

      //The player will gain a win if the crystal_count equals the crystal_target and they will lose if it goes over
      //On either a win or loss the game will reset the crystal_target, the button values, and the crystal-count will be 0
      //TODO: make this into a funciton
      if(crystal_count >= crystal_target){
        //reset the buttons values
        crystal_1 = Math.floor(Math.random()*11)+1;  
        crystal_2 = Math.floor(Math.random()*11)+1;
        crystal_3 = Math.floor(Math.random()*11)+1;
        crystal_4 = Math.floor(Math.random()*11)+1;
        if(crystal_count == crystal_target){
          wins++;
          $("#wins").html("Wins: " + wins);
          crystal_target = Math.floor(Math.random()*102)+19;
          $("#crystal_target").html(crystal_target);
          crystal_count = 0;
          $("#crystal_count").html(crystal_count);
        }
        else if(crystal_count > crystal_target){
          losses++;
          $("#losses").html("Losses: " + losses);
          crystal_target = Math.floor(Math.random()*102)+19;
          $("#crystal_target").html(crystal_target);
          crystal_count = 0;
          $("#crystal_count").html(crystal_count);
        }
      }
    });


});
    