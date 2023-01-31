// Show Menú

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Valida que las variables existen.
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // Agregamos la clase show-menu al div con la clase nav__menu
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Quitar Menú Mobile.

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Cuando clickeamos en cada nav__link, quitamos la clase show-menu 
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Secciones scrolleables Link Activo

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Scrollear hacia arriba
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // Cuando el scroll es mas alto que 560 la altura del viewport, suma la clase show-scroll al tag a con la clase scroll-top.
  if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// Modo Oscuro
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Tema previamente seleccionado (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que la interfaz tiene a través de la validación de la clase de modo oscuro.
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Validamos si el usuario previamente elige un tema.
if (selectedTheme) {
  // Si la validación está completa, preguntamos cuál fue el problema para saber si activamos o desactivamos el modo oscuro.
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activamos / desactivamos el tema manualmente con el botón.
themeButton.addEventListener('click', () => {
    // Agregar o remover el ícono / oscuro.
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Guardamos el tema y el ícono actual que el usuario haya elegido.
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Reducción de tamaño

// Cambiar el tamaño cuando el CV este descargado

// Generar PDF
// Area de PDF generado

// Html2pdf options