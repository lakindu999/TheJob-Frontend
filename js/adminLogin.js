function adminLogin(){

    let email=$('#exampleFormControlInput1').val();
    let password=$('#exampleFormControlInput2').val();


    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8086/admin/login",
        async:true,
        data:JSON.stringify({
            "email":email,
            "password":password

        }),
        success: function (data) {
            window.location.href = 'adminPage.html';
        },
        error: function (xhr, exception) {
            alert("Incorrect Username or Password")
        }
    })

}
