document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;
	
	// JavaScript code
	if (urlPath  === '/Public/Runtime/Form.aspx') {

		document.querySelector('.theme-entry .runtime-form').style.width = '100%';
		document.querySelector('.theme-entry .runtime-form').style.marginLeft = '0';
	
		

	}

        // Create Sidebar Container
        // const sidebar = $('<div id="sidebar" class="sidebar"></div>');
		const isInternal = window.location.pathname.includes("/Runtime/Runtime/Form/") || window.location.pathname.includes("/RuntimeAR/Runtime/Form/");
        const sidebarClass = isInternal ? "sidebar internalSidebar" : "sidebar";
        const sidebar = $(`<div id="sidebar" class="${sidebarClass}"></div>`);
		const isArabic = window.location.href.includes("PublicAR") || window.location.href.includes("RuntimeAR");

		
		
		function createMenuItems(menuItems) {
            menuItems.forEach(item => {
                const link = $('<a>').attr('href', item.url).addClass('sidebar-link');

                // Determine Active State
                if (window.location.href.includes(item.url)) {
                    link.addClass('active');
                }

                // Append Icon and Text
                const iconElement = $('<img>').attr('src', `https://ns.namaservices.om/Style/logos/${item.icon}`).addClass('sidebar-icon');
                link.append(iconElement).append($('<span>').text(item.text));
                sidebar.append(link);
            });
        }
		
		
    if (urlPath !== "/Runtime/Runtime/Form.aspx") {
        // Ensure jQuery is available
        if (typeof jQuery === "undefined") {
            console.error("jQuery is required for this script.");
            return;
        }
        let logoHref;
        if (urlPath.includes("/Runtime/Runtime/Form/")) {
            logoHref = "https://ns.namaservices.om/Runtime/Runtime/Form/Eservices.NavigationForm/";

        } 
        else if (urlPath.includes("/RuntimeAR/Runtime/Form/")) {
            logoHref = "https://ns.namaservices.om/RuntimeAR/Runtime/Form/Eservices.NavigationForm/";
        }
        else if (urlPath.includes("/Public/Runtime/Form/")) {
            logoHref = "https://ns.namaservices.om/Public/Runtime/Form/LCTS.EservicesHub.Form/";
        }
        else if (urlPath.includes("/PublicAR/Runtime/Form/")) {
            logoHref = "https://ns.namaservices.om/PublicAR/Runtime/Form/LCTS.EservicesHub.Form/";
        }


        // Add Logo Section
        const logoContainer = $('<div class="sidebar-logo-container"></div>');
        // const logoLink = $('<a href="https://yourwebsite.com" target="_blank"></a>');
        const logoLink = $('<a></a>').attr('href', logoHref);
        const logoImage = $('<img src="https://ns.namaservices.om/Style/logo Nama supply .png" alt="Company Logo" class="sidebar-logo">');
        logoLink.append(logoImage);
        logoContainer.append(logoLink);
        sidebar.append(logoContainer);

        // Sidebar Menu Sections
      
		sidebar.append(`<div class="sidebar-section">${isArabic ? "القائمة" : "MENU"}</div>`);
		
		
		
				let arabicMenuItems;
				let englishMenuItems;
		
		
		



        //const menuItems = [  
         //   { text: "Dashboard", url: "https://ns.namaservices.om/Runtime/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard.svg" },
         //   { text: "Submitted Requests", url: "https://ns.namaservices.om/Runtime/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
         //   { text: "Pending Tasks", url: "https://ns.namaservices.om/Runtime/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
	//		{ text: "My Accounts", url: "https://ns.namaservices.om/Runtime/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }			
     //   ];

          var x ="";
		  
		  
		  
		  
		      if (
        (
            urlPath.includes("Runtime/Form/") ||
            urlPath.includes("Runtime/Runtime/Form/")
||
urlPath.includes("RuntimeAR/Runtime/Form/")
        ) &&
        (
            urlPath.includes("CDU.ChangeOwnerAndNewTenant.Form") ||
            urlPath.includes("CDU.NewOwner.Form1") ||
            urlPath.includes("CDU.NewTenant.Form1") ||
            urlPath.includes("CDU.RemoveTenancy.Form1") ||
            urlPath.includes("CDU.UpdateAccountInfo.Form1")
        )
    ) {
	if (urlPath.includes("Runtime/Runtime/Form/") || urlPath.includes("RuntimeAR/Runtime/Form/")) {
            // Internal
           			//inernal 
			  englishMenuItems = [
            { text: "Dashboard", url: "https://ns.namaservices.om/Runtime/Runtime/Form/Eservices.NavigationForm/", icon: "Dashboard.svg" },
            { text: "Submitted Requests", url: "https://ns.namaservices.om/Runtime/Runtime/Form/SubmittedRequestsInternal.Form/", icon: "Document.svg" },
            { text: "Pending Tasks", url: "https://ns.namaservices.om/Runtime/Runtime/Form/PendingTaskInternal.Form/", icon: "pending.svg" }
				];
				
			arabicMenuItems = [
            { text: "لوحة القيادة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/Eservices.NavigationForm/", icon: "Dashboard.svg" },
            { text:  "الطلبات المقدمة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/SubmittedRequestsInternal.Form/", icon: "Document.svg" },
            { text:"المهام المعلقة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/PendingTaskInternal.Form/", icon: "pending.svg" }
				];
				
				   

			x= "Internal";
		
        } else {
            // External
            			//external 
				 englishMenuItems = [  
                { text: "Dashboard", url: "https://ns.namaservices.om/Public/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard.svg" },
                { text: "Submitted Requests", url: "https://ns.namaservices.om/Public/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
                { text: "Pending Tasks", url: "https://ns.namaservices.om/Public/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
                { text: "My Accounts", url: "https://ns.namaservices.om/Public/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }

            ];


         arabicMenuItems = [
            { text: "لوحة القيادة", url: "https://ns.namaservices.om/PublicAR/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard.svg" },
            { text: "الطلبات المقدمة", url: "https://ns.namaservices.om/PublicAR/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
            { text: "المهام المعلقة", url: "https://ns.namaservices.om/PublicAR/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
            { text: "حساباتي", url: "https://ns.namaservices.om/PublicAR/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }
        ];



			x= "External";
        }

    } 
		  
		else if (
            window.location.href.includes("State=Review%20Customer%20request") || // create profile
			window.location.href.includes("state=Review%20Customer%20request") || // create profile
            window.location.href.includes("State=Backend") || // update profile
            window.location.href.includes("state=Backend") || // update profile			
			window.location.href.includes("state=Review")  || //CDU
			window.location.href.includes("State=Review")  //CDU

			
        ) {
			
			
			//inernal 
			  englishMenuItems = [
            { text: "Dashboard", url: "https://ns.namaservices.om/Runtime/Runtime/Form/Eservices.NavigationForm/", icon: "Dashboard.svg" },
            { text: "Submitted Requests", url: "https://ns.namaservices.om/Runtime/Runtime/Form/SubmittedRequestsInternal.Form/", icon: "Document.svg" },
            { text: "Pending Tasks", url: "https://ns.namaservices.om/Runtime/Runtime/Form/PendingTaskInternal.Form/", icon: "pending.svg" }
				];
				
			arabicMenuItems = [
            { text: "لوحة القيادة", url: "https://ns.namaservices.om/Runtime/Runtime/Form/Eservices.NavigationForm/", icon: "Dashboard.svg" },
            { text:  "الطلبات المقدمة", url: "https://ns.namaservices.om/Runtime/Runtime/Form/SubmittedRequestsInternal.Form/", icon: "Document.svg" },
            { text:"المهام المعلقة", url: "https://ns.namaservices.om/Runtime/Runtime/Form/PendingTaskInternal.Form/", icon: "pending.svg" }
				];
				
				   

			x= "Internal";
		


        } else {
			
			//external 
				 englishMenuItems = [  
                { text: "Dashboard", url: "https://ns.namaservices.om/Public/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard.svg" },
                { text: "Submitted Requests", url: "https://ns.namaservices.om/Public/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
                { text: "Pending Tasks", url: "https://ns.namaservices.om/Public/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
                { text: "My Accounts", url: "https://ns.namaservices.om/Public/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }

            ];


         arabicMenuItems = [
            { text: "لوحة القيادة", url: "https://ns.namaservices.om/PublicAR/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard.svg" },
            { text: "الطلبات المقدمة", url: "https://ns.namaservices.om/PublicAR/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
            { text: "المهام المعلقة", url: "https://ns.namaservices.om/PublicAR/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
            { text: "حساباتي", url: "https://ns.namaservices.om/PublicAR/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }
        ];



			x= "External";
			
			
				

			          
           
        }


        const menuItems = isArabic ? arabicMenuItems : englishMenuItems;

        // Create menu items
        createMenuItems(menuItems);


		if(x=="External")
						{
						sidebar.append(`<div class="sidebar-section">${isArabic ? "أخرى" : "OTHERS"}</div>`);
										const helpLink = $('<a href="#" class="sidebar-link"></a>');
										const helpIcon = $('<img src="https://ns.namaservices.om/Style/logos/help.svg" class="sidebar-icon" alt="Help">');
										helpLink.append(helpIcon).append($('<span>').text(isArabic ? "مساعدة" : "Help"));
										sidebar.append(helpLink);
						}
				
        // Others Section
        //sidebar.append('<div class="sidebar-section">OTHERS</div>');
        //const helpLink = $('<a href="#" class="sidebar-link"></a>');
        //const helpIcon = $('<img src="https://ns.namaservices.om/Style/logos/help.svg" class="sidebar-icon" alt="Help">');
        //helpLink.append(helpIcon).append($('<span>').text("Help"));
        //sidebar.append(helpLink);

        // Append Sidebar to the Body
        $('body').append(sidebar);
    }
});
