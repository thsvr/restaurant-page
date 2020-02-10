
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
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake</figcaption>
</figure>

<figure>
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake</figcaption>
</figure>

<figure>
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake </figcaption>
</figure>

<figure>
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake</figcaption>
</figure>

<figure>
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake</figcaption>
</figure>

<figure>
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake </figcaption>
</figure>

<figure>
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake</figcaption>
</figure>

<figure>
<img src='./img/img2.jpg' alt= 'cake' class="menu-img"></img>
<figcaption>Cup Cake</figcaption>
</figure>
</div>
`;
  };
  return {
    renderMenuPage,
  };
})();

export default Menu;
