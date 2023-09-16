
function consultantLogin() {
    // Get the values of email and password inputs
    let email = $('#exampleFormControlInput1').val();
    let password = $('#exampleFormControlInput2').val();
  
    // Create an object with the login data
    let loginData = {
      email: email,
      password: password
    };
  
    // Make an AJAX POST request to the login endpoint
    $.ajax({
      method: 'POST',
      contentType: 'application/json',
      url: 'http://localhost:8086/consultant/login/save',
      async: true,
      data: JSON.stringify(loginData),
      success: function(response) {
        // Save the user's email in the session storage
        sessionStorage.setItem('email', loginData.email);
        
  
        // Display a "Welcome Consultant" message
        alert('Welcome Consultant');
  
  
        console.log(`Welcome, ${loginData.email}!`);
        // Redirect to the consultant dashboard.html file
        window.location.href = 'consultantPage.html';
      },
      error: function(xhr, status, error) {
        // Handle login failure or error
        alert('Login Failed: ' + error);
      }
    });
  }
