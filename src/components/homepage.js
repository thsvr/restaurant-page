const Homepage = (() => {
  const renderHomepage = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = `<article class="main"> 
      <div class='description-main'>
        <h1>Fill it with some description</h1>
      </div>
    </article>`;
  };
  return {
    renderHomepage,
  };
})();

export default Homepage;
