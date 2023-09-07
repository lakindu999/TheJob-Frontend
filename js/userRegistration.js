// function userRegistration(){

//     let firstName=$('#exampleFormControlInput2').val();
//     let lastName=$('#exampleFormControlInput3').val();
//     let email=$('#exampleFormControlInput4').val();
//     let password=$('#exampleFormControlInput5').val();

//     $.ajax({
//         method:"POST",
//         contentType:"application/json",
//         url:"http://localhost:8086/userRegister/save",
//         async:true,
//         data:JSON.stringify({
//             "userID":"",
//             "firstName":firstName,
//             "lastName":lastName,
//             "email":email,
//             "password":password

//         }),
//         success: function (data) {
//             alert("User Registerd");
//             window.location.href = 'userLogin.html';

//             $('#exampleFormControlInput2').val('');
//             $('#exampleFormControlInput3').val('');
//             $('#exampleFormControlInput4').val('');
//             $('#exampleFormControlInput5').val('');
//         },
//         error: function (xhr, exception) {
//             alert("Error")
//         }
//     })

// }

function userRegistration() {
    let firstName = $('#exampleFormControlInput2').val();
    let lastName = $('#exampleFormControlInput3').val();
    let email = $('#exampleFormControlInput4').val();
    let password = $('#exampleFormControlInput5').val();

    // Check if any of the required fields are empty
    if (
        firstName.trim() === "" ||
        lastName.trim() === "" ||
        email.trim() === "" ||
        password.trim() === ""
    ) {
        alert("Please fill in all required fields.");
    } else {
        $.ajax({
            method: "POST",
            contentType: "application/json",
            url: "http://localhost:8086/userRegister/save",
            async: true,
            data: JSON.stringify({
                "userID": "",
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password
            }),
            success: function (data) {
                alert("User Registered");
                window.location.href = 'userLogin.html';

                // Clear input fields after successful registration
                $('#exampleFormControlInput2').val('');
                $('#exampleFormControlInput3').val('');
                $('#exampleFormControlInput4').val('');
                $('#exampleFormControlInput5').val('');
            },
            error: function (xhr, exception) {
                alert("Error");
            }
        });
    }
}
