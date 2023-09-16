function userRegistration(){

    let firstName=$('#exampleFormControlInput1').val();
    let lastName=$('#exampleFormControlInput2').val();
    let email=$('#exampleFormControlInput3').val();
    let password=$('#exampleFormControlInput4').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8086/userRegister/save",
        async:true,
        data:JSON.stringify({
            "userID":"",
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "password":password

        }),
        success: function (data) {
            alert("User Registerd");
            window.location.href = 'userLogin.html';

            $('#exampleFormControlInput1').val('');
            $('#exampleFormControlInput2').val('');
            $('#exampleFormControlInput3').val('');
            $('#exampleFormControlInput4').val('');
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}

