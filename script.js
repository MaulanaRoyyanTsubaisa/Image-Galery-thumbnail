const container = document.querySelector('.container-sm');
const jumbo = document.querySelector('.jumbo');
const thumbnails = document.querySelectorAll('.thumbnail');

container.addEventListener('click', function(e) {

    // cek apakah yang di klik thumbnail atau bukan
    if( e.target.className == 'thumbnail') {

        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 100)

        thumbnails.forEach(function(thumbnail) {
            thumbnail.className = 'thumbnail'
        })
        e.target.classList.add('active');

    }

});