'use strict';

function typeWriter(elementEl){
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML + letter), 22 +i);
    });
    
    setInterval(() => typeWriter(elementEl), 1000);
}
