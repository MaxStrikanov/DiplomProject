'use strict'

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

popupCall()

const popupDiscount = () => {
    const discountBtn = document.querySelectorAll('.discount-btn');
    const popup = document.querySelector('.popup-discount');
    
    discountBtn.forEach( elem => elem.addEventListener( 'click', () => {
        popup.style.display = 'block';
    }));

    popup.addEventListener('click', (e) => {

        let target = e.target;
  
        if ( target.classList.contains( 'popup-close' )){
          popup.style.display = 'none';
  
        } else {
  
          target = target.closest( '.popup-content' )
            if(!target){
              popup.style.display = 'none'
            }
        }
           
      });

}
popupDiscount()

const popupCheck = () => {
    const checkBtn = document.querySelector('.check-btn');
    const popup = document.querySelector('.popup-check');
    
    checkBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    popup.addEventListener( 'click', (e) => {
        let target = e.target;

        if ( target.classList.contains( 'popup-close' ) ){
            popup.style.display = 'none';
        } else {
            target = target.closest( 'popup-close' )
            if ( !target ){
                popup.style.display = 'none';
            }
        }
    });

}
popupCheck()

// const accordionToggle = (function() {
//     let accordionToggles = document.querySelectorAll('.collapsed');
//     console.log(accordionToggles);
    
// })();

// const accordionToggle = () => {
//     const accordionGroup = document.querySelector('.panel-group');
//     const accordionPanel = document.querySelectorAll('.panel');
//     const accordionBody = document.querySelectorAll('.collapse');
    
//     console.log(accordionBody);
    
//     accordionPanel.forEach((elem) => {
//         elem.addEventListener('click', (e) => {
//             let target = e.target;
            
//             console.log(target.classList.contains( 'collapse' ))

//             // target = target.closest( 'collapse' )
//             console.log(target);
//             if ( target ){
//                 accordionBody.classList.add('in')
//             } else {
//                 accordionBody.classList.remove('in')
//             }
        
//         })
            
        
//     })
// }

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

    // accordionGroup.forEach((item) => {
    //     item.addEventListener('click', (e) => {
            
    //         let target = e.target;             
    //         target = target.closest( '.panel-heading' );
            
    //         if ( target ){
    //             accordionHead.forEach( (item, i ) => {
    //                 if(item === target){
    //                     accordionContent(i);
    //                 }
    //             }); 
    //         } 
    //     });
    // })

    accordionGroup.forEach((item) => {
        item.addEventListener('click', function(e) {
            
            let target = e.target;             
            target = target.closest( '.construct-btn' );    
            console.log(target);
            
            if ( target ){
                accordionHead.forEach( (item, i ) => {
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

//   var a=e=>{
//       const t=e.getAttribute("aria-controls"),
//       n=e.getAttribute("data-parent"),
//       o=document.querySelector(n).querySelectorAll(".panel-collapse"),
//       l=document.getElementById(t);
//       o.forEach(e=>{
//           e.id!=l && e.classList.remove("in")}),
//           l.classList.add("in")};