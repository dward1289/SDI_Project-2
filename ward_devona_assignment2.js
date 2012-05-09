var rappers = [ "Jay Z","Drake","J Cole" ];
var stageTime = [ 30, 45, 60 ];

//Procedure function
var stageCome = function () {
	for (var rapNum = 0; rapNum < rappers.length; rapNum++){
	var rapName = rappers[rapNum], time = stageTime[rapNum];
	console.log("Tonight we will have " + rapName + " for " + time + " minutes!");
	}
	console.log("Looks like we have some great performers tonight!");
	};


//Boolean function
var whoUp = function () {
	var i = 0;
	
	if (i < rappers.length){
	return console.log(rappers[0] + " will take the stage first.");
	}
	
	else{
	return console.log(rappers[2] + " will take the stage first.");
	}
	
	};

//String function
var exitNow = function () {
	var leaving = console.log("We enjoyed " + rappers + " for tonght!");
	return exitNow;
	};

//Procedure function is executed first.
stageCome();

//Boolean function is executed second.
whoUp();     

//Array function is executed third.
//Array function
var seeHim = function (man) {
	 
            var rapName = rappers[man];
            var minutesStage = stageTime[stageNumber];
            console.log("Coming to the stage is " + rapName + " for " + minutesStage + " minutes. Enjoy!");         
            for (var minutes = 0; minutes < minutesStage; minutes += 15) {
                    var minutesRemain = minutesStage - minutes;
                    console.log( rapName + " has " + minutesRemain + " minutes left. " + minutes + " minutes have past already?");
            }
            var doneNow = console.log( rapName + " has completed their performance.");
         	return doneNow;
        };

        for (var stageNumber = 0; stageNumber < rappers.length; stageNumber++) {
            seeHim(stageNumber); 
            
        };

//Number function
var money = function () {
	var rapMen = 3
	var totalPpl = rapMen * 120000
	while (rapMen <= 3) {
	var people = console.log("There were about " + totalPpl + " people at the concert tonight!");
	return people;
	}
	};
	
//Number function is executed fourth.
money();

//String function is executed last.
exitNow();	
	
	


