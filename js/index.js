const buttonShow = document.querySelector('.card__show');

buttonShow.addEventListener('click', () => {
    const cardSlide = document.querySelector('.card__slide');
    let height = 0;

    document.querySelector('.show__icon').classList.toggle('show__icon-active');

    if(cardSlide.clientHeight == '0') {
        height = cardSlide.scrollHeight;
    }
    cardSlide.style.height = `${height}px`;
})