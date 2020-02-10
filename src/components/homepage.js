const Homepage = (() => {
  const renderHomepage = () => {
    const content = document.getElementById('tabContent');
    const homepage = document.createElement('div');
    homepage.className = 'homepage';

    homepage.innerHTML = '<h1>testing my homepage</h1>';
    content.appendChild(homepage);
  };
  return {
    renderHomepage,
  };
})();

export default Homepage;
