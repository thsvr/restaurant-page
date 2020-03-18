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
    cardContent.classList.add('logo-text')
    descriptionLocation.appendChild(cardContent);
    cardContent.append('We will be happy to share good moments with you');

    const btnIcon2 = document.createElement('i');
    btnIcon2.classList.add('fas');
    btnIcon2.classList.add('fa-map-marked-alt');
    btnIcon2.classList.add('social-nav');
    cardContent.append(btnIcon2);

    const adress = document.createElement('h3');
    descriptionLocation.appendChild(adress);
    adress.append(' 000 Newbury St, Boston - MA 02116, United States');

    content.appendChild(mainLocation);
  };
  return {
    renderLocation,
  };
})();
export default Location;