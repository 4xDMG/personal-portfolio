var screenDisplay = '';
var equationArray = [];
var result = 0;
var numBtnClick = false;
var operBtnClick = false;
var equalBtnClick = false;

$('.num-btn').click(function () {
	screenDisplay = screenDisplay + $(this).attr('number');
	$('#screen').val(screenDisplay);
	numBtnClick = true;
	if (numBtnClick == true && operBtnClick == true) {
		screenDisplay = $(this).attr('number');
		$('#screen').val(screenDisplay);
		operBtnClick = false;
		equalBtnClick = false;
	};
	if (numBtnClick == true && equalBtnClick == true) {
		equationArray = [];
		result = 0;
		screenDisplay = $(this).attr('number');
		$('#screen').val(screenDisplay);
		equalBtnClick = false;
		numBtnClick = false;
	};
});

$('.oper-btn').click(function() {
	screenDisplay = $('#screen').val();
	equationArray.push(screenDisplay);
	equationArray.push($(this).attr('operator'));
	numBtnClick = false;
	operBtnClick = true;
});

$('#equals-btn').click(function() {
	equationArray.push(screenDisplay);
	result = equationArray.join();
	result = result.replace(/,/g,'');
	result = eval(result);
	$('#screen').val(result);
	equalBtnClick = true;
	numBtnClick = false;
	equationArray = [];	
	result = 0;
});

$('#oper-ce').click(function() {
	screenDisplay = '';
	$('#screen').val(screenDisplay);
});

$('#oper-ac').click(function() {
	screenDisplay = '';
	$('#screen').val(screenDisplay);
	equationArray = [];
	result = 0;
});
