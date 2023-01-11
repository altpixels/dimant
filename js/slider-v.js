(function(){
    const sliders = [...document.querySelectorAll('.c-qualities-v__slider-item')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.c-qualities-v__slider-item--show').dataset.id);

        value = currentElement;
        value+= change;
        if( value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('c-qualities-v__slider-item--show');
        sliders[value-1].classList.toggle('c-qualities-v__slider-item--show');
    }


})()