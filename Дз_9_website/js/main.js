document.querySelector('.button_mobile').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.header_top').classList.toggle('active');
}