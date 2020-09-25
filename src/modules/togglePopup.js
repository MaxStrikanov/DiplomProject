'use strict'

function popupClose (e)  {

  let target = e.target;

  if(target.classList.contains('popup-close')){
    this.style.display = 'none';

  } else {

    target = target.closest('.popup-content')
      if(!target){
        this.style.display = 'none'
      }
  }
}

const popupCall = () => {

    const popup = document.querySelector('.popup-call');
    const callBtn = document.querySelectorAll('.call-btn');
    

    callBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
        popup.style.display = 'block';  
      });
    });

    popup.addEventListener('click', popupClose);

};



const popupDiscount = () => {
    const discountBtn = document.querySelectorAll('.discount-btn');
    const popup = document.querySelector('.popup-discount');
    
    discountBtn.forEach( elem => elem.addEventListener( 'click', () => {
        popup.style.display = 'block';
    }));

    popup.addEventListener('click', popupClose);

}

const popupCheck = () => {
    const checkBtn = document.querySelector('.check-btn');
    const popup = document.querySelector('.popup-check');
    
    checkBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    popup.addEventListener( 'click', popupClose);

}

const popupConsultation = () => {
  const consultationBtn =document.querySelector('.consultation-btn');
  const popup = document.querySelector('.popup-consultation');
  const userQuest = document.querySelector('input[name="user_quest"]');
  
  consultationBtn.addEventListener('click', (e) => {
    if (userQuest.value === ''){
      userQuest.style.border = 'solid red';
    } else {
        popup.style.display = 'block';
        userQuest.style.border = '';
      }
  }) 
 
  popup.addEventListener('click', popupClose);

}
;

export {popupCall, popupDiscount, popupCheck, popupConsultation};