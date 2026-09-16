const btn=document.querySelector('.menu-button');
const links=document.querySelector('.nav-links');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}

// Maastricht University affiliation in the footer.
const footerGrid=document.querySelector('.footer-grid');
if(footerGrid&&!document.querySelector('.um-brand')){
  const um=document.createElement('a');
  um.className='um-brand';
  um.href='https://www.maastrichtuniversity.nl/';
  um.target='_blank';
  um.rel='noopener';
  um.setAttribute('aria-label','Maastricht University');
  um.innerHTML='<img src="https://www.maastrichtuniversity.nl/sites/default/files/styles/780x520/public/2024-05/438x490m-private-content_formfield__files_media__39825__Mdij5L.png?itok=tNTFLkeA" alt="Maastricht University logo" loading="lazy" onerror="this.style.display=\'none\'"><span>Maastricht University</span>';
  footerGrid.appendChild(um);
}
