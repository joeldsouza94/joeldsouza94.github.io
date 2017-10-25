// Used to get the small navbar
var smallNav = document.getElementById("smallNav");

// Used to get the active nav link
//var activeNavLinkElement = document.getElementById('activeNavLink');

/*
console.log("window.location.hash");
console.log(window.location.hash);
if (window.location.hash == '') {
  console.log("window.location.hash blank");
  document.getElementById("activeNavLink").innerHTML = 'HOME';
}
else {
  var navIdHash = window.location.hash.toUpperCase().substring(1);
  console.log(navIdHash);
  document.getElementById("activeNavLink").innerHTML = navIdHash;
  var navLink = "sideNavLink" + window.location.hash.toUpperCase().substring(1,2) + window.location.hash.toLowerCase().substring(2);
  console.log(navLink);
  activeNavLink(navLink);
}
*/ 

// Used to toggle the menu on small screens when clicking on the menu button
function navToggle() {
//alert(smallNav.className.indexOf("w3-show"));
console.log("navToggle");
    if (smallNav.className.indexOf("w3-show") == -1) {
        smallNav.className += " w3-show";
    } else { 
        smallNav.className = smallNav.className.replace(" w3-show", "");
    }
}
/*
// To display active link in navbar
function activeNavLink(navLink) {
  console.log("activeNavLink");
  console.log(navLink);
  var navLink = document.getElementById(navLink);
  console.log(navLink);
    if (navLink.className.indexOf("sideNavLink") == 0) {
        sideNavLinks = document.getElementsByClassName("sideNavLink");
        for (i = 0; i < sideNavLinks.length; i++) {
          sideNavLinks[i].className = sideNavLinks[i].className.replace(" w3-black", "");
        } 
        navLink.className += " w3-black";
    }
    else if (navLink.className.indexOf("topNavLink") == 0) {
        activeNavLinkElement.innerHTML = navLink.innerHTML;
    }
}
*/
//to hide small nav bar when clicked outside it
$(document).ready(function(){
   $(document).mouseup(function(event) { 
    if(!$(event.target).closest("#smallNav").length) {
        if($("#smallNav").is(":visible")) {
            $("#smallNav").removeClass(' w3-show');;
        }
    }        
})
});