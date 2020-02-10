const Homepage = (() => {
  const renderHomepage = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = '<h1>testing my homepage</h1>';
  };
  return {
    renderHomepage,
  };
})();

export default Homepage;
