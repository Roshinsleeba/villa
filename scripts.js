// Function to open a tab and display its content
function openTab(evt, tabName) {
    var i, sevfourth, tablinks;
    
    // Hide all tab contents
    sevfourth = document.getElementsByClassName("sevfourth");
    for (i = 0; i < sevfourth.length; i++) {
      sevfourth[i].style.display = "none";
    }
    
    // Remove the active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    
    // Show the clicked tab content and add the active class to the clicked tab button
    /* document.getElementById(tabName).style.display = "block"; */
    var activeTab = document.getElementById(tabName);
    activeTab.style.display = "flex";  
    evt.currentTarget.classList.add("active"); 
  }
  
  // By default, open the "Home" tab
  document.getElementsByClassName("tablinks")[0].click();
  