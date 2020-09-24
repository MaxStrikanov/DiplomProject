'use strict'

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

export default showHiddenBlock;