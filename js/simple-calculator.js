var resultString = [
'',
''
];

var number = [
0,
0,
0
];

var indicator = 0;
var operator = '';
var flagMinus = '';
var pointCount = 0;

// $('#simpleCalculator').click(function(){
// 	resultString[0] = '';
// 	resultString[1] = '';
// 	operator = '';
// 	flagMinus = '';
// 	pointCount = 0;
// 	indicator = 0;
// 	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
// 	$('#flagMinus').val(flagMinus);
// 	$('#result').val('0');
// });	

operateFunction = function() {
	number[0] = Number(resultString[0]);
	number[1] = Number(resultString[1]);
	if(operator==''){
		number[3]=Number(resultString[0]);
	} else if(operator=='+'){
		number[3] = number[0]+number[1];
	} else if(operator=='-'){
		number[3] = number[0]-number[1];
	} else if(operator=='*'){
		number[3] = number[0]*number[1];
	} else if(operator=='/'){
		number[3] = number[0]/number[1];
	} else if(operator=='%'){
		number[3] = number[0]%number[1];
	}
	if(number[3]<0) flagMinus='-';
	else flagMinus='';
	// resultString[0] += resultString[1]; 
	resultString[0] = String(number[3]);
	resultString[1] = '';
};

squareRoot = function(){
	number[0] = Number(resultString[indicator]);
	number[3] = Math.sqrt(number[0]);
	resultString[indicator] = String(number[3]);
	if(String(parseInt(resultString[indicator]))!=resultString[indicator]) pointCount=1;
};

valueInverse = function(){
	number[0] = Number(resultString[indicator]);
	number[3] = 1/number[0];
	resultString[indicator] = String(number[3]);
	if(String(parseInt(resultString[indicator]))!=resultString[indicator]) pointCount=1;
};

valueSquare = function(){
	number[0] = Number(resultString[indicator]);
	number[3] = number[0]*number[0];
	resultString[indicator] = String(number[3]);
	if(String(parseInt(resultString[indicator]))!=resultString[indicator]) pointCount=1;
};

$('#c').click(function(){
	resultString[0] = '';
	resultString[1] = '';
	operator = '';
	flagMinus = '';
	pointCount = 0;
	indicator = 0;
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#flagMinus').val(flagMinus);
	$('#result').val('0');
});

$('#ce').click(function(){	
	resultString[indicator]='';
	pointCount = 0;
	flagMinus='';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#flagMinus').val(flagMinus);
	$('#result').val('0');
});


$('#backspace').click(function(){		
	var size = resultString[indicator].length;
	resultString[indicator]=resultString[indicator].slice(0,size-1);
	if(size==0) flagMinus='';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#flagMinus').val(flagMinus);
	$('#result').val(resultString[indicator]);
});


$('#inverse').click(function(){	
	valueInverse();
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(resultString[indicator]);
});

$('#sqrt').click(function(){	
	squareRoot();
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(resultString[indicator]);	
	flagMinus = '';
	$('#flagMinus').val(flagMinus);
});


$('#square').click(function(){
	valueSquare();
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(resultString[indicator]);	
	flagMinus = '';
	$('#flagMinus').val(flagMinus);
});

$('#remainder').click(function(){
	operateFunction();
	operator = '%';
	indicator = 1;
	pointCount = 0;
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
	$('#flagMinus').val(flagMinus);	
	flagMinus = '';
});

$('#division').click(function(){
	operateFunction();
	operator = '/';
	indicator = 1;
	pointCount = 0;
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
	$('#flagMinus').val(flagMinus);	
	flagMinus = '';
});

$('#multiplication').click(function(){
	operateFunction();
	operator = '*';
	indicator = 1;
	pointCount = 0;
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
	$('#flagMinus').val(flagMinus);	
	flagMinus = '';
});

$('#subtraction').click(function(){
	operateFunction();
	operator = '-';
	indicator = 1;
	pointCount = 0;
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
	$('#flagMinus').val(flagMinus);	
	flagMinus = '';
});

$('#addition').click(function(){
	operateFunction();
	operator = '+';
	indicator = 1;
	pointCount = 0;
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
	$('#flagMinus').val(flagMinus);	
	flagMinus = '';
});

$('#equal').click(function(){
	operateFunction();
	operator = '';
	indicator = 0;
	pointCount = 0;
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
	$('#flagMinus').val(flagMinus);	
});


$('#reverse').click(function(){
	if(flagMinus==''){
		flagMinus = '-';
		resultString[indicator]='-'+resultString[indicator];
	} else {
		flagMinus = '';
		var size = resultString[indicator].length;
		resultString[indicator]=resultString[indicator].slice(1,size);
	}
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#flagMinus').val(flagMinus);
});


$('#seven').click(function(){
	resultString[indicator] += '7';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
});

$('#eight').click(function(){
	resultString[indicator] += '8';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
});

$('#nine').click(function(){
	resultString[indicator] += '9';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
});

$('#four').click(function(){
	resultString[indicator] += '4';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
});

$('#five').click(function(){
	resultString[indicator] += '5';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
});

$('#six').click(function(){
	resultString[indicator] += '6';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
});

$('#one').click(function(){
	resultString[indicator] += '1';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));	
});

$('#two').click(function(){
	resultString [indicator] += '2';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));			
});

$('#three').click(function(){
	resultString [indicator] += '3';
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	$('#result').val(String(Math.abs(Number(resultString[indicator]))));			
});

$('#zero').click(function(){
	if(resultString [indicator] != ''){
		resultString [indicator] += '0';
		$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
		$('#result').val(String(Math.abs(Number(resultString[indicator]))));
	}			
});

$('#point').click(function(){
	if(pointCount==0){
		pointCount=1;
		resultString [indicator] += '.';
	}
	$('#resultString').val(resultString[0] + ' ' + operator + ' ' + resultString[1]);
	if(resultString [indicator] != '.')
		$('#result').val(String(Math.abs(Number(resultString[indicator]))));		
});




