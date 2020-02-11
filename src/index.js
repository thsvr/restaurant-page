import './style.css';
import Homepage from './components/homepage';
import Menu from './components/menu';
import Location from './components/location';
import Contact from './components/contact';


const render = () => {
  document.getElementById('content').innerHTML = `<nav class="navbar navbar-expand-lg bg-rose">
  <ul class="navbar-nav tabs">
      <li class="nav-item" id="homepage">
          <a class="navbar-brand logo-text mx-5" href="#">Chocolat Suisse</a>
      </li>
      <li class="nav-item tablink" id="menu">
          <a class="nav-link nav-text ml-5 mr-4 text-navbar" href="#">Menu</a>
      </li>
      <li class="nav-item tablink" id="location">
          <a class="nav-link nav-text text-navbar mx-4 " href="#">Location</a>
      </li>
      <li class="nav-item tablink" id="contact">
          <a class="nav-link nav-text  text-navbar mx-4" href="#">Contact us </a>
      </li>
  </ul>
</nav>

<footer class="social-media ">
  <div class='d-flex justify-content-center'>
    <i class="fab fa-twitter social-nav px-2 " aria-hidden="true"></i>
    <i class="fab fa-instagram social-nav" aria-hidden="true"></i>
  </div>
  <div class='d-flex justify-content-end credits'/>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</footer>
<div id="tabContent"></div>`;
  Homepage.renderHomepage();
};

render();

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
