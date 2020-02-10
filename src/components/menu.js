const Menu = (() => {
  const renderMenuPage = () => {
    const content = document.getElementById('tabContent');
  	content.innerHTML = `<p> Menu content and more html code </p>`;
  };
  return {
    renderMenuPage,
  };
})();

export default Menu;
