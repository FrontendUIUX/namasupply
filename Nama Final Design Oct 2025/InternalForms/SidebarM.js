document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;

    if (urlPath !== "/Runtime/Runtime/Form.aspx") {
        // Ensure jQuery is available
        if (typeof jQuery === "undefined") {
            console.error("jQuery is required for this script.");
            return;
        }

        // Create Sidebar Container
                const sidebar = $('<div id="sidebar" class="sidebar"></div>');
		
		const isArabic = window.location.href.includes("RuntimeAR");
		
		
		function createMenuItems(menuItems) {
            menuItems.forEach(item => {
                const link = $('<a>').attr('href', item.url).addClass('sidebar-link');
        
                // Determine if the current link is active
                const isActive = window.location.href.includes(item.url);
        
                if (isActive) {
                    link.addClass('active');
                }
        
                // Adjust icon name for active state
                const iconName = isActive
                ? 'Internal' + item.icon.replace('.svg', '-active.svg')
                : item.icon;
        
                const iconElement = $('<img>')
                    .attr('src', `https://ns.namaservices.om/Style/logos/${iconName}`)
                    .addClass('sidebar-icon');
        
                link.append(iconElement).append($('<span>').text(item.text));
                sidebar.append(link);
            });
        }
        
		
		
        //const isArabictext = currentURL.includes('RuntimeAr');
        const linkURL = isArabic ? 'https://ns.namaservices.om/RuntimeAR/Runtime/Form/Eservices.NavigationForm/' : 'https://ns.namaservices.om/Runtime/Runtime/Form/Eservices.NavigationForm/';
        // Add Logo Section
        const logoContainer = $('<div class="sidebar-logo-container"></div>');
        const logoLink = $('<a></a>');
        const logoImage = $('<img src="https://ns.namaservices.om/Style/logo Nama supply .png" alt="Company Logo" class="sidebar-logo">');
        // const logoImage = $('<img src="https://ns.namaservices.om/Style/logo.png" alt="Company Logo" class="sidebar-logo">');
        logoLink.append(logoImage);
        logoContainer.append(logoLink);
        sidebar.append(logoContainer);
        logoLink.attr('href', linkURL);
        // Sidebar Menu Sections
        sidebar.append(`<div class="sidebar-section">${isArabic ? "القائمة" : "MENU"}</div>`);

        englishMenuItems = [
            { text: "Dashboard", url: "https://ns.namaservices.om/Runtime/Runtime/Form/Eservices.NavigationForm/", icon: "Dashboard.svg" },
            { text: "Submitted Requests", url: "https://ns.namaservices.om/Runtime/Runtime/Form/SubmittedRequestsInternal.Form/", icon: "Document.svg" },
            { text: "Pending Tasks", url: "https://ns.namaservices.om/Runtime/Runtime/Form/PendingTaskInternal.Form/", icon: "pending.svg" }
        ];
		
		
		    arabicMenuItems = [
            { text: "لوحة القيادة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/Eservices.NavigationForm/", icon: "Dashboard.svg" },
            { text: "الطلبات المقدمة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/SubmittedRequestsInternal.Form/", icon: "Document.svg" },
            { text: "المهام المعلقة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/PendingTaskInternal.Form/", icon: "pending.svg" }
        ];

       const menuItems = isArabic ? arabicMenuItems : englishMenuItems;

        // Create menu items
        createMenuItems(menuItems);
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


