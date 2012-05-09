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
	var i = 2;
	
	if (i < rappers.length){
	return console.log("Looks like " + rappers[i] + " will take the stage first.");
	}
	
	else{
	return console.log("Looks like " + rappers[1] + " will take the stage first.");
	}
	
	};

//String function
var exitNow = function () {
	var leaving = console.log("We enjoyed " + rappers + " for tonght!");
	return exitNow;
	};

      
//Array function
var seeHim = function(man) {
            var rapName = rappers[man],
            minutesStage = stageTime[stageNumber];
            console.log("Coming to the stage is " + rapName + " for " + minutesStage + " minutes. Enjoy!");
            for (var minutes = 0; minutes < minutesStage; minutes += 15) {
                    var minutesRemain = minutesStage - minutes;
                    console.log( rapName + " has " + minutesRemain + " minutes left. " + minutes + " minutes have past already?");
            }
            console.log( rapName + " has completed their performance.");
        };

        for (var stageNumber = 0; stageNumber < rappers.length; stageNumber++) {
            seeHim(stageNumber); 
        };




