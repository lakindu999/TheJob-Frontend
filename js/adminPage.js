viewConsultant();
function saveConsultant() {
    let consultantName = $('#exampleFormControlInput2').val();
    let email = $('#exampleFormControlInput3').val();
    let password = $('#exampleFormControlInput4').val();
    let consultantNumber = $('#exampleFormControlInput5').val();
    let specializedCountry = $('#exampleFormControlInput6').val();
    let availableDay = $('#exampleFormControlInput7').val();
    let timeSlot = $('#exampleFormControlInput8').val();

    // Check if any of the required fields are empty
    if (
        consultantName.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '' ||
        consultantNumber.trim() === '' ||
        specializedCountry.trim() === '' ||
        availableDay.trim() === '' ||
        timeSlot.trim() === ''
    ) {
        alert("Please fill in all required fields.");
        return; // Exit the function if any field is empty
    }

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8086/consultant/save",
        async: true,
        data: JSON.stringify({
            "id": "",
            "consultantName": consultantName,
            "email": email,
            "password": password,
            "consultantNumber": consultantNumber,
            "specializedCountry": specializedCountry,
            "availableDay": availableDay,
            "timeSlot": timeSlot
        }),
        success: function (data) {
            alert("Consultant Saved");
        },
        error: function (xhr, exception) {
            alert("Error");
        }
    });
}


function viewConsultant(){

        $.ajax({
            method:"GET",
            url:"http://localhost:8086/consultant/view-all",
            async:true,
            success: function (data) {
                $('#consultantTable').empty();
                for (let consultant of data.content){
                    let id=consultant.id
                    let consultantName=consultant.consultantName
                    let email=consultant.email
                    let password=consultant.password
                    let consultantNumber=consultant.consultantNumber
                    let specializedCountry=consultant.specializedCountry
                    let availableDay=consultant.availableDay
                    let timeSlot=consultant.timeSlot

                    var row=`<tr onclick="getDetails(this)"><td >${id}</td><td >${consultantName}</td><td>${email}</td><td>${password}</td><td>${consultantNumber}</td><td>${specializedCountry}</td><td>${availableDay}</td><td>${timeSlot}</td></tr>`;
                    $('#consultantTable').append(row);
                }
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
    }
    
function updateConsultant() {
    let id = $('#exampleFormControlInput1').val();
    let consultantName = $('#exampleFormControlInput2').val();
    let email = $('#exampleFormControlInput3').val();
    let password = $('#exampleFormControlInput4').val();
    let consultantNumber = $('#exampleFormControlInput5').val();
    let specializedCountry = $('#exampleFormControlInput6').val();
    let availableDay = $('#exampleFormControlInput7').val();
    let timeSlot = $('#exampleFormControlInput8').val();

    // Check if any of the required fields are empty
    if (
        consultantName.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        consultantNumber.trim() === "" ||
        specializedCountry.trim() === "" ||
        availableDay.trim() === "" ||
        timeSlot.trim() === ""
    ) {
        alert("Please fill in all required fields.");
        return; // Exit the function if validation fails
    }

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8086/consultant/update",
        async: true,
        data: JSON.stringify({
            "id": id,
            "consultantName": consultantName,
            "email": email,
            "password": password,
            "consultantNumber": consultantNumber,
            "specializedCountry": specializedCountry,
            "availableDay": availableDay,
            "timeSlot": timeSlot
        }),
        success: function (data) {
            alert("Consultant Updated");
            viewConsultant();
        },
        error: function (xhr, exception) {
            alert("Error");
        }
    });
}


function deleteConsultant(){
        let id=$('#exampleFormControlInput1').val();

        $.ajax({
            method:"DELETE",
            url:"http://localhost:8086/consultant/delete/"+id,
            async:true,
            success: function (data) {
                alert("Consultant Deleted")
                viewConsultant()
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })

    }

function getDetails(row){

        var id = row.cells[0].innerHTML;
        var consultantName = row.cells[1].innerHTML;
        var email = row.cells[2].innerHTML;
        var password = row.cells[3].innerHTML;
        var consultantNumber = row.cells[4].innerHTML;
        var specializedCountry = row.cells[5].innerHTML;
        var availableDay = row.cells[6].innerHTML;
        var timeSlot = row.cells[7].innerHTML;

        $('#exampleFormControlInput1').val(id);
        $('#exampleFormControlInput2').val(consultantName);
        $('#exampleFormControlInput3').val(email);
        $('#exampleFormControlInput4').val(password);
        $('#exampleFormControlInput5').val(consultantNumber);
        $('#exampleFormControlInput6').val(specializedCountry);
        $('#exampleFormControlInput7').val(availableDay);
        $('#exampleFormControlInput8').val(timeSlot);

}
