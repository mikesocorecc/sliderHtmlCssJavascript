
    const sliders = [...document.querySelectorAll('.slider__body')];
    
    let containerIndicador = document.querySelector(".slider__controls"); 
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    for (let index = 1; index <= sliders.length; index++) {
        if(index == 1){
            containerIndicador.insertAdjacentHTML('beforeend', `<button class="slider__indicator active__slider" data-id="${index}"> </button>`)
        }else{
            containerIndicador.insertAdjacentHTML('beforeend', `<button class="slider__indicator" data-id="${index}"> </button>`)
        }
    }
    const indicadoresArray = [...document.querySelectorAll('.slider__indicator')];
    const buttonsIndicator = document.querySelectorAll('.slider__indicator')
    buttonsIndicator.forEach(function(currentBtn){
      currentBtn.addEventListener('click', changeSlider)
    })
    function changeSlider(e) {
    
        const actualSlider =  Number (  document.querySelector('.slider__body--show').dataset.id )
        const newSlider = Number ( e.target.dataset.id );
        indicadoresArray[actualSlider-1].classList.toggle('active__slider');
        sliders[actualSlider-1].classList.toggle('slider__body--show'); //quito clase

        indicadoresArray[newSlider-1].classList.toggle('active__slider');
        sliders[newSlider-1].classList.toggle('slider__body--show'); //agrego clase 
    }

    setInterval(function () { 
        document.getElementById("next").click();
    }, 5000);

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change){
        const currentElement = Number ( document.querySelector('.slider__body--show').dataset.id );
        value = currentElement;
        value+= change;

    
        if(value == 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[currentElement-1].classList.toggle('slider__body--show');
        indicadoresArray[currentElement-1].classList.toggle('active__slider');
        sliders[value-1].classList.toggle('slider__body--show');
        indicadoresArray[value-1].classList.toggle('active__slider');
    }
