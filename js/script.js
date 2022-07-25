const doc = document.querySelector('.wrapper');
document.addEventListener('click', function (e) {
    const click = e.target;
    if (click.closest('.menu__burger')) {
        doc.classList.toggle('active');

    }
})
