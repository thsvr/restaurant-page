const Contact = (() => {
  const renderContact = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = '';

    const container = document.createElement('article');
    container.classList.add('container');
    container.classList.add('mt-3');

    const form1 = document.createElement('div');
    form1.classList.add('form-group');
    container.appendChild(form1);

    const label1 = document.createElement('label');
    label1.append('Name:');
    container.appendChild(label1);

    const input1 = document.createElement('input');
    input1.classList.add('form-control');
    container.appendChild(input1);

    const form2 = document.createElement('div');
    form2.classList.add('form-group');
    container.appendChild(form2);

    const label2 = document.createElement('label');
    label2.append('Email:');
    container.appendChild(label2);

    const input2 = document.createElement('input');
    input2.classList.add('form-control');
    container.appendChild(input2);

    const form3 = document.createElement('div');
    form3.classList.add('form-group');
    container.appendChild(form3);

    const label3 = document.createElement('label');
    label3.append('Message:');
    container.appendChild(label3);

    const textarea1 = document.createElement('textarea');
    textarea1.classList.add('form-control');
    container.appendChild(textarea1);

    const form4 = document.createElement('div');
    form4.classList.add('form-group');
    container.appendChild(form4);

    const buttonSubmit = document.createElement('button');
    buttonSubmit.classList.add('btn-submit');
    buttonSubmit.append('Submit');
    container.appendChild(buttonSubmit);

    content.appendChild(container);
  };
  return {
    renderContact,
  };
})();
export default Contact;