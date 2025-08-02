const sidebar = document.querySelector(".sidebar");
    // Only add button for screens < 992px
    if (window.innerWidth < 992) {
      const toggleButton = document.createElement('button');
      toggleButton.id = 'toggleSidebarBtn';
      toggleButton.textContent = 'Toggle Sidebar';
      document.body.insertBefore(toggleButton, sidebar);

      toggleButton.addEventListener('click', () => {
        if(sidebar){
            sidebar.classList.toggle('collapsed');
            document.body.classList.toggle('sidebarCollapsed');
        }
        
      });
    }