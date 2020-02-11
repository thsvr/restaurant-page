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
    descriptionText.append('Welcome to Chocolate Suisse :)');
    descriptionMain.append(descriptionText);


    content.appendChild(main);


    // content.innerHTML = `<article class="main"> 
    //   <div class='description-main'>
    //     <h1>Fill it with some description</h1>
    //   </div>
    // </article>`;
  };
  return {
    renderHomepage,
  };
})();

export default Homepage;
