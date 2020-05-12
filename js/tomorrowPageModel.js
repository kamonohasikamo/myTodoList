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
});

function ReqAddForm() {
	var point = document.getElementById("inputRequired");

	var inputText = document.createElement("input");
	inputText.setAttribute("type", "text");
	inputText.setAttribute("class", "inputText");
	inputText.setAttribute("placeholder", "今日の必須目標を書く");

	point.appendChild(inputText);
}

function ReqDelForm() {
	var point = document.getElementById("inputRequired");
	var childCount = point.childElementCount;
	if(childCount > 1) {
		point.removeChild(point.children[childCount - 1]);
	}
}

function SelAddForm() {
	var point = document.getElementById("inputSelection");

	var inputText = document.createElement("input");
	inputText.setAttribute("type", "text");
	inputText.setAttribute("class", "inputText");
	inputText.setAttribute("placeholder", "今日の選択必須目標を書く");

	point.appendChild(inputText);
}

function SelDelForm() {
	var point = document.getElementById("inputSelection");
	var childCount = point.childElementCount;
	if(childCount > 1) {
		point.removeChild(point.children[childCount - 1]);
	}
}