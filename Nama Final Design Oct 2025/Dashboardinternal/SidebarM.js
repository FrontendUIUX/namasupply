document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;

    if (urlPath !== "/Runtime/Runtime/Form.aspx") {
        // Ensure jQuery is available
        if (typeof jQuery === "undefined") {
            console.error("jQuery is required for this script.");
            return;
        }
		
        // Determine if the current language is Arabic
        const isArabic = window.location.href.includes("RuntimeAR");
		
        // Function to create menu items
        function createMenuItems(menuItems) {
            menuItems.forEach(item => {
                const link = $('<a>')
                    .attr('href', item.url)
                    .addClass('sidebar-link');

                // Determine Active State
                if (window.location.href.includes(item.url)) {
                    link.addClass('active');
                }

                // Append Icon and Text
                const iconElement = $('<img>')
                    .attr('src', `https://ns.namaservices.om/Style/logos/${item.icon}`)
                    .addClass('sidebar-icon');
                    
                link.append(iconElement)
                    .append($('<span>').text(item.text));
                    
                sidebar.append(link);
            });
        }
		
        // Create Sidebar Container
        const sidebar = $('<div id="sidebar" class="sidebar"></div>');
        const currentURL = window.location.href;
        const isArabictext = currentURL.includes('RuntimeAr');
        const linkURL = isArabictext ? 'https://ns.namaservices.om/RuntimeAR/Runtime/Form/Eservices.NavigationForm/' : 'https://ns.namaservices.om/Runtime/Runtime/Form/Eservices.NavigationForm/';
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

        const englishMenuItems = [
            { text: "Dashboard", url: "https://ns.namaservices.om/Runtime/Runtime/Form/Eservices.NavigationForm/", icon: "InternalDashboard-active.svg" },
            { text: "Submitted Requests", url: "https://ns.namaservices.om/Runtime/Runtime/Form/SubmittedRequestsInternal.Form/", icon: "Document.svg" },
            { text: "Pending Tasks", url: "https://ns.namaservices.om/Runtime/Runtime/Form/PendingTaskInternal.Form/", icon: "pending.svg" }
        ];
		
        const arabicMenuItems = [
            { text: "لوحة القيادة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/Eservices.NavigationForm/", icon: "InternalDashboard-active.svg" },
            { text: "الطلبات المقدمة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/SubmittedRequestsInternal.Form/", icon: "Document.svg" },
            { text: "المهام المعلقة", url: "https://ns.namaservices.om/RuntimeAR/Runtime/Form/PendingTaskInternal.Form/", icon: "pending.svg" }
        ];
		
        // Select menu items based on language
        const menuItems = isArabic ? arabicMenuItems : englishMenuItems;

        // Create menu items
        createMenuItems(menuItems);

        // Append Sidebar to the Body
        $('body').append(sidebar);
    }
});
