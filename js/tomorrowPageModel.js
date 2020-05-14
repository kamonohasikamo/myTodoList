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

var setFormInfomation = {
	inputRequired : {
		text : "今日の必須項目を書く",
		form : "inputRequired"
	},

	inputSelection : {
		text : "今日の選択必須項目を書く",
		form : "inputSelection"
	}
};

function ClearForm() {
	var point = document.getElementById("inputTodayTarget");
	point.value = "";
}


function addForm(elementTag) {
	var point = document.getElementById(elementTag);

	var newRow = point.insertRow();
	var newCell = newRow.insertCell();

	var inputText = document.createElement("input");
	inputText.setAttribute("type", "text");
	inputText.setAttribute("class", "inputText");
	inputText.setAttribute("placeholder", setFormInfomation[elementTag].text);

	newCell.appendChild(inputText);

	newCell = newRow.insertCell();
	var inputWeight = document.createElement("input");
	inputWeight.setAttribute("type", "tel");
	inputWeight.setAttribute("class", "inputWeight");
	inputWeight.setAttribute("placeholder", "重要度");

	newCell.appendChild(inputWeight);

	newCell = newRow.insertCell();
	var addButton = document.createElement("input");
	addButton.setAttribute("type", "button");
	addButton.setAttribute("value", "Add");
	addButton.setAttribute("class", "AddDelButton");
	addButton.setAttribute("onclick", 'addForm("' + setFormInfomation[elementTag].form + '")');

	newCell.appendChild(addButton);

	newCell = newRow.insertCell();
	var delButton = document.createElement("input");
	delButton.setAttribute("type", "button");
	delButton.setAttribute("value", "Delete");
	delButton.setAttribute("class", "AddDelButton");
	delButton.setAttribute("onclick", "delForm(this)");

	newCell.appendChild(delButton);
}

function delForm(obj) {
	var tr = obj.parentNode.parentNode;
	if (tr.parentNode.rows.length > 2) {
		tr.parentNode.deleteRow(tr.sectionRowIndex);
	}
}

function setTomorrowTarget() {

}