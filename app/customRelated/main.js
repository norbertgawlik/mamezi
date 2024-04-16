(()=>{
    const trigger = document.querySelector('.mmz .custom-related__showmore');
    const list = document.querySelector('.mmz .custom-related__list');
    if(trigger === null || list === null) return;
    trigger.addEventListener('click',()=>{
      list.classList.toggle('show');
    });
})();