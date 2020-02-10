const Location = (() => {
  const renderLocation = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML =`<article class="main-location"> 
    <div class='description-location card'>
      <h1 class="contact-text">Fill it with some adress</h1>
    </div>
  </article>`;
  };
  return {
    renderLocation,
  };
})();
export default Location;