$( document ).ready(function() {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    var winNum = 0;
    var lossNum = 0;
    var scoreNum = 0;
    var amethystAdd = 1;
    var rubyAdd = 5;
    var diamondAdd = 10;
    var bloodDiamondAdd = 20;

    console.log(randomNum);
    console.log(scoreNum);
    console.log(winNum);

    $("#randoNumb").html(randomNum);
    $("#win").append(winNum);
    $("#loss").append(lossNum);
    $("#scoreTallyNum").html(scoreNum);


    $(".amethyst").click(function() {
    	scoreNum = scoreNum + amethystAdd;
    	console.log(scoreNum);
    	$(".scoreTallyNum").html(scoreNum);
    })

    $(".ruby").click(function() {
    	scoreNum = scoreNum + rubyAdd;
    	console.log(scoreNum);
    	$(".scoreTallyNum").html(scoreNum);
    })

    $(".diamond").click(function() {
    	scoreNum = scoreNum + diamondAdd;
    	console.log(scoreNum);
    	$(".scoreTallyNum").html(scoreNum);
    })

    $(".bloodDiamond").click(function() {
    	scoreNum = scoreNum + bloodDiamondAdd;
    	console.log(scoreNum);
    	$(".scoreTallyNum").html(scoreNum);
    })

    if (scoreNum === randomNum) {
		winNum++;
		$("#win").html(winNum);
	}

	if (scoreNum > randomNum) {
		lossNum++;
		$("#loss").html(lossNum);
	}

	if (winNum++ || lossNum++) {
		scoreNum = 0;
		var randomNum = Math.floor(Math.random() * 100) + 1;
		$("#randoNumb").html(randomNum);
	}
});