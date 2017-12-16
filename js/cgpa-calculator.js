var subjectCount = 0;
var subjectCreditCount = 0;
var subjectGradePointCount = 0;
var cgpa = 0;

$('#calculate').click(function() {
	var subjectCredit = $('#subjectCredit').val();
	var subjectGradePoint = $('#subjectGradePoint').val();
	if(subjectCredit!=0 && subjectGradePoint!=0){
		subjectCount++;
		subjectCreditCount += Number(subjectCredit);
		subjectGradePointCount += subjectCredit*subjectGradePoint;
		cgpa = subjectGradePointCount/subjectCreditCount;
		
		$('#subjectCount').val(subjectCount);
		$('#subjectCreditCount').val(subjectCreditCount);		
		$('#subjectGradePointCount').val(subjectGradePointCount);
		$('#cgpa').val(cgpa.toFixed(2));
	}
});

$('#cgpa').click(function() {
	$('#cgpa').val(cgpa.toFixed(2));
	alert(cgpa.toFixed(2));
});



var gpaStatus = 0;
var estimateSubjectCount = 0; 
var estimateTotalCredit = 0;
var estimateGradePoint = 0;
var egpa = 0;
// var gpaStatus = 0;
// var currentGradePoint = 0;
// var estimateSubjectCount = 0;
// var estimateTotalCredit = 0;
// var estimateGradePoint = 0;

$('#evaluate').click( function(){
	var currentCredit = $('#currentCredit').val();
	var currentGpa = $('#currentGpa').val();	
	if(currentCredit != 0 && currentGpa!=0) {
		estimateGradePoint = currentGpa*currentCredit;
		estimateTotalCredit = currentCredit;		
		gpaStatus = 1;
		$('#currentGradePoint').val(estimateGradePoint);
	};
});

$('#estimate').click(function() {
	var improveSubjectCredit = $('#improveSubjectCredit').val();
	var previous = $('#previous').val();
	var improve = $('#improve').val();

	if(gpaStatus == 0){
		alert("Hello! Evaluate previous cgpa first!!");
	} else{
		if(improveSubjectCredit!=0 && improve!=0){
			if(previous <= improve) {
				estimateGradePoint += improveSubjectCredit*(improve-previous);
			}
			estimateSubjectCount++;
		}
		egpa = estimateGradePoint/estimateTotalCredit;
	}
	$('#estimateSubjectCount').val(estimateSubjectCount);	
	$('#estimateTotalCredit').val(estimateTotalCredit);	
	$('#estimateGradePoint').val(estimateGradePoint);	
	$('#egpa').val(egpa.toFixed(2));
});


$('#egpa').click(function() {
	$('#egpa').val(egpa.toFixed(2));
	alert(egpa.toFixed(2));
});
