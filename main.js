// Select rooms highlight toggle
const rooms = document.getElementById('rooms');
rooms.addEventListener('click', (e) => {
    const roomDiv = e.target.closest('.room');
    if (!roomDiv) return;
    // Remove previous selections
    rooms.querySelectorAll('.room').forEach(r => r.classList.remove('selected'));
    roomDiv.classList.add('selected');
});

document.querySelectorAll('.bottom-nav .nav-item').forEach((navItem) => {
    navItem.addEventListener('click', function (e) {
        e.preventDefault(); // Optional: prevent page reload on anchor click
        // Remove active from all nav items
        document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
            item.classList.remove('active');
        });
        // Add active to the clicked nav item
        this.classList.add('active');
    });
});
