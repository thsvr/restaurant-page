const Location = (() => {
  const renderLocation = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = '<h2>Location content and more html code.</h2>';
  };
  return {
    renderLocation,
  };
})();
export default Location;