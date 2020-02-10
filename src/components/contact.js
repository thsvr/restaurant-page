const Contact = (() => {
  const renderContact = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = '<h3>Contact content and more html code</h3>';
  };
  return {
    renderContact,
  };
})();
export default Contact;
