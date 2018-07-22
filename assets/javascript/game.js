//dont forget to wrap your js in the ready function so the js wont attempt anything before the DOM is fully loaded
$(document).ready(function(){
    //initialize the global variables
    //this the value holder for the player total score
    var crystal_count = 0;
    //this is the randomly generated target number 19-120
    var crystal_target = Math.floor(Math.random()*102)+19;
    console.log("this is the random number " + crystal_target);
    //this statement should randomly generate a number for each crystal
    var crystal_1 = Math.floor(Math.random()*12)+1, crystal_2 = Math.floor(Math.random()*12)+1,
    crystal_3 = Math.floor(Math.random()*12)+1, crystal_4 = Math.floor(Math.random()*12)+1;
    //just checking it works
    console.log(crystal_1,crystal_2, crystal_3,crystal_4); 

    //This section starts the onclick function that will control the rest of the game
    //there will be one onclick that targets the class of button
    //then the id of the button is found and the crystal count is updated by that button's
    //secret_value
    $(".button").on("click", function(){
      //the rest of the game must be contained within this onclick funciton
      //ID which button was clicked
      var userPick = this.id
      console.log("this should be doing something?");
      console.log(userPick);
      if(userPick === cr_1){
        //this is testing that the onclick function is selecting the right button
        //and updating the correct value
        console.log(crystal_1);
      }

    });


});
    