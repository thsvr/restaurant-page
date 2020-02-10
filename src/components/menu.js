
const Menu = (() => {
  const renderMenuPage = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = `<p> Menu content and more html code </p>
<figure><img src='../components/img2.jpg' alt= 'cake is not showing up'></img></figure>
<figure><img src='../public/img/img1.jpg' alt= '' ></img></figure>

`;
  };
  return {
    renderMenuPage,
  };
})();

export default Menu;
