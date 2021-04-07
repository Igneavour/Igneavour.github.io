/////////////////////////////////////////////////////////////////
////////////////* Image slideshow code for index *///////////////
/////////////////////////////////////////////////////////////////

// [3] w3schools.com, 'Image Slideshow', [Online]. Available: https://www.w3schools.com/howto/howto_js_slideshow.asp. [Accessed: 06 - Mar - 2021].

var slideIndex = [1, 1, 1, 1, 1, 1, 1];
var slideId = ['slides1', 'slides2', 'slides3', 'slides4', 'slides5', 'slides6', 'slides7'];
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

//function to manipulate change in slide when previous or next button is pressed

function plusSlides(n, number) {
  showSlides((slideIndex[number] += n), number);
}

//function that that jumps to a particular slide when dot is pressed

function currentSlide(n, number) {
  showSlides((slideIndex[number] = n), number);
}

//Logic for changing slides

function showSlides(n, number) {
  var i;
  var slides = document.getElementsByClassName(slideId[number]);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex[number] = 1;
  }
  if (n < 1) {
    slideIndex[number] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[number] - 1].style.display = "block";
  dots[slideIndex[number] - 1].className += " active";
}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////* Sticky sub nav code *//////////////////////////
////////////////////////////////////////////////////////////////////////////

// [5] w3schools.com, 'Sticky Navigation Bar', [Online]. Available: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp. [Accessed: 06 - Mar - 2021].
//if user scrolls beyond certain height, sticky property will be implemented

function stickyNav() {
  var navbar = document.getElementById("sub-nav");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

///////////////////////////////////////////////
///////////////* Code for form *///////////////
//////////////////////////////////////////////

//checks if there's any error messages and then show them. If not, show confirmation message.

function checkFormData() {
  var errorMessage = checkCompulsoryFieldsValues();

  if (errorMessage.length > 0) alert(errorMessage);
  else {
    var title = retrieveSelectedRadioButtonValue();
    var fnameElement = document.getElementById("FIRSTNAME");

    var confirmationMessage = "-------------------------------------------\n";
    confirmationMessage += "Dear " + title + " " + fnameElement.value + ", \n";
    confirmationMessage += "Thank you for contacting us! \n";
    confirmationMessage += "-------------------------------------------\n";
    confirmationMessage +=
      "You will receive a follow-up email from us and the relevant person for the agenda will get back to you shortly. \n\n";
    confirmationMessage += "Have a nice day! \n";
    alert(confirmationMessage);
  }
}

function retrieveSelectedRadioButtonValue() {
  var selectedTitle = "";

  var radioButtonArray = document.getElementsByClassName("title");

  for (var i = 0; i < radioButtonArray.length; i++) {
    if (radioButtonArray[i].checked == true)
      selectedTitle = radioButtonArray[i].value;
  }

  return selectedTitle;
}

//checks if particulars has been filled, if not error message shows.

function checkCompulsoryFieldsValues() {
  var fnameElement = document.getElementById("FIRSTNAME");
  var lnameElement = document.getElementById("LASTNAME");
  var emailElement = document.getElementById("EMAIL");

  var errorMessage = "";

  if (fnameElement.value.trim().length <= 0) {
    errorMessage += "\n Please fill in the First name section! \n";
    fnameElement.style.background = "pink";
  } else fnameElement.style.background = "white";

  if (lnameElement.value.trim().length <= 0) {
    errorMessage += "\n Please fill in the Last name section! \n";
    lnameElement.style.background = "pink";
  } else lnameElement.style.background = "white";

  var emailAsString = emailElement.value.trim();

  if (emailAsString.length <= 0) {
    errorMessage +=
      "\n Please enter an email address so we can contact you! \n";
    emailElement.style.background = "pink";
  } else emailElement.style.background = "white";

  errorMessage += checkReasonForContactCheckBoxOption();

  errorMessage += checkSatisfactoryLevelComboBox();

  return errorMessage;
}

//check if at least one box is ticked for reasons for contacting, if not error message is shown.

function checkReasonForContactCheckBoxOption() {
  var checkBoxesArray = document.getElementsByClassName("checkbox-area");
  var checkBoxHeaderElement = document.getElementById("checkBoxHeader");

  var atLeastOneCheckboxTicked = false;

  for (var i = 0; i < checkBoxesArray.length; i++) {
    if (checkBoxesArray[i].checked == true) atLeastOneCheckboxTicked = true;
  }

  var errorMsg = "";

  if (atLeastOneCheckboxTicked == false) {
    checkBoxHeaderElement.style.backgroundColor = "lightpink";
    errorMsg += "\n Please tick at least 1 checkbox for us to know your reason for contacting us! \n";
  } else checkBoxHeaderElement.style.backgroundColor = "transparent";

  return errorMsg;
}

//check if user has selected at least one option for combo box, else error message is shown.

function checkSatisfactoryLevelComboBox() {
  var satisfactionLevel = document.getElementById("satisfaction-level");
  var comboBoxHeaderElement = document.getElementById("comboBoxHeader");

  var errorMsg = "";

  // if user has NOT selected anything ...
  if (satisfactionLevel.value.length <= 0) {
    comboBoxHeaderElement.style.backgroundColor = "lightpink";
    errorMsg +=
      "\n Please select at least 1 option in the frequency of email updates \n";
  }
  else 
  comboBoxHeaderElement.style.backgroundColor = "transparent";

  return errorMsg;
}

function resetFormData() {
  // below code causes web-page to refresh/reload itself
  location = window.location.href;
}

////////////////////////////////////////
///////* scroll to top button */////////
////////////////////////////////////////

//[4] w3schools.com, 'Scroll to Top button', [Online]. Available: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp. [Accessed: 08 - Mar - 2021].

var backToTopButton = document.getElementById("back-to-top-btn");

//check scrolling distance to determine whether sticky should be implemented

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
