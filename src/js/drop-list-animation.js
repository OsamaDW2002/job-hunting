const icon= document.querySelector('.drop-list-icon');
const dropList = document.querySelector('.drop-list');

icon.addEventListener('click', ()=>{
   setTimeout(()=> {
      dropList.classList.remove('hidden');
   },300);
});
document.addEventListener('click', (event)=> {
   if(!dropList.contains(event.target)){
      dropList.classList.add('hidden');
   }
});
