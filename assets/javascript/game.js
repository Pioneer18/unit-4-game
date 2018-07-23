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
    var crystal_target = new_target();
    $("#crystal_target").html(crystal_target);
    //this statement should randomly generate a number for each crystal
    var crystal_1 = new_crystal(), crystal_2 = new_crystal(),
    crystal_3 = new_crystal(),crystal_4 = new_crystal();
   
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
        crystal_1 = new_crystal();  
        crystal_2 = new_crystal();
        crystal_3 = new_crystal();
        crystal_4 = new_crystal();
        if(crystal_count == crystal_target){
          wins++;
          $("#wins").html("Wins: " + wins);
          crystal_target = new_target();
          $("#crystal_target").html(crystal_target);
          crystal_count = 0;
          $("#crystal_count").html(crystal_count);
        }
        else if(crystal_count > crystal_target){
          losses++;
          $("#losses").html("Losses: " + losses);
          crystal_target = new_target();
          $("#crystal_target").html(crystal_target);
          crystal_count = 0;
          $("#crystal_count").html(crystal_count);
        }
      }
    });

    //functions to be called

    //generates new values for the buttons
    function new_crystal(){
      var secret_value = Math.floor(Math.random()*11)+1;
      return secret_value;
    }

    function new_target(){
      var new_value = Math.floor(Math.random()*102)+19;
      return new_value;
    }



});
    