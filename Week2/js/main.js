// JavaScript code for Week 2

// Load all content before JS code runs
window.addEventListener("DOMContentLoaded", function(){

	// Global Functions
	function $(x){
		var myElement = document.getElementById(x);
		return myElement;
	};
	
	
	// Variables
	var ideaTitle = $('ideaTitle');
	var importance = $('importance');
	var dateDue = $('dateDue');
	var description = $('description');
	var category = $('category');
	var clearAllLink = $('clearAllLink');
	var status = document.getElementById("mySubmit").status;
	
	console.log(category);
	console.log(localStorage);
	
	
	
	// Functions
	
	/* Add Items TO localStorage */
	var captureData = function(){
		localStorage.setItem("Idea Title",ideaTitle.value);
		localStorage.setItem("Importance",importance.value);
		localStorage.setItem("Date Logged",dateDue.value);
		localStorage.setItem("Idea Description",description.value);
	// Loop through the checkboxes to determine what boxes are actually checked
	/*
		for(var i=0, j=category.length; i<j, i++){
			if(category[i].checked){
				console.log(category[i].value);
			}
		}
	*/
	};
	
	// Clear ALl data function which is called when the button is clicked
	var clearAll = function(){
		localStorage.clear();
	}
	
	// Function to display items and hide form when button is clicked
	
	
	
	
	/* Listeners */
	
	butSubmit.addEventListener("click" , captureData);
	clearAllLink.addEventListener("click", clearAll);
	
	
	
	
	
	
	
	
	/* I cant get this section to work, it will not pull by Key Value, it only pulls by array order */
	/*
	var getData = function(){
		var categoryKey = localStorage.key(0);
		var categoryValue = localStorage.getItem(categoryKey);
		category.value = categoryValue;
		var dateDueKey = localStorage.key(1);
		var dateDueValue = localStorage.getItem(dateDueKey);
		dateDue.value = dateDueValue;
		var descriptionKey = localStorage.key(2);
		var descriptionValue = localStorage.getItem(descriptionKey);
		description.value = descriptionValue;
		var ideaTitleKey = localStorage.key(3);
		var ideaTitleValue = localStorage.getItem(ideaTitleKey);
		ideaTitle.value = ideaTitleValue;
		var importanceKey = localStorage.key(4);
		var importanceValue = localStorage.getItem(importanceKey);
		importance.value = importanceValue;
	};
	*/





});