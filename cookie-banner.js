const cookieBannerConfig = {
    cookieBanner: {
        enabled: true,
        message: "We use cookies to personalize content, analyze traffic, and enhance security. Choose your preferences below.",
        buttons: {
            acceptAll: { text: "Accept All", action: "setCookieConsent('all')" },
            rejectAll: { text: "Reject All", action: "setCookieConsent('none')" },
            customize: { text: "Customize Preferences", action: "openPreferences()" }
        },
        categories: {
            necessary: { text: "Essential Cookies", description: "Required for site functionality.", enabled: true },
            analytics: { text: "Analytics Cookies", description: "Help us understand how visitors interact with the site.", enabled: false },
            marketing: { text: "Marketing Cookies", description: "Used for advertising and personalized content.", enabled: false }
        },
        appearance: { position: "bottom", theme: "light", fontSize: "14px" }
    }
};

function setCookieConsent(choice) {
    localStorage.setItem("cookieConsent", choice);
    alert(`You selected: ${choice}`);
}

function openPreferences() {
    let categories = cookieBannerConfig.cookieBanner.categories;
    let message = "Customize Cookie Preferences:\n";
    for (let key in categories) {
        message += `${categories[key].text}: ${categories[key].description}\n`;
    }
    alert(message);
}

// Display the banner
if (cookieBannerConfig.cookieBanner.enabled) {
    document.body.innerHTML += `
        <div id="cookie-banner" style="position:${cookieBannerConfig.cookieBanner.appearance.position}; font-size:${cookieBannerConfig.cookieBanner.appearance.fontSize}; background:#f4f4f4; padding:10px; text-align:center;">
            ${cookieBannerConfig.cookieBanner.message}
            <button onclick="${cookieBannerConfig.cookieBanner.buttons.acceptAll.action}">${cookieBannerConfig.cookieBanner.buttons.acceptAll.text}</button>
            <button onclick="${cookieBannerConfig.cookieBanner.buttons.rejectAll.action}">${cookieBannerConfig.cookieBanner.buttons.rejectAll.text}</button>
            <button onclick="${cookieBannerConfig.cookieBanner.buttons.customize.action}">${cookieBannerConfig.cookieBanner.buttons.customize.text}</button>
        </div>
    `;
}
