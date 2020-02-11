const Location = (() => {
  const renderLocation = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = `<article class="main-location"> 
    <div class='description-location card'>
      <h1 class="contact-text">Do you wanna try the best chocolate ever? </h1>
      <h2>000 Newbury St, Boston</h2> 
      <h2>MA 02116, United States</h2>
    </div>
  </article>`;
  };
  return {
    renderLocation,
  };
})();
export default Location;