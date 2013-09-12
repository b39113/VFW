// JavaScript code for Week 2

// Variables

var ideaTitle = document.getElementById("ideaTitle");
var importance = document.getElementById("importance");
var dateDue = document.getElementById("dateDue");
var description = document.getElementById("description");
//var category = document.getElementById("mySubmit").category;
//var status = document.getElementById("mySubmit").status;

var captureData1 = function(){
	localStorage.setItem("Idea Title",ideaTitle.value);
};
var captureData2 = function(){
	localStorage.setItem("Importance",importance.value);
};
var captureData3 = function(){
	localStorage.setItem("Date Logged",dateDue.value);
};
var captureData4 = function(){
	localStorage.setItem("Idea Description",description.value);
};
var captureData5 = function(){
	localStorage.setItem("Week",week.value);
};
var getData = function(){
	var ideaTitleKey = localStorage.key("My Idea");
	var ideaTitleValue = localStorage.getItem(ideaTitleKey);
	ideaTitle.value = ideaTitleValue;
};

ideaTitle.addEventListener("blur" , captureData1);
importance.addEventListener("change" , captureData2);
dateDue.addEventListener("change" , captureData3);
description.addEventListener("blur" , captureData4);


