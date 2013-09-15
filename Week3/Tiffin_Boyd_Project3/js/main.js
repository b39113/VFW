// JavaScript code for Week 3
//Project 
//Boyd Tiffin
//1309 -Visual Frameworks


// Load all content before JS code runs
window.addEventListener("DOMContentLoaded", function(){
	// Global Functions
	function $(x){
		var myElement = document.getElementById(x);
		return myElement;
	};
	
// Functions
	/* Add Items TO localStorage */
	var captureData = function(){
		localStorage.setItem("Idea Title",ideaTitle.value);
		localStorage.setItem("Importance",importance.value);
		localStorage.setItem("Date Logged",dateDue.value);
		localStorage.setItem("Idea Description",description.value);
	};
	
	// Array for creating the Select Fields with JS
	var statusGroup = ["Lightbulb", "Requirements", "Development", "Implemented"],
	itemTypeValue = false;
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
	function getRadios(){
		if($('domain').checked){
			itemTypeValue = "Domain";
		}else if($('website').checked){
			itemTypeValue = "Website";
		}else if($('app').checked){
			itemTypeValue = "App";
		}else{
			itemTypeValue = "No";
		}
	};
	
	var checkboxes = document.getElementById("mySubmit").ideaType;
	
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
		getRadios();
		var idea = {};
			idea.title = ["Idea Title:", $('ideaTitle').value];
			idea.importance = ["Importance:", $('importance').value];
			idea.dateDue = ["Date Due:", $('dateDue').value];
			idea.description = ["Description:", $('description').value];
			idea.ideatype = ["Idea Type:", itemTypeValue];
			idea.status = ["Status:", $('status').value];
		localStorage.setItem(id, JSON.stringify(idea));
		console.log(idea);
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
			var createLinks = document.createElement('li');
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
				createSubList.appendChild(createLinks);
			}
			createItemLinks(localStorage.key(i), createLinks); // Creates the overall app edit and delete links
		}		
	};
	
	function createItemLinks(key,createLinks){
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Idea";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		createLinks.appendChild(editLink);
		//add Line Break
		var breakTag = document.createElement('br');
		createLinks.appendChild(breakTag);
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Idea";
		//deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		createLinks.appendChild(deleteLink);
	};
	
	function editItem(){
		// get item info from localStorage
		var value = localStorage.getItem(this.key);
		var idea = JSON.parse(value);
		//Show Form
		toogleControls("off");
		console.log(idea);
		$('ideaTitle').value = idea.title[1];
		$('importance').value = idea.importance[1];
		$('dateDue').value = idea.dateDue[1];
		$('description').value = idea.description[1];
		$('status').value = idea.status[1];
		
/* 		Need Radio Button and/or Checkbox Code */
		var radios = document.forms[0].ideaType;
		for(var i=0; i<radios.length; i++){
			if(idea.ideatype[1] == "Domain"){
				radios[i].setAttribute("checked", "checked");
			}else if(idea.ideatype[1] == "App"){
				radios[i].setAttribute("checked", "checked");
			}else if(idea.ideatype[1] == "Website"){
				radios[i].setAttribute("checked", "checked");
			}
		}
	};
	
	/* Listeners */
	butSubmit.addEventListener("click" , storeData);
	clearAllLink.addEventListener("click", clearAll);
	displayLink.addEventListener("click", displayData);
});