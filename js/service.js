

    function saveAppointment() {
        // Get values from form fields
        var firstName = document.getElementById("exampleFormControlInput2").value;
        var lastName = document.getElementById("exampleFormControlInput3").value;
        var contactNumber = document.getElementById("exampleFormControlInput4").value;
        var consultantName = document.getElementById("exampleFormControlInput5").value;
        var email = document.getElementById("exampleFormControlInput7").value;
        var appointmentDate = document.getElementById("exampleFormControlInput6").value;

        // Check if any of the required fields are empty
        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            contactNumber.trim() === "" ||
            consultantName.trim() === "" ||
            email.trim() === "" ||
            appointmentDate.trim() === ""
        ) {
            // Display an error message
            alert("Please fill in all required fields.");
        } else {

        let firstName=$('#exampleFormControlInput2').val();
        let lastName=$('#exampleFormControlInput3').val();
        let contactNumber=$('#exampleFormControlInput4').val();
        let consultantName=$('#exampleFormControlInput5').val();
        let email=$('#exampleFormControlInput7').val();
        let date=$('#exampleFormControlInput6').val();

        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8086/appointment/save",
            async:true,
            data:JSON.stringify({
                "id":"",
                "firstName":firstName,
                "lastName":lastName,
                "contactNumber":contactNumber,
                "consultantName":consultantName,
                "email":email,
                "date":date

            }),
            success: function (data) {
                alert(" Consultant saved")
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
        }
    }




    function viewAppointments(){
    $.ajax({
    method:"GET",
    url:"http://localhost:8086/appointment/view-all",
    async:true,
    success: function (data) {
        $('#appointmentTable').empty();
        for (let appointment of data.content){
            let id=appointment.id
            let firstName=appointment.firstName
            let lastName=appointment.lastName
            let contactNumber=appointment.contactNumber
            let consultantName=appointment.consultantName
            let email=appointment.email
            let date=appointment.date

            var row=`<tr onclick="getDetails(this)"><td >${id}</td><td >${firstName}</td><td>${lastName}</td><td>${contactNumber}</td><td>${consultantName}</td><td >${email}</td><<td>${date}</td></tr>`;
            $('#appointmentTable').append(row);
        }
    },
    error: function (xhr, exception) {
        alert("Error")
    }
    })
    }


    function updateAppointments() {
        let id = $('#exampleFormControlInput1').val();
        let firstName = $('#exampleFormControlInput2').val();
        let lastName = $('#exampleFormControlInput3').val();
        let contactNumber = $('#exampleFormControlInput4').val();
        let consultantName = $('#exampleFormControlInput5').val();
        let email = $('#exampleFormControlInput7').val();
        let date = $('#exampleFormControlInput6').val();
    
        // Check if any of the required fields are empty
        if (
            id.trim() === "" ||
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            contactNumber.trim() === "" ||
            consultantName.trim() === "" ||
            email.trim() === "" ||
            date.trim() === ""
        ) {
            alert("Please fill in all required fields.");
        } else {
            $.ajax({
                method: "PUT",
                contentType: "application/json",
                url: "http://localhost:8086/appointment/update",
                async: true,
                data: JSON.stringify({
                    "id": id,
                    "firstName": firstName,
                    "lastName": lastName,
                    "contactNumber": contactNumber,
                    "consultantName": consultantName,
                    "email": email,
                    "date": date
                }),
                success: function (data) {
                    alert("User Registerd");
                    viewAppointments();
                },
                error: function (xhr, exception) {
                    alert("Error");
                }
            });
        }
    }
    
    function deleteAppointments(){
        let id=$('#exampleFormControlInput1').val();

        $.ajax({
            method:"DELETE",
            url:"http://localhost:8086/appointment/delete/"+id,
            async:true,
            success: function (data) {
                alert("Appointment Deleted")
                viewAppointments()
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })

    }

    function getDetails(row){

        var id = row.cells[0].innerHTML;
        var firstName = row.cells[1].innerHTML;
        var lastName = row.cells[2].innerHTML;
        var contactNumber = row.cells[3].innerHTML;
        var consultantName = row.cells[4].innerHTML;
        var email = row.cells[5].innerHTML;
        var date = row.cells[6].innerHTML;

        $('#exampleFormControlInput1').val(id);
        $('#exampleFormControlInput2').val(firstName);
        $('#exampleFormControlInput3').val(lastName);
        $('#exampleFormControlInput4').val(contactNumber);
        $('#exampleFormControlInput5').val(consultantName);
        $('#exampleFormControlInput7').val(email);
        $('#exampleFormControlInput6').val(date);

    }

//     // Add this code at the beginning of your JavaScript file to populate the consultant names select box on page load.
// $(document).ready(function () {
//     populateConsultantNames();
// });

// // Function to populate the consultant names select box
// function populateConsultantNames() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8086/consultant/consultant-names",
//         async: true,
//         success: function (data) {
//             if (data.status === 200) {
//                 const consultantNames = data.data;
//                 const selectBox = document.getElementById("exampleFormControlInput5");

//                 // Clear existing options
//                 selectBox.innerHTML = '<option value="">Select Consultant</option>';

//                 // Add consultant names as options
//                 for (const name of consultantNames) {
//                     const option = document.createElement("option");
//                     option.value = name;
//                     option.text = name;
//                     selectBox.appendChild(option);
//                 }
//             } else {
//                 console.error('Failed to fetch consultant names');
//             }
//         },
//         error: function (xhr, textStatus, errorThrown) {
//             console.error('Failed to fetch consultant names', errorThrown);
//         }
//     });
// }
