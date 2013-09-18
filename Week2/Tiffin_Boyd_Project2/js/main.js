// JavaScript code for Week 2
//Project 2
//Boyd Tiffin
//1309 -Visual Frameworks


// Load all content before JS code runs
window.addEventListener("DOMContentLoaded", function(){

	// Global Functions
	function $(x){
		var myElement = document.getElementById(x);
		return myElement;
	};
	
	
	// Variables
/*
	var ideaTitle = $('ideaTitle');
	var importance = $('importance');
	var dateDue = $('dateDue');
	var description = $('description');
	var category = $('category');
	var clearAllLink = $('clearAllLink');
	var displayLink = $('displayLink');
	var status = document.getElementById("mySubmit").status;
	// This is not pulling category or status back as an array, I am stuck on this
	console.log(status);
	console.log(localStorage);
*/
	
	
	
	// Functions
	
	/* Add Items TO localStorage */
	var captureData = function(){
		localStorage.setItem("Idea Title",ideaTitle.value);
		localStorage.setItem("Importance",importance.value);
		localStorage.setItem("Date Logged",dateDue.value);
		localStorage.setItem("Idea Description",description.value);
		var category = document.getElementById("myForm").category;
		var checkedValues = [];
	// Loop through the checkboxes to determine what boxes are actually checked
			for(var i=0, j=category.length; i<j; i++){
			if(category[i].checked){
				checkedValues.push(category[i].value)
			}
		}
	
	};
	
	// Array for creating the Select Fields with JS
	var statusGroup = ["Lightbulb", "Requirements", "Development", "Implemented"],
	categoryValue = "No";
	catCreate();
	
	// Create Select Field from JS instead of HTML
	function catCreate(){
		var myForm = document.getElementsByTagName("form"),
			selectLi = $('select'), // Get select element into a var
			createSelect = document.createElement('select'); //create a select element
			createSelect.setAttribute("id", "status"); // create an ID attribute and apply to select tag we created
		for(var i=0, j=statusGroup.length; i<j; i++){
			var makeOption = document.createElement('option'),
				optText = statusGroup[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			createSelect.appendChild(makeOption);
		}
		selectLi.appendChild(createSelect);
	};
	
	// Clear ALl data function which is called when the button is clicked
	var clearAll = function(){
		if(localStorage.length ===0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("Data has been cleared!");
			window.location.reload();
			return false;
		}
	};
	
	// Checkbox Value
	function getCheckBoxValue(){
		if($('category').checked){
			categoryValue = $('category').value;
		}else{
			categoryValue = "No";
		}
	};
	
	// Toggle Display for Display Data
	function toogleControls(n){
		switch(n){
			case "on":
				$('mySubmit').style.display = "none";
				$('clearAllLink').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
			break;
			case "off":
				$('mySubmit').style.display = "block";
				$('clearAllLink').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
			break;
			default:
				return false;
		}
	};
	
	
	// Function to Store Data
	function storeData (){
		var id = Math.floor(Math.random()*100000001);
		// Get all form data in an Object
		getCheckBoxValue();
		var idea = {};
			idea.title = ["Idea Title:", $('ideaTitle').value];
			idea.importance = ["Importance:", $('importance').value];
			idea.dateDue = ["Date Due:", $('dateDue').value];
			idea.description = ["Description:", $('description').value];
			idea.category = ["Category:", $('category').value];
			idea.status = ["Status:", $('status').value];
		localStorage.setItem(id, JSON.stringify(idea));
		alert("Idea Logged!");
	};
	
	// Function to display items and hide form when button is clicked
	var displayData = function(){
	toogleControls("on");
	if(localStorage.length === 0){
		alert("You have no data in storage");
		window.location.reload();
	}
	// Display data to user
		var createDiv = document.createElement('div');
		createDiv.setAttribute("id", "items");
		var createList = document.createElement('ul');
		createDiv.appendChild(createList);
		document.body.appendChild(createDiv);
		$('items').style.display = "block";
		for(var i=0, j=localStorage.length; i<j; i++){
			var createLi = document.createElement('li');
			createList.appendChild(createLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// String to Obj
			var obj = JSON.parse(value); 
			var createSubList = document.createElement('ul');
			createLi.appendChild(createSubList);
			for(var d in obj){
				var createSubLi = document.createElement('li');
				createSubList.appendChild(createSubLi);
				var optSubText = obj[d][0]+" " +obj[d][1];
				createSubLi.innerHTML = optSubText;
			}
		}		
	};
	
	
	
	/* Listeners */
	
	butSubmit.addEventListener("click" , storeData);
	clearAllLink.addEventListener("click", clearAll);
	displayLink.addEventListener("click", displayData);
	
	
	
	
	
	
	
	/* I cant get this section to work, it will not pull by Key Value, it only pulls by array order */
		function(){
		var categoryKey = localStorage.key("category");
		var categoryValue = localStorage.getItem(categoryKey);
		category.value = categoryValue;
		var dateDueKey = localStorage.key("dateDue");
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
	





});