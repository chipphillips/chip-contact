const viewer=document.querySelector('#image-viewer');
let opener=null;
for(const trigger of document.querySelectorAll('#comparison-open,#enlarge-button'))trigger.addEventListener('click',event=>{event.preventDefault();opener=trigger;viewer.showModal();document.documentElement.classList.add('viewer-open');});
document.querySelector('#viewer-close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target!==viewer)return;const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();});
viewer.addEventListener('close',()=>{document.documentElement.classList.remove('viewer-open');opener?.focus({preventScroll:true});});
viewer.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const items=[...viewer.querySelectorAll('button,a[href],[tabindex="0"]')];const first=items[0],last=items.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
