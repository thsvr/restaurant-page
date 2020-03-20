const Menu = (() => {
  const renderMenuPage = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = '';

    const menu = document.createElement('article');
    // menu.classList.add('d-flex');
    menu.classList.add('menu-container-g');
    // menu.classList.add('row');

    const fig = document.createElement('figure');
    fig.classList.add('item-g');
    const img = document.createElement('img');
    img.classList.add('menu-img');
    img.setAttribute('src', './img/img2.jpg');
    fig.appendChild(img);
    menu.appendChild(fig);
    const figcaption = document.createElement('figcaption');
    figcaption.classList.add('fig-text');
    figcaption.append('Cup Cake   ');
    figcaption.classList.add('mx-2')
    figcaption.append('- $70');
    fig.appendChild(figcaption);

    const fig3 = document.createElement('figure');
    fig3.classList.add('item-g');
    const img3 = document.createElement('img');
    img3.classList.add('menu-img');
    img3.setAttribute('src', './img/img3.jpg');
    fig3.appendChild(img3);
    menu.appendChild(fig3);
    const figcaption3 = document.createElement('figcaption');
    figcaption3.classList.add('fig-text');
    figcaption3.append('Chocotale Dunnts   ');
    figcaption3.classList.add('mx-2')
    figcaption3.append('- $70');
    fig3.appendChild(figcaption3);

    const fig4 = document.createElement('figure');
    fig4.classList.add('item-g');
    const img4 = document.createElement('img');
    img4.classList.add('menu-img');
    img4.setAttribute('src', './img/img4.jpg');
    fig4.appendChild(img4);
    menu.appendChild(fig4);
    const figcaption4 = document.createElement('figcaption');
    figcaption4.classList.add('fig-text');
    figcaption4.append('White Cake with Caramel   ');
    figcaption4.classList.add('mx-2')
    figcaption4.append('- $70');
    fig4.appendChild(figcaption4);

    const fig5 = document.createElement('figure');
    fig5.classList.add('item-g');
    const img5 = document.createElement('img');
    img5.classList.add('menu-img');
    img5.setAttribute('src', './img/img5.jpg');
    fig5.appendChild(img5);
    menu.appendChild(fig5);
    const figcaption5 = document.createElement('figcaption');
    figcaption5.classList.add('fig-text');
    figcaption5.append('Cake with White Cream   ');
    figcaption5.classList.add('mx-2')
    figcaption5.append('- $70');
    fig5.appendChild(figcaption5);

    const fig6 = document.createElement('figure');
    fig6.classList.add('item-g');
    const img6 = document.createElement('img');
    img6.classList.add('menu-img');
    img6.setAttribute('src', './img/img6.jpg');
    fig6.appendChild(img6);
    menu.appendChild(fig6);
    const figcaption6 = document.createElement('figcaption');
    figcaption6.classList.add('fig-text');
    figcaption6.append('White Chocolate Truffle and two Mousses with mixed Chocolates   ');
    figcaption6.classList.add('mx-2')
    figcaption6.append('- $70');
    fig6.appendChild(figcaption6);

    const fig7 = document.createElement('figure');
    fig7.classList.add('item-g');
    const img7 = document.createElement('img');
    img7.classList.add('menu-img');
    img7.setAttribute('src', './img/img7.jpg');
    fig7.appendChild(img7);
    menu.appendChild(fig7);
    const figcaption7 = document.createElement('figcaption');
    figcaption7.classList.add('fig-text');
    figcaption7.append('Hot Mousse Chocolate   ');
    figcaption7.classList.add('mx-2')
    figcaption7.append('- $70');
    fig7.appendChild(figcaption7);

    const fig8 = document.createElement('figure');
    fig8.classList.add('item-g');
    const img8 = document.createElement('img');
    img8.classList.add('menu-img');
    img8.setAttribute('src', './img/img8.jpg');
    fig8.appendChild(img8);
    menu.appendChild(fig8);
    const figcaption8 = document.createElement('figcaption');
    figcaption8.classList.add('fig-text');
    figcaption8.append('Chocolate lollipop   ');
    figcaption8.classList.add('mx-2')
    figcaption8.append('- $70');
    fig8.appendChild(figcaption8);

    const fig9 = document.createElement('figure');
    fig9.classList.add('item-g');
    const img9 = document.createElement('img');
    img9.classList.add('menu-img');
    img9.setAttribute('src', './img/img9.jpg');
    fig9.appendChild(img9);
    menu.appendChild(fig9);
    const figcaption9 = document.createElement('figcaption');
    figcaption9.classList.add('fig-text');
    figcaption9.append('Chocolate Croissant   ');
    figcaption9.classList.add('mx-2')
    figcaption9.append('- $70');
    fig9.appendChild(figcaption9);

    const fig10 = document.createElement('figure');
    fig10.classList.add('item-g');
    const img10 = document.createElement('img');
    img10.classList.add('menu-img');
    img10.setAttribute('src', './img/img10.jpg');
    fig10.appendChild(img10);
    menu.appendChild(fig10);
    const figcaption10 = document.createElement('figcaption');
    figcaption10.classList.add('fig-text');
    figcaption10.append('Swiss Chocolate between two slices of Chocolate Cake   ');
    figcaption10.classList.add('mx-2')
    figcaption10.append('- $70');
    fig10.appendChild(figcaption10);

    const fig11 = document.createElement('figure');
    fig11.classList.add('item-g');
    const img11 = document.createElement('img');
    img11.classList.add('menu-img');
    img11.setAttribute('src', './img/img11.jpg');
    fig11.appendChild(img11);
    menu.appendChild(fig11);
    const figcaption11 = document.createElement('figcaption');
    figcaption11.classList.add('fig-text');
    figcaption11.append('Hot Chocolate   ');
    figcaption11.classList.add('mx-2')
    figcaption11.append('- $70');
    fig11.appendChild(figcaption11);

    const fig12 = document.createElement('figure');
    fig12.classList.add('item-g');
    const img12 = document.createElement('img');
    img12.classList.add('menu-img');
    img12.setAttribute('src', './img/img12.jpg');
    fig12.appendChild(img12);
    menu.appendChild(fig12);
    const figcaption12 = document.createElement('figcaption');
    figcaption12.classList.add('fig-text');
    figcaption12.append('Chocolate Mousse   ');
    figcaption12.classList.add('mx-2')
    figcaption12.append('- $70');
    fig12.appendChild(figcaption12);

    const fig13 = document.createElement('figure');
    fig13.classList.add('item-g');
    const img13 = document.createElement('img');
    img13.classList.add('menu-img');
    img13.setAttribute('src', './img/img13.jpg');
    fig13.appendChild(img13);
    menu.appendChild(fig13);
    const figcaption13 = document.createElement('figcaption');
    figcaption13.classList.add('fig-text');
    figcaption13.append('Bowl w Ferrero Rocher   ');
    figcaption13.classList.add('mx-2')
    figcaption13.append('- $70');
    fig13.appendChild(figcaption13);

    content.appendChild(menu);
  };
  return {
    renderMenuPage,
  };
})();

export default Menu;
