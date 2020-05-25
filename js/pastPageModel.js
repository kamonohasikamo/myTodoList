$(function() {
	document.getElementById("view_time").innerHTML = getNow();

	function getNow() {
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();

		setPastDateSelect(year, month, day);

		var nowData = year + "/" + month + "/" + day;
		return nowData;
	}
	
	function setPastDateSelect(yyyy, month, day) {
		var mm = ("0"+(month)).slice(-2);
		var dd = ("0"+day).slice(-2);
		document.getElementById("pastDateSelectId").value = yyyy + '-' + mm + '-' + dd;
	}
});

function onPressPastDateSelectButton() {
	var selectDate = document.getElementById("pastDateSelectId").value;
	console.log("setDate = " + selectDate);
}

