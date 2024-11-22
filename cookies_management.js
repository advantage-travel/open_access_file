
// Function to get query string parameters
function getQueryParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
    return params;
}

// Function to set cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to store all query parameters in cookies
function storeQueryParamsInCookies() {
    const params = getQueryParams();
    
    // Store each parameter in a cookie (setting expiry to 30 days)
    for (const [key, value] of Object.entries(params)) {
        setCookie(key, value, 30);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    storeQueryParamsInCookies();
});

