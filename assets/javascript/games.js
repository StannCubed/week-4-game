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
    $("#scoreTallyNum").append(scoreNum);


    $(".amethyst").click(function() {
    	scoreNum = scoreNum + amethystAdd;
    	$("#scoreTallyNum").replaceWith("<p>scoreNum<p>");
    	console.log(scoreNum);
    })

    $(".ruby").click(function() {
    	scoreNum = scoreNum + rubyAdd;
    	$("#scoreTallyNum").replaceWith("<p>scoreNum<p>");
    	console.log(scoreNum);
    })

    $(".diamond").click(function() {
    	scoreNum = scoreNum + diamondAdd;
    	$("#scoreTallyNum").replaceWith("<p>scoreNum<p>");
    	console.log(scoreNum);
    })

    $(".bloodDiamond").click(function() {
    	scoreNum = scoreNum + bloodDiamondAdd;
    	$("#scoreTallyNum").replaceWith("<p>scoreNum<p>");
    	console.log(scoreNum);
    })

    if (scoreNum === randomNum) {
		winNum++;
	}

	if (scoreNum > randomNum) {
		lossNum++;
	}

	if (winNum++ || lossNum++) {
		scoreNum = 0
	}
});