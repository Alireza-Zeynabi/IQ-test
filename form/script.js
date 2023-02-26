const
    form = document.querySelector('#form'),
    userName = document.querySelector('#userName'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    coPassword = document.querySelector('#co-password'),
    submitBtn = document.querySelector('#submitBtn');
    
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    const 
    userNameError = document.querySelector('#userNameError'),
    emailError = document.querySelector('#emailError'),
    passwordError =document.querySelector('#passwordError'),
    coPasswordError =document.querySelector('#co-passwordError');


    

form.addEventListener('submit', submitForm)

function submitForm(e) {

    // e.preventdefault()


    // set user Name Error
    const userNameValue = userName.value.trim()

    if (userNameValue.length >=5,
        isNaN(userNameValue)) 
    {
        userNameError.textContent = 'There is a ok ✅'
        userNameError.style = 'display:block;background-color:rgb(12, 196, 12);'
    }else{

        userNameError.textContent = 'There is a problem in this part ❌'
        userNameError.style = 'display:block;background-color:rgb(255, 65, 65)'
    }
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-
    // set email Error 

    const emailValue = email.value.trim()

    if (emailValue.length >= 5 ,
        emailValue.includes("@",".","gmail" )
        ) 
    {
        emailError.textContent = 'There is a ok ✅'
        emailError.style = 'display:block;background-color:rgb(12, 196, 12);'
    }else{

        emailError.textContent = 'There is a problem in this part ❌'
        emailError.style = 'display:block;background-color:rgb(255, 65, 65)'
    }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-
    // set password Error

  const passwordlValue = password.value.trim()

    if (passwordlValue.length >= 8,
        passwordlValue.includes(".") ||
        passwordlValue.includes("-") ||
        passwordlValue.includes("_")
        ) 
    {
        passwordError.textContent = 'There is a ok ✅'
        passwordError.style = 'display:block;background-color:rgb(12, 196, 12);'
    }else{

        passwordError.textContent = ' use 8 numbers and .  -   _   ❌'
        passwordError.style = 'display:block;background-color:rgb(255, 65, 65)'
    }
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


    
  const coPasswordlValue = coPassword.value.trim()

  if (coPasswordlValue.length >= 8,
    passwordlValue.includes(".") ||
    passwordlValue.includes("-") ||
    passwordlValue.includes("_") ) 
  {
   


    coPasswordError.textContent = 'There is a ok ✅'
    coPasswordError.style = 'display:block;background-color:rgb(12, 196, 12);'
  }
  else if( coPasswordlValue !== passwordlValue){
    
    coPasswordError.textContent = ' Incorrect password ❌'
    coPasswordError.style = 'display:block;background-color:rgb(255, 65, 65)'
  }
  else{

    coPasswordError.textContent = 'There is a ok ✅'
    coPasswordError.style = 'display:block;background-color:rgb(12, 196, 12);'
  }
  
  submitBtn.disabled() = false

}




