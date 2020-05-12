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
		var RequiredBoxCount = $('#RequiredBox input:checkbox:checked').length;
		var SelectionBoxCount = $('#SelectionBox input:checkbox:checked').length;
		var progressPoint = ((RequiredBoxCount + SelectionBoxCount) / totalCount) * 100;

		$('div.todayTodoListClass').text('進捗は' + progressPoint + '%です。');

		var progressBar = document.getElementById('progressBar');
		progressBar.value = progressPoint;

		var todaysRankText = "";
		var todaysRankColorCode;
		if (progressPoint == 100) {
			todaysRankText = "SS";
			todaysRankColorCode = "#FFFF00";
		} else if (progressPoint >= 90) {
			todaysRankText = "A";
			todaysRankColorCode = "#FF0000";
		} else if (progressPoint >= 80) {
			todaysRankText = "B";
			todaysRankColorCode = "#0000FF";
		} else if (progressPoint >= 60) {
			todaysRankText = "C";
			todaysRankColorCode = "#00FF00";
		} else if (progressPoint >= 40) {
			todaysRankText = "D";
			todaysRankColorCode = "#808000";
		} else if (progressPoint >= 20) {
			todaysRankText = "E";
			todaysRankColorCode = "#808080";
		} else {
			todaysRankText = "F";
			todaysRankColorCode = "#000000";
		}
		var todaysRankValue = document.getElementById("todaysRankValue");
		todaysRankValue.innerHTML = todaysRankText;
		todaysRankValue.style.color = todaysRankColorCode;
		todaysRankValue.style.fontSize = '50px';
	}).trigger('change');
});

