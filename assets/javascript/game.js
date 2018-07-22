//dont forget to wrap your js in the ready function so the js wont attempt anything before the DOM is fully loaded
$(document).ready(function(){
    //initialize the global variables
    //this the value holder for the player total score
    var crystal_count = 0;
    //this is the randomly generated target number 19-120
    var crystal_target = Math.floor(Math.random()*120)+19;
    console.log("this is the random number " + crystal_target);
    //this statement should randomly generate a number for each crystal
    var crystal_1 = Math.floor(Math.random()*12)+1, crystal_2 = Math.floor(Math.random()*12)+1,
    crystal_3 = Math.floor(Math.random()*12)+1, crystal_4 = Math.floor(Math.random()*12)+1;
    //just checking it works
    console.log(crystal_1,crystal_2, crystal_3,crystal_4); 

});
    