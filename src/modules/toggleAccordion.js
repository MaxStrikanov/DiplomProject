'use strict'

const accordionToggle = () => {
    
    const accordionGroup = document.querySelectorAll('.panel-group');
    const accordionHead = document.querySelectorAll('.panel-heading');
    const accordionBody = document.querySelectorAll('.collapse');
    
    const accordionContent = (index) => {
        
      for( let i = 0; i < accordionHead.length; i++){
          
        if (index === i) accordionBody[i].classList.toggle('in');
      }
    }

    accordionGroup.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
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
    
};
 
export default accordionToggle;