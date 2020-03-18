const Homepage = (() => {
  const renderHomepage = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = '';

    const main = document.createElement('article');
    main.classList.add('main');

    const descriptionMain = document.createElement('div');
    descriptionMain.classList.add('description-main');
    main.append(descriptionMain);

    const descriptionText = document.createElement('h2');
    descriptionText.classList.add('logo-text')
    descriptionText.append('Welcome to Chocolate Suisse :)');
    descriptionMain.append(descriptionText);


    content.appendChild(main);
  };
  return {
    renderHomepage,
  };
})();

export default Homepage;
