//NAVIGATION SCROLL FEATURE//
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
	let scrollY = window.pageYOffset;
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
		sectionID = current.getAttribute("id");
		if (
			scrollY > sectionTop &&
			scrollY <= sectionTop + sectionHeight
		  ){
			document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
		  } else {
			document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
		  }
		});
	  }
	  
	  
// BUTTON//
function myFunction() {
	var x = document.getElementById("car1");
	if (x.style.display === "block") {
	} 
}

//REPLACE IMAGE// 
document.getElementById("form1").onsubmit=function() {
	
	taylor = parseInt(document.querySelector('input[name = "taylor"]:checked').value);
	  hair = parseInt(document.querySelector('input[name = "hair"]:checked').value);
	  util = parseInt(document.querySelector('input[name = "util"]:checked').value);
	  drink = parseInt(document.querySelector('input[name = "drink"]:checked').value);
	  weapon = parseInt(document.querySelector('input[name = "weapon"]:checked').value);
	  fight = parseInt(document.querySelector('input[name = "fight"]:checked').value);
	  
	   total= taylor + hair + util + drink + weapon + fight;
	   
	   document.getElementById("answer").innerHTML = total;

	   if(total < 15) {
		document.getElementById('car1').src="https://bit.ly/3LVisFR";
		}
		
		if(total >= 15 && total <22) {
			document.getElementById('car1').src="https://bit.ly/3vSBjfc";
		}
		if(total >=22 && total <28) {
			document.getElementById('car1').src="https://bit.ly/3N5aKJz";
		}
		if(total >=28 && total <35) {
			document.getElementById('car1').src="https://bit.ly/3snDgxX";
		}
		if(total >=35 && total <47) {
			document.getElementById('car1').src="https://bit.ly/3L3a4mA";
		}
		if(total >=47 && total <55) {
			document.getElementById('car1').src="https://bit.ly/37qicQ4";
		}
		if(total >=55) {
			document.getElementById('car1').src="https://bit.ly/3kSYqjq";
		}

	   return false; // required to not refresh the page; just leave this here
	   }// end the submit function

// CAR BROWSING // 
const cars = [
	{
	  
	  type: "novel",
	  image:
		"https://i.imgur.com/ueqpvl4.jpg"
	},
	{
	  
	  type: "compact",
	  image: "https://i.imgur.com/6Jshdy0.jpg"
	},
	{
	  
	  type: "compact",
	  image:
		"https://i.imgur.com/ICMYp8k.jpg"
	},
	{
	  
	  type: "novel",
	  image:
		"https://i.imgur.com/iVAX7e8.jpg"
	},
	{
	  
	  type: "work",
	  image: "https://i.imgur.com/Ir51Hbl.jpg"
	}
  ];
  
  const ul = document.querySelector("ul");
  
  //---------- RENDER NAMES TO PAGE
  
  function rendercarsToPage(cars) {
	for (let i = 0; i < cars.length; i++) {
	  let list_item = document.createElement("li");
	  list_item.classList.add(cars[i].type, "card");
	
	  // add flower type
	  let type = document.createElement("p");
	  type.classList.add(cars[i].type);
	  type.textContent = cars[i].type;
  
	  let image = document.createElement("img");
	  image.setAttribute("src", cars[i].image);
	  // append created elements to page
	  ul.appendChild(list_item);
	  list_item.appendChild(type);
	  list_item.appendChild(image);
	}
  }
  rendercarsToPage(cars);
  
  //---------- FILTER cars BY type
  
  let filterBtns = document.querySelector(".filters");
  let cards = document.querySelectorAll(".card");
  
  function filterFn(e) {
	// console.log("clicked", e.target);
	if (e.target.classList.contains("filter-btn")) {
	  filterBtns.querySelector(".active").classList.remove("active");
  
	  e.target.classList.add("active");
  
	  const filterValue = e.target.getAttribute("data-filter");
  
	  for (let i = 0; i < cards.length; i++) {
		if (cards[i].classList.contains(filterValue) || filterValue === "all") {
		  cards[i].classList.remove("hide");
		  cards[i].classList.add("show");
		} else {
		  cards[i].classList.remove("show");
		  cards[i].classList.add("hide");
		}
	  }
	}
  }
  filterBtns.addEventListener("click", filterFn);
  

