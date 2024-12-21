// Add external CSS links dynamically
const stylesheets = [
    "https://ilovegdps.pages.dev/main.css",
    "https://ilovegdps.pages.dev/fonts.css",
    "https://ilovegdps.pages.dev/nav.css",
    "https://ilovegdps.pages.dev/load.css"
];

stylesheets.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
});

// Set playback rate for bg5
const bg5 = document.getElementById("uwunot");
bg5.playbackRate = 2;

// Array of random texts
const randomTexts = [
    'Why NotNot is so cool?',
    'Sneakers peakers',
    'Idk why I am doing this',
    'Welcome to 733402’s World',
    'Coody',
    'femgram',
    'uwunot',
    'mollopro',
    'thang312',
    'easyicon',
    'moody761',
    'crowny',
    'go touch grass',
    'npqlikeaqua20'
];

// Function to get a random text
function getRandomText() {
    const index = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[index];
}

// Set the random text in the preloader
document.getElementById('random-text').textContent = getRandomText();

// Hide preloader and show main content after 2 seconds
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('slide-out'); // Add slide-out effect
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide preloader
        document.getElementById('main-content').style.display = 'block'; // Show main content

        // Show success message if it exists
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
        }
    }, 500); // Match the duration of the slide-out animation
}, 1000); // Wait for 1 second before hiding the preloader

// Open the selected tab
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Hide all tab contents
    }
    const tablinks = document.getElementsByClassName("navbar a");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block"; // Show the selected tab content
    if (evt.currentTarget.className.includes("dropbtn")) {
        evt.currentTarget.parentNode.querySelector(".dropbtn").className += " active";
    } else {
        evt.currentTarget.className += " active";
    }
}

// Toggle dropdown visibility
function toggleDropdown(event) {
    event.stopPropagation(); // Prevent the click from bubbling up to the document
    const dropdownContent = event.currentTarget.nextElementSibling;
    const isVisible = dropdownContent.style.display === "block";
    const dropdowns = document.getElementsByClassName("dropdown-content");

    // Hide all dropdowns
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
    }

    // If the clicked dropdown was not already visible, show it
    if (!isVisible) {
        dropdownContent.style.display = "block";
    }
}

// Hide all tabs except Home on load
window.onload = () => {
    const tabs = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById('Home').style.display = 'block'; // Show Home tab by default
};

// Hide dropdowns if clicking outside of them
document.addEventListener('click', () => {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
    }
});
