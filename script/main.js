window.addEventListener('DOMContentLoaded', function(){

    const elBody = document.querySelector('body'),
        elNewBox = elBody.querySelector('[class="move-box"]'),
        elContent = elBody.querySelector('[class="content"]');

    elNewBox.posY = 1500;

    elNewBox.style.marginTop = `${elNewBox.posY}px`
    elNewBox.style.width = `${elNewBox.smlWidth}px`;

    window.addEventListener('scroll', function(){

        let triggerPos = window.scrollY + window.innerHeight;

        elNewBox.style.width =`${(triggerPos-elNewBox.posY)*0.15}%`;

        if(elNewBox.offsetWidth >= window.innerWidth - 20){
            elContent.style.opacity = `${((window.scrollY+200)-elNewBox.posY)*0.4}%`;
        }


    })
})