const Location = (() => {
  const renderLocation = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = '';

    const mainLocation = document.createElement('article');
    mainLocation.classList.add('main-location');

    const descriptionLocation = document.createElement('div');
    descriptionLocation.classList.add('description-location');
    descriptionLocation.classList.add('card');

    mainLocation.appendChild(descriptionLocation);

    const cardContent = document.createElement('h1');
    cardContent.classList.add('contact-text');
    descriptionLocation.appendChild(cardContent);
    cardContent.append('Do you wanna try the best chocolate ever?');

    const adress = document.createElement('h2');
    descriptionLocation.appendChild(adress);
    adress.append('Visit us: 000 Newbury St, Boston - MA 02116, United States');

    content.appendChild(mainLocation);
  };
  return {
    renderLocation,
  };
})();
export default Location;