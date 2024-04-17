(()=>{
  const trigger = document.querySelector('.mmz .custom-related__showmore');
  const list = document.querySelector('.mmz .custom-related__list');
  if(trigger === null || list === null) return;
  trigger.addEventListener('click',()=>{
    list.classList.toggle('show');
    list.classList.contains('show') ? trigger.innerHTML = trigger.getAttribute('data-hide-lang') : trigger.innerHTML = trigger.getAttribute('data-show-lang');
  });
})();