const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[4].classList.add('ativo');

if(tabMenu.length && tabContent.length);
function activeTab(index){
  tabContent.forEach((section) => {
section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}
tabMenu.forEach((itemMenu, index) =>{
itemMenu.addEventListener('click', () =>{
  activeTab(index);
})
});

//scroll
function scrollSuave(){

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scroolToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  }


  linksInternos.forEach((link) =>{
    link.addEventListener('click', scroolToSection);
  })
}
scrollSuave();

// animação scrool

function animacaoScroll(){
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.5
if(sections.length){



function animaScroll(){
  sections.forEach((section) =>{
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if(isSectionVisible){
      section.classList.add('ativo');
    }
  })
}
animaScroll();
window.addEventListener('scroll', animaScroll);
}
};
animacaoScroll();