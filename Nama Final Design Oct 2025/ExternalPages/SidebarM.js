document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;
    const fullUrl = window.location.href.toLowerCase();

    // Adjust form layout if on a specific page
    if (urlPath === '/Public/Runtime/Form.aspx') {
        const form = document.querySelector('.theme-entry .runtime-form');
        if (form) {
            form.style.width = '100%';
            form.style.marginLeft = '0';
        }
    }

    // Exit for specific runtime page
    if (urlPath === "/Runtime/Runtime/Form.aspx") return;

    // Ensure jQuery is available
    if (typeof jQuery === "undefined") {
        console.error("jQuery is required for this script.");
        return;
    }

    // Determine language based on URL
    const isArabic = fullUrl.includes("publicar");

    // Create Sidebar Container
        const sidebar = $('<div id="sidebar" class="sidebar"></div>');

        // Add Logo Section
        const logoContainer = $('<div class="sidebar-logo-container"></div>');
        const logoLink = $('<a>');
        // const logoImage = $('<img>', {
        //     src: 'https://ns.namaservices.om/Style/logo Nama supply .png',
        //     alt: 'Company Logo',
        //     class: 'sidebar-logo'
        // });
        const logoImage = $('<img>', {
            src: 'https://ns.namaservices.om/Style/logo.png',
            alt: 'Company Logo',
            class: 'sidebar-logo'
        });
        // Determine the base URL and path
        const baseUrl = 'https://ns.namaservices.om/';
        const path = 'Runtime/Form/LCTS.EservicesHub.Form/';

        // Set the appropriate language segment
        const languageSegment = isArabic ? 'PublicAR' : 'Public';

        // Set the href attribute dynamically
        const href = `${baseUrl}${languageSegment}/${path}`;
        logoLink.attr('href', href);

        // Append the logo image to the link, then append to the logo container and sidebar
        logoLink.append(logoImage);
        logoContainer.append(logoLink);
        sidebar.append(logoContainer);

    // Sidebar Menu Section Title
    sidebar.append(`<div class="sidebar-section">${isArabic ? "القائمة" : "MENU"}</div>`);

    // Menu Items
    const englishMenuItems = [  
        { text: "Dashboard", url: "/Public/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard.svg" },
        { text: "Submitted Requests", url: "/Public/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
        { text: "Pending Tasks", url: "/Public/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
        { text: "My Accounts", url: "/Public/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }
    ];
    const arabicMenuItems = [  
        { text: "لوحة القيادة", url: "/PublicAR/Runtime/Form/LCTS.EservicesHub.Form/", icon: "Dashboard.svg" },
        { text: "الطلبات المقدمة", url: "/PublicAR/Runtime/Form/External.SubmittedRequests.Form/", icon: "Document.svg" },
        { text: "المهام المعلقة", url: "/PublicAR/Runtime/Form/External.PendingTasks.Form/", icon: "pending.svg" },
        { text: "حساباتي", url: "/PublicAR/Runtime/Form/External.UserAccounts.Form/", icon: "account 1.svg" }
    ];

    const menuItems = isArabic ? arabicMenuItems : englishMenuItems;

    // Loop through each item and create menu links
    menuItems.forEach(item => {
        const fullItemUrl = "https://ns.namaservices.om" + item.url;

        const link = $('<a>').attr('href', fullItemUrl).addClass('sidebar-link');

        // Check if this is the active link
        const isActive = window.location.href.includes(item.url);
        if (isActive) {
            link.addClass('active');
        }

        // Adjust icon if active
        const iconName = isActive
            ? item.icon.replace(/\.svg$/, '-active.svg')
            : item.icon;

        const iconElement = $('<img>')
            .attr('src', `https://ns.namaservices.om/Style/logos/${iconName}`)
            .addClass('sidebar-icon');

        link.append(iconElement).append($('<span>').text(item.text));
        sidebar.append(link);
    });

    // Others Section
    sidebar.append(`<div class="sidebar-section">${isArabic ? "أخرى" : "OTHERS"}</div>`);
    const helpLink = $('<a href="#" class="sidebar-link"></a>');
    const helpIcon = $('<img src="https://ns.namaservices.om/Style/logos/help.svg" class="sidebar-icon" alt="Help">');
    helpLink.append(helpIcon).append($('<span>').text(isArabic ? "مساعدة" : "Help"));
    sidebar.append(helpLink);

    // Append sidebar to body
    $('body').append(sidebar);
});
