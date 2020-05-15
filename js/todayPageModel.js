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

	$('input:checkbox').change(function() {
		var totalCount = document.todayTodoList.Required.length + document.todayTodoList.Selection.length;
		var RequiredBoxCount = $('#todayRequired input:checkbox:checked').length;
		var SelectionBoxCount = $('#todaySelection input:checkbox:checked').length;
		var progressPoint = ((RequiredBoxCount + SelectionBoxCount) / totalCount) * 100;

		$('div.todayTodoListClass').text('進捗は' + progressPoint + '%です。');

		var progressBar = document.getElementById('progressBar');
		progressBar.value = 10;//progressPoint;

		var todaysRankPathNum = getTodayRankPathNum(progressPoint);
		
		var rankImage = document.getElementById("todaysRankImage");
		rankImage.src = "../img/rank_" + todaysRankPathNum + ".png";
	}).trigger('change');

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

