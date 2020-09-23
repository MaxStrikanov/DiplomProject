const popupCall = () => {

  const popup = document.querySelector('.popup-call');
  const callBtn = document.querySelectorAll('.call-btn');
  

  callBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
      popup.style.display = 'block';  
    });
  });

  popup.addEventListener('click', (e) => {

    let target = e.target;

    if(target.classList.contains('popup-close')){
      popup.style.display = 'none';

    } else {

      target = target.closest('.popup-content')
        if(!target){
          popup.style.display = 'none'
        }
    }
       
  });

};

const popupDiscount = () => {
  const discountBtn = document.querySelectorAll('.discount-btn');
  const popup = document.querySelector('.popup-discount');
  
  discountBtn.forEach( elem => elem.addEventListener('click', () => {
      popup.style.display = 'block';
  }));

  popup.addEventListener('click', (e) => {

      let target = e.target;

      if(target.classList.contains('popup-close')){
        popup.style.display = 'none';

      } else {

        target = target.closest('.popup-content')
          if(!target){
            popup.style.display = 'none'
          }
      }
         
    });

}

export {popupCall, popupDiscount};