function openTab(event, tabId) {
    // Get all tab content elements
    const tabContents = document.getElementsByClassName('tab-content');
    // Hide all tab content
    for (let i = 0; i < tabContents.length; i++) {
      //tabContents[i].style.display = 'none';
      tabContents[i].classList.remove('show');
    }
  
    // Show the selected tab content
    document.getElementById(tabId).classList.add('show');
   // document.getElementById(tabId).style.display = 'block';
  } 
  /*var div = document.getElementById('div');
var display = 0;
function hideShow()
{
    if(display == 1)
    {
      div.style.display = 'block';
      display = 0;    
    }
    else
    {
      div.style.display = 'none';
      display = 1;    
    }
} */