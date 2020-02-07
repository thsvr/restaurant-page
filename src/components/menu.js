const Menu = (() => {


  const renderMenuPage = () => {
		const content = document.getElementById('content');
		const menuPage = document.createElement('div');
		menuPage.classList.add('menu');

		menuPage.innerHTML = `<p>Menu content and more html code</p>`;

		content.appendChild(menuPage);
		console.log('menu test')
		return {
			renderMenuPage
		}
  };
})();

export default Menu;