var resp = window.prompt("Do you understand that this webpage is strictly for educational uses and not meant to represent a real company?")
alert("You responded \" "+ resp + " \" ");

function getData(){
	$.ajax({
		url: "service-data.json",
		type: "GET",
		dataType: "text",
		success: successFn,
		error: errorFn,
		complete: function(xhr, status){
			console.log("The request is complete");
		}
	})
}

function successFn(result){
	console.log("Setting result");
	$('#modal').append(result);
}
function errorFn(xhr, status, strErr){
	console.log("There was an error!");
}

$("document").ready(function(){
	getData();
});

$(function(){
	$("#slogan").on("mouseover", function(evt){
		$("#slogan").animate({fontSize: "24pt"}, 1000);
	});
});

$(function(){
	$('#res-btn').on("click", function(evt){
		$('#learn-more').html('<h5>Residential</h5><p>We offer recurring services for residential neighborhoods with various add-ons! Contact us today!</p>');
	} )
});

$(function(){
	$('#comm-btn').on("click", function(evt){
		$('#learn-more').html('<h5>Commercial</h5><p>Garcia Lawn Pro can tailor a custom package specific to your business or HOA needs! Contact us today!</p>');
	} )
});

