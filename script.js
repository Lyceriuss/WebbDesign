document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('navToggle');
    var navList = document.getElementById('navList');

    navToggle.addEventListener('click', function() {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });
});