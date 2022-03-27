const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

const toggleMenu = () => {
  navMenu.classList.toggle('show');
  body.classList.toggle('no-scroll');
  navToggle.classList.toggle('close');
}

navToggle.addEventListener('click', () => toggleMenu());

const sectionLinks = document.querySelectorAll('.nav__link');

// Close mobile menu when links are clicked. Footer links are excluded from this behaviour.
sectionLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (!navToggle.classList.contains('close')) return;
    toggleMenu();
  })
})


// Logic for dot navigation.
const dotMenu = document.querySelectorAll('.nav__dots ul li a'); 

dotMenu.forEach(item => {
  item.addEventListener('click', e => {
    dotMenu.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  })
})

const sections = document.querySelectorAll('section[id]');
const header = document.querySelector("header");
const header_height = header.offsetHeight;

const add_menu_class_on_scroll = () => header.classList.add("menu-shadow");
const remove_menu_class_on_scroll = () => header.classList.remove("menu-shadow");

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  scrollY >= header_height ? add_menu_class_on_scroll() : remove_menu_class_on_scroll(); 

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 40,
          sectionId = current.getAttribute('id');

    if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
      document.querySelector('.nav__dots a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__dots a[href*=' + sectionId + ']').classList.remove('active');
    }
  })
}
