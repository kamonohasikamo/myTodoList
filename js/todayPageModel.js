// 今日の進捗を管理するオブジェクト
var todaysTotalScore = {
	"check" : 0,
	"total" : 0,
};

$(function() {
	document.getElementById("view_time").innerHTML = getNow();

	function getNow() {
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();

		var nowData = year + "/" + month + "/" + day;
		return nowData;
	}

	// 一旦すべてnoCheckとしてスコアをカウントする。
	todayScoreCount();

	$('input:checkbox').change(function() {
		if (this.checked) {
			todaysTotalScore.check += Number(this.parentNode.parentNode.children[2].innerHTML);
		} else {
			if (todaysTotalScore.check > 0) {
				todaysTotalScore.check -= Number(this.parentNode.parentNode.children[2].innerHTML);
			}
		}

		var progressPoint = (todaysTotalScore.check / todaysTotalScore.total) * 100;

		$('div.todayTodoListClass').text('進捗は' + progressPoint + '%です。');

		var progressBar = document.getElementById('progressBar');
		progressBar.value = 10;//progressPoint;

		var todaysRankPathNum = getTodayRankPathNum(progressPoint);
		
		var rankImage = document.getElementById("todaysRankImage");
		rankImage.src = "../img/rank_" + todaysRankPathNum + ".png";
	}).trigger('change');

	// 一旦すべてnoCheckとしてスコアをカウントする。
	function todayScoreCount() {
		clearTodayTotalScore();
		var table = document.getElementById("todayRequired");
		var length = table.rows.length;
		for (var i = 1; i < length; i++) {
			todaysTotalScore.total += Number(table.rows[i].cells[2].innerHTML);
		}

		table = document.getElementById("todaySelection");
		length = table.rows.length;
		for (var i = 1; i < length; i++) {
			todaysTotalScore.total += Number(table.rows[i].cells[2].innerHTML);
		}

		return;
	}

	function clearTodayTotalScore() {
		todaysTotalScore.total = 0;
		todaysTotalScore.check = 0;
	}

	function getTodayRankPathNum(progressPoint) {
		var todaysRankPathNum = 6;
		if (progressPoint == 100) {
			todaysRankPathNum = 0;
		} else if (progressPoint >= 90) {
			todaysRankPathNum = 1;
		} else if (progressPoint >= 80) {
			todaysRankPathNum = 2;
		} else if (progressPoint >= 60) {
			todaysRankPathNum = 3;
		} else if (progressPoint >= 40) {
			todaysRankPathNum = 4;
		} else if (progressPoint >= 20) {
			todaysRankPathNum = 5;
		}
		return todaysRankPathNum;
	}
});
