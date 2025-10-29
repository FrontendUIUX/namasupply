 
/* add css to diff between external and internal */
 
 
 
document.addEventListener("DOMContentLoaded", function () {
    const urlPath = window.location.pathname;

    // Special forms check (higher priority)
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
        if (window.location.href.includes("Runtime/Runtime/Form/") ||  window.location.href.includes("RuntimeAR/Runtime/Form/")) {
            // Internal
            document.documentElement.style.setProperty('--main-color', '#123756');
        } else {
            // External
            document.documentElement.style.setProperty('--main-color', '#e62b37');
        }

    } else if (
        window.location.href.includes("State=Review%20Customer%20request") || // create profile
        window.location.href.includes("state=Review%20Customer%20request") || // create profile
        window.location.href.includes("State=Backend") || // update profile
        window.location.href.includes("state=Backend") || // update profile        
        window.location.href.includes("state=Review")  || // CDU
        window.location.href.includes("State=Review")    // CDU
    ) {
        // Internal
        document.documentElement.style.setProperty('--main-color', '#123756');
    } else {
        // External
        document.documentElement.style.setProperty('--main-color', '#e62b37');
    }
});

 
 