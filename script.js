document.addEventListener('DOMContentLoaded', function () {
    // Toggle navigation for smaller screens
    var navToggle = document.getElementById('navToggle');
    var navList = document.getElementById('navList');

    navToggle.addEventListener('click', function() {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });

    // Highlight the active page in the navigation
    var navItems = document.querySelectorAll('.nav-list li a');
    var currentPath = window.location.pathname.split('/').pop(); // Get only the filename

    navItems.forEach(function(item) {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });
});
