window.onload = function () {
    document.querySelectorAll('[name]').forEach(el => {
        let nameAttr = el.getAttribute('name');
        if (nameAttr.endsWith('value')) { // Replace 'value' with the actual ending
            el.style.fontSize = "16px";
            el.style.color = "#333"; // Darker text
            el.style.border = "1px solid #ddd"; // Light border
            el.style.borderRadius = "4px"; // Rounded corners
            el.style.padding = "8px 12px"; // Comfortable padding
		    el.style.paddingRight = "4px"; // Comfortable padding	
		    el.style.paddingleft = "50px"; // Comfortable padding	
			el.style.height = "30px";
			el.style.width = "100vh";
        }
    });
};




document.addEventListener("DOMContentLoaded", function () {
    // Check if the sticky header already exists
    let stickyHeader = document.getElementById('custom-sticky-header');

    if (!stickyHeader) {
        // Create the sticky header container
        stickyHeader = document.createElement('div');
        stickyHeader.id = 'custom-sticky-header';
        document.body.prepend(stickyHeader);
    }

    // Select elements to move
	
	
			const targetElement = document.querySelector('[name*="HeaderCard1"]');
				const targetElement2 = document.querySelector('[name*="HeaderCard2"]');
				
				
				
				 
		    
			
			    //let headerCard = document.querySelector('[name^="HeaderCard"]');
				let headercard; // <-- declare it here

	let externalHeaderCard = document.querySelector('[name^="HeaderCard1"]');

	
	let internalHeaderCard = document.querySelector('[name^="HeaderCard2"]');	
	
    if (
        (
            window.location.href.includes("Runtime/Form/") ||
            window.location.href.includes("Runtime/Runtime/Form/")
        ) &&
        (
            window.location.href.includes("CDU.ChangeOwnerAndNewTenant.Form") ||
            window.location.href.includes("CDU.NewOwner.Form1") ||
            window.location.href.includes("CDU.NewTenant.Form1") ||
            window.location.href.includes("CDU.RemoveTenancy.Form1") ||
            window.location.href.includes("CDU.UpdateAccountInfo.Form1")
        )
    ) {
        if (window.location.href.includes("Runtime/Runtime/Form/") || window.location.href.includes("RuntimeAR/Runtime/Form/")) {

			//internal 
			headercard  = internalHeaderCard
			targetElement.style.display = 'none' ;
        } else {
          			//external
			headercard  = externalHeaderCard
		targetElement2.style.display = 'none' ;
        }
		

    } else if (
            window.location.href.includes("State=Review%20Customer%20request") || // create profile
			window.location.href.includes("state=Review%20Customer%20request") || // create profile
            window.location.href.includes("State=Backend") || // update profile
            window.location.href.includes("state=Backend") || // update profile			
			window.location.href.includes("state=Review")  || //CDU
			window.location.href.includes("State=Review")  //CDU

			
        )
		{
			
			//internal 
			headercard  = internalHeaderCard
			targetElement.style.display = 'none' ;
			
		}
		else{
			//external
			headercard  = externalHeaderCard
		targetElement2.style.display = 'none' ;
			
		}

	
    let tabBoxTabs = document.querySelector('.tab-box-tabs');

    // Move elements inside the sticky header in order
    if (headercard) {

        stickyHeader.appendChild(headercard);
    }
    if (tabBoxTabs) {
        stickyHeader.appendChild(tabBoxTabs);
    }
		 const urlPath = window.location.pathname;
	 
	if (urlPath  === '/Runtime/Runtime/Form.aspx') {


		document.querySelector('.custom-sticky-header').style.width = '100%';
		document.querySelector('.custom-sticky-header').style.left = '0rem';	
	 }
});
$(function () {
    if ($('#custom-sticky-header').children().length === 2) {
      $('body').addClass('doubleTop');
    }
  });

