const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
document.getElementById('hamburgerIcon').addEventListener('click', function () {
  console.log("hamburger clicked")
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
});

// const menu = document.getElementById('menu');
// Array.from(document.querySelector('.menu').children).forEach(e=>{
//   // console.log(e);
//   e.addEventListener('click',()=>{
//     console.log(e)
//     menu.classList.remove('active');
//   })
// })

document.getElementById("contact-form").addEventListener("submit",(e)=>{
  e.preventDefault();
  
  const nameValue= document.getElementById("name").value;
  const emailValue=document.getElementById("email").value;
  const messageValue= document.getElementById("message").value;

  const response = {nameValue, emailValue,messageValue, date : new Date().toISOString() };
  
  const responses= JSON.parse(localStorage.getItem('responses')) || [ ];

  responses.push(response);

  localStorage.setItem("responses",JSON.stringify(responses));

  console.log(responses);

  alert("Thankyou for your message , I will get in touch with you ASAP!");
  this.reset();

});

//Admin login implementation
function showAdminLogin(){
  document.getElementById("admin-login").style.display="block"
}

document.getElementById('login-form').addEventListener("submit",(e)=>{
  e.preventDefault();

  const username= document.getElementById('username').value;
  const password= document.getElementById('password').value;

  const storedUsername= 'admin';
  const storedPassword= 'password';

  if(username=== storedUsername && password === storedPassword){
    document.getElementById('admin-login').style.display='none';
    document.getElementById('admin-section').style.display='block';

    alert("welcome Admin! ");
    displayStoredUserResponses();
  }
  else{
    alert("Invalid Credentials , please try again")
  }
});

function displayStoredUserResponses(){
  
  console.log("display stored responses")
  const responseContainer = document.getElementById('user-responses');
  const responses = JSON.parse(localStorage.getItem('responses')) || [ ];
  
  // responseContainer.innerHTML = '';
  
  //ForEach, will take one item from the list and process it.
  responses.forEach(response =>{
    const responseElement = document.createElement('div');
    responseElement.innerHTML = `
    <p> Name : <span>${response.nameValue}</span></p>
    <p> Email : <span>${response.emailValue}</span></p>
    <p> Message : <span>${response.messageValue}</span></p>
    <p> Date : <span>${response.date}</span></p>
    <hr>
    `;
    
    //We need to tell JS where the new element had to be placed
    // appendChild will help JS identify where it is supposed to attach the new element.
    responseContainer.appendChild(responseElement);
     
  });
  
}