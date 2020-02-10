
const Menu = (() => {
  const renderMenuPage = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = `<p> Menu content not done yet.</p>
<div class='d-flex row'>
<figure>
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake </figcaption>
</figure>

<figure>
<img src='./img/img3.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Chocotale Dunnts</figcaption>
</figure>

<figure>
<img src='./img/img4.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>White Cake with Caramel</figcaption>
</figure>

<figure>
<img src='./img/img5.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cake with White Cream</figcaption>
</figure>

<figure>
<img src='./img/img6.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>White Chocolate Truffle and two Mousses with mixed Chocolates</figcaption>
</figure>

<figure>
<img src='./img/img7.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Hot Mousse Chocolate</figcaption>
</figure>

<figure>
<img src='./img/img8.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Chocolate lollipop</figcaption>
</figure>

<figure>
<img src='./img/img9.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Chocolate Croissant </figcaption>
</figure>

<figure>
<img src='./img/img10.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Swiss Chocolate between two slices of Chocolate Cake</figcaption>
</figure>

<figure>
<img src='./img/img11.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Hot Chocolate with Marshmallows</figcaption>
</figure>

<figure>
<img src='./img/img12.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Chocolate Mousse with sweet pomegranete</figcaption>
</figure>

<figure>
<img src='./img/img13.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Bowl with a bunch of Ferrero Rocher</figcaption>
</figure>
</div>
`;
  };
  return {
    renderMenuPage,
  };
})();

export default Menu;
