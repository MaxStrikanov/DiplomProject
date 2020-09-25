const calc = (price) => {
    
    const switchOne = document.getElementById('myonoffswitch');
    const switchTwo = document.getElementById('myonoffswitch-two');
    const selectBox = document.querySelectorAll('.select-box');
    const titleText = document.querySelectorAll('.title-text')[1];
    const downList = document.querySelectorAll('.form-control');
    const calcResult = document.getElementById('calc-result');
    const calcData = JSON.parse(localStorage.getItem('calc')) || [];
  
    let selectBoxArr = [...selectBox].slice(-2);
    
    const countSum = () => {
      let diametr1 = +downList[0].options[downList[0].selectedIndex].value;
      let numberRing1 = +downList[1].options[downList[1].selectedIndex].value;
  
      let diametr2 = +downList[2].options[downList[2].selectedIndex].value;
      let numberRing2 = +downList[3].options[downList[3].selectedIndex].value;
  
      let bottomWell = 0;
      let total = 0;
      const checked = () => {
        if(switchOne.checked){
          titleText.style.display = 'none';
          selectBoxArr.forEach(item => item.style.display = 'none');
          diametr2 = 0;
          numberRing2 = 0;
          price = 10000;
          
        } else {
          titleText.style.display = 'inline-block';
          selectBoxArr.forEach(item => item.style.display = 'inline-block');
          price = 15000;
        }
          
      }
      checked()
      switchTwo.checked ? bottomWell = 1.2 : bottomWell = 1.1
      switchOne.addEventListener('change', checked);
  
      total = (price + (price * diametr1) + (price * numberRing1) + (price * diametr2) + (price * numberRing2)) * bottomWell;
  
      calcResult.value =  total;
      localStorage.setItem('todo', JSON.stringify(total))
    } 
  
      document.addEventListener('change', (e) => {
      let target = e.target;
  
      if(target.matches('select') || target.matches('input')){
          countSum()
        }
      });     
      
  }
  
export default calc;