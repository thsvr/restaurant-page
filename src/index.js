import './style.css';
import Homepage from './components/homepage';
import Menu from './components/menu';
import Location from './components/location';
import Contact from './components/contact';


const render = () => {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');
  navbar.classList.add('bg-rose');
  navbar.classList.add('navbar-expand-lg');

  const ul = document.createElement('ul');
  ul.classList.add('navbar-nav');
  ul.classList.add('tabs');
  navbar.appendChild(ul);

  const li1 = document.createElement('li');
  li1.setAttribute('id', 'homepage');
  li1.classList.add('nav-item');
  li1.classList.add('navbar-brand');
  li1.classList.add('logo-text');
  li1.classList.add('mx-5');
  li1.append('Chocolat Suisse');
  ul.appendChild(li1);

  const li2 = document.createElement('li');
  li2.setAttribute('id', 'menu');
  li2.classList.add('nav-item');
  li2.classList.add('tablink');
  li2.classList.add('nav-link');
  li2.classList.add('nav-text');
  li2.classList.add('ml-5');
  li2.classList.add('mr-4');
  li2.classList.add('text-navbar');
  li2.append('Menu');
  ul.appendChild(li2);

  const li3 = document.createElement('li');
  li3.setAttribute('id', 'location');
  li3.classList.add('nav-item');
  li3.classList.add('tablink');
  li3.classList.add('nav-link');
  li3.classList.add('nav-text');
  li3.classList.add('ml-5');
  li3.classList.add('text-navbar');
  li3.append('Location');
  ul.appendChild(li3);

  const li4 = document.createElement('li');
  li4.setAttribute('id', 'contact');
  li4.classList.add('nav-item');
  li4.classList.add('tablink');
  li4.classList.add('nav-link');
  li4.classList.add('nav-text');
  li4.classList.add('ml-5');
  li4.classList.add('text-navbar');
  li4.append('Contact US');
  ul.appendChild(li4);

  const footer = document.createElement('footer');
  footer.classList.add('social-media');

  const divFooter = document.createElement('div');
  divFooter.classList.add('icons-div');
  // divFooter.classList.add('d-flex');
  // divFooter.classList.add('justify-content-center');
  

  const footerIcon = document.createElement('i');
  footerIcon.classList.add('fab');
  footerIcon.classList.add('fa-twitter');
  footerIcon.classList.add('social-nav');
  divFooter.append(footerIcon);
  footer.appendChild(divFooter);

  const footerIcon2 = document.createElement('i');
  footerIcon2.classList.add('fab');
  footerIcon2.classList.add('fa-instagram');
  footerIcon2.classList.add('social-nav');
  divFooter.append(footerIcon2);
  footer.appendChild(divFooter);

  const footerIcon3 = document.createElement('i');
  footerIcon3.classList.add('fab');
  footerIcon3.classList.add('fa-facebook');
  footerIcon3.classList.add('social-nav');
  divFooter.append(footerIcon3);
  footer.appendChild(divFooter);

  const footerIcon4 = document.createElement('i');
  footerIcon4.classList.add('fab');
  footerIcon4.classList.add('fa-whatsapp');
  footerIcon4.classList.add('social-nav');
  divFooter.append(footerIcon4);
  footer.appendChild(divFooter);

  const footerIcon5 = document.createElement('i');
  footerIcon5.classList.add('fab');
  footerIcon5.classList.add('fa-telegram-plane');
  footerIcon5.classList.add('social-nav');
  divFooter.append(footerIcon5);
  footer.appendChild(divFooter);

  const divFooter2 = document.createElement('div');
  divFooter2.classList.add('phrase-div');
  divFooter2.append('Icons made by fontawesome.com');
  footer.appendChild(divFooter2);

  content.appendChild(navbar);
  content.appendChild(footer);

  const tabContent = document.createElement('div');
  tabContent.setAttribute('id', 'tabContent');
  content.appendChild(tabContent);


  [...document.getElementsByClassName('nav-item')].forEach(li => {
    li.addEventListener('click', () => {
      if (li.id === 'homepage') {
        Homepage.renderHomepage();
      } else if (li.id === 'menu') {
        Menu.renderMenuPage();
      } else if (li.id === 'location') {
        Location.renderLocation();
      } else if (li.id === 'contact') {
        Contact.renderContact();
      }
    });
  });
  Homepage.renderHomepage();
};

render();
