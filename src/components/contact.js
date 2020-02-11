const Contact = (() => {
  const renderContact = () => {
    const content = document.getElementById('tabContent');
    content.innerHTML = '';

    const container = document.createElement('article');
    container.classList.add('container');
    container.classList.add('mt-3');

    const form = document.createElement('div');
    form.classList.add('form-group');
    container.appendChild

    content.appendChild(container);
    
    
//     content.innerHTML = `<div class='container mt-3'>
//       <div class='form-group'>
//         <label class='col-sm-2'>Name:</label>
//         <div class='col-sm-10'>          
//           <input type='text' class='form-control'>
//         </div>
//       </div>
      
//       <div class='form-group'>
//         <label class='col-sm-2'>Email:</label>
//         <div class='col-sm-10'>          
//           <input type='email' class='form-control'>
//         </div>
//       </div>
      
//       <div class='form-group'>
//         <label class='control-label col-sm-2'>Message us:</label>
//         <div class='col-sm-10'>
//         <textarea class='form-control' rows='5'></textarea>
//         </div>
//       </div>
      
//       <div class='form-group'>        
//         <div class='col-sm-10'>
//         <button type='submit' class='btn btn-default'>Submit</button>
//         </div>
//       </div>
      
//     </div>
//   </div>
// </div>
// </div>`
;
  };
  return {
    renderContact,
  };
})();
export default Contact;