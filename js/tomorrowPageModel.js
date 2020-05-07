$(function() {
	document.getElementById("view_time").innerHTML = getNow();

	function getNow() {
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate() + 1;

		var nowData = year + "/" + month + "/" + day;
		return nowData;
	}

	$('input:checkbox').change(function() {
		var totalCount = document.todayTodoList.Required.length + document.todayTodoList.Selection.length;
		var RequiredBoxCount = $('#RequiredBox input:checkbox:checked').length;
		var SelectionBoxCount = $('#SelectionBox input:checkbox:checked').length;
		var progressPoint = ((RequiredBoxCount + SelectionBoxCount) / totalCount) * 100;
		$('div.todayTodoListClass').text('進捗は' + progressPoint + '%です。');
		var a = document.getElementById('progressBar');
		a.value = progressPoint;
	}).trigger('change');
});