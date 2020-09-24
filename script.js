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

popupCall()

const popupDiscount = () => {
    const discountBtn = document.querySelectorAll('.discount-btn');
    const popup = document.querySelector('.popup-discount');
    
    discountBtn.forEach( elem => elem.addEventListener( 'click', () => {
        popup.style.display = 'block';
    }));

    popup.addEventListener('click', popupClose);

}
popupDiscount()

const popupCheck = () => {
    const checkBtn = document.querySelector('.check-btn');
    const popup = document.querySelector('.popup-check');
    
    checkBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    popup.addEventListener( 'click', popupClose);

}
popupCheck()

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
popupConsultation();

const accordionToggle = () => {
    
  const accordionGroup = document.querySelectorAll('.panel-group');
  const accordionHead = document.querySelectorAll('.panel-heading');
  const accordionBody = document.querySelectorAll('.collapse');
  const constructBtn = document.querySelectorAll('.construct-btn');
  
  
  const accordionContent = (index) => {
      
    for( let i = 0; i < accordionHead.length; i++){
      
      index === i ? accordionBody[i].classList.add('in'):
                    accordionBody[i].classList.remove('in');
    }
  }

  accordionGroup.forEach((item) => {
      item.addEventListener('click', (e) => {
          
          let target = e.target;             
          target = target.closest( '.panel-heading' );
          
          if ( target ){
              accordionHead.forEach( (item, i ) => {
                  if(item === target){
                      accordionContent(i);
                  }
              }); 
          } 
      });
  })

  accordionGroup.forEach((item) => {
      item.addEventListener('click', function(e) {
          
          let target = e.target;             
          target = target.closest( '.construct-btn' );    
          
          if ( target ){
            constructBtn.forEach( (item, i ) => {
                  if(item === target){
                      console.log(item);
                      accordionContent(i);
                  }
              }); 
          } 
      });
  })
 
};


accordionToggle()

const calc = (price = 10000) => {
  const check = document.querySelectorAll('input[type="checkbox"]')
  const switchOne = document.getElementById('myonoffswitch');
  const switchTwo = document.getElementById('myonoffswitch-two');
  const selectBox = document.querySelectorAll('.select-box');
  const titleText = document.querySelectorAll('.title-text')[1];
  const downList = document.querySelectorAll('.form-control');
  const calcResult = document.getElementById('calc-result');

  console.log(check);
  let selectBoxArr = [...selectBox].slice(-2);
  
  const countSum = () => {
    let diametr1 = +downList[0].options[downList[0].selectedIndex].value;
    let diametr2 = +downList[2].options[downList[2].selectedIndex].value;
    let numberRing1 = +downList[1].options[downList[1].selectedIndex].value;
    let numberRing2 = +downList[3].options[downList[3].selectedIndex].value;
    let bottomWell = 0

    const checked = () => {
      if(switchOne.checked){
        titleText.style.display = 'none';
        selectBoxArr.forEach(item => item.style.display = 'none');
        diametr2 = 0;
        numberRing2 = 0;
        
      } else {
        titleText.style.display = 'inline-block';
        selectBoxArr.forEach(item => item.style.display = 'inline-block');
      }
      if (!switchTwo.checked){
        bottomWell = 0.2 
      }
    }
    checked()

    switchOne.addEventListener('change', checked);

    let total = price * diametr1 + (price * numberRing1) + (price * diametr2) + (price * numberRing2) + (price * bottomWell);
    
    calcResult.value =  total;
  } 

    document.addEventListener('change', (e) => {
    let target = e.target;

    if(target.matches('select') || target.matches('input')){
        countSum()
      }
    });
      
    
}

calc(10000)




const showHiddenBlock = () => {
    const addSentenceBtn = document.querySelector('.add-sentence-btn');
    const row = document.querySelectorAll('.row > div');

    addSentenceBtn.addEventListener('click', () => {
       
        addSentenceBtn.classList.add('hidden');
        row.forEach((elem) => {
          elem.classList.remove('hidden');
        });
    });
}
showHiddenBlock()

const sendForm = () => {
  const errorMessage = 'Что-то пошло не так!';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  const statusMessage = document.createElement('div');
  const preloader = document.querySelector('.preloader');
  const forms = document.querySelectorAll('form');
  const onlyNumberInputs = document.querySelectorAll('.phone-user');
  const onlyTextInputs = document.querySelectorAll('input[placeholder="Ваше имя"]');

  statusMessage.style.cssText = 'font-size: 20px; color: #000;';
  onlyNumberInputs.forEach((item) =>{

    item.addEventListener('input', function(){
      this.value = this.value.replace(/[^0-9\+]/, '');
       
    })
  });
onlyTextInputs.forEach((item) =>{
  item.addEventListener('input', function(){
    this.value = this.value.replace(/[^А-я\s]/, '');
       
  })
});

  
forms.forEach(function(item){
  item.addEventListener('submit', send )
});

  function send (event) {

    event.preventDefault();
    const formData = new FormData(this);
    const _this = this;
    let json = {};
    let state = null;

    _this.querySelectorAll('input').forEach((item) => {
      
      if(item.value === ''){
        item.style.border = 'solid red'
       return state = false;
        
      } else {
        item.style.border = '';
        return state = true;
        
      }
    })
    
    if(state){ 
      
      this.appendChild(statusMessage);
      preloader.style.display = 'block';
      statusMessage.appendChild(preloader)
      

    formData.forEach((value, key) => {
      json[key] = value;
    })

    postData(json, _this)
     .then((response) => {
        if ( response.status !== 200 ){
          throw new Error( 'status network not 200' );
        }
          statusMessage.textContent = successMessage;
          setTimeout(() => {statusMessage.style.display = 'none'}, 3000 ); 
          _this.querySelectorAll('input').forEach(item => {
            item.value = '';
            item.style.border = '';
          });
       
     })
     .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
     })
    }
  }

  const postData = (json,  _this) => {
    return fetch('server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    });
  }
};

sendForm();