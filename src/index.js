import './style.css'
import Homepage from './components/homepage';
import Menu from './components/menu';
import Location from './components/location';
import Contact from './components/contact';


const render = () => {
  document.getElementById('content').innerHTML = `<nav class="navbar navbar-expand-lg bg-rose">
  <ul class="navbar-nav tabs">
      <li class="nav-item" id="homepage">
          <a class="navbar-brand logo-text" href="#">Chocolat Suisse</a>
      </li>
      <li class="nav-item tablink" id="menu">
          <a class="nav-link nav-text" href="#">Menu tab1</a>
      </li>
      <li class="nav-item tablink" id="location">
          <a class="nav-link nav-text" href="#">Location tab2</a>
      </li>
      <li class="nav-item tablink" id="contact">
          <a class="nav-link nav-text" href="#">Contact us tab3</a>
      </li>
  </ul>
</nav>`;

  document.getElementById('content').innerHTML += '<div id="tabContent"></div>';
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
