
const form = document.querySelector('#resume-form');
const output = document.querySelector('#resume-output');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;
    const summary = document.querySelector('#summary').value;
    const education = document.querySelector('#education').value;
    const experience = document.querySelector('#experience').value;
    const image = document.querySelector('#image').files[0]; // Get the uploaded image file
  
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      const imageUrl = reader.result;
      const resume = `
            <h1 style="background-color: #063970; color: white; text-transform: uppercase;">${name}</h1>
            
            <div >
            <div style="padding-bottom: 30px;">
            <img src="${imageUrl}" alt="Uploaded Image" style="float: right; height: 150px; margin-top:40px; width: 150px; border-radius: 50%;  object-fit: cover;">
            </div>  
            <div style="padding-bottom: 30px; ">
            <h2 style="background-color: #063970; padding-bottom:10px; color: white; padding: 10px 10px;">  PERSONAL INFORMATION:</h2>
            <p><strong>Email:   </strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
    </div>
    </div>
            <hr>
            <h2 style="background-color: #063970;color: white; padding-bottom:10px; padding: 10px 10px;" >  SUMMARY:</h2>
            <p>${summary}</p>
            <hr>
            <h2 style="background-color: #063970; color: white;padding-bottom:10px; padding: 10px 10px;">  EDUCATION:</h2>
            <p>${education}</p>
            <hr>
            <h2 style="background-color: #063970; color: white;padding-bottom:10px; padding: 10px 10px;">  EXPERIENCE:</h2>
            <p>${experience}</p>
      `;
      output.innerHTML = resume;
    });
    reader.readAsDataURL(image); // Read the uploaded image file
  });

  