

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
                "date":date,

            }),
            success: function (data) {
                alert(" Appointment saved")
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
        }
    }

    function viewAppointments() {
        const lastName = sessionStorage.getItem("email");
        $.ajax({
            method: "POST",
            url: "http://localhost:8086/appointment/user-email/"+ lastName,
            async: true,
            success: function (data) {
                populateTable(data);
            },
            error: function (xhr, exception) {
                alert("Error");
            },
        });
      }
      
      
      function populateTable(data) {
        var tableBody = $("#appointmentTable");
        // Clear the existing table body
        tableBody.empty();
        // Loop through the data and append rows to the table
        $.each(data, function (index, element) {
            var row = $("<tr>");
            row.append($("<td>").text(element.id));
            row.append($("<td>").text(element.firstName));
            row.append($("<td>").text(element.lastName));
            row.append($("<td>").text(element.contactNumber));
            row.append($("<td>").text(element.consultantName));
            row.append($("<td>").text(element.email));
            row.append($("<td>").text(element.date));
            tableBody.append(row);

            $("#appointmentTable").on("click", "tr", function() {
                // Get details from the clicked row
                var id = $(this).find("td:eq(0)").text();
                var firstName = $(this).find("td:eq(1)").text();
                var lastName = $(this).find("td:eq(2)").text();
                var contactNumber = $(this).find("td:eq(3)").text();
                var consultantName = $(this).find("td:eq(4)").text();
                var email = $(this).find("td:eq(5)").text();
                var date = $(this).find("td:eq(6)").text();
            
                // Populate the form fields with the data
                $('#exampleFormControlInput1').val(id);
                $('#exampleFormControlInput2').val(firstName);
                $('#exampleFormControlInput3').val(lastName);
                $('#exampleFormControlInput4').val(contactNumber);
                $('#exampleFormControlInput5').val(consultantName);
                $('#exampleFormControlInput7').val(email);
                $('#exampleFormControlInput6').val(date);
            });

            
        });
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
                    alert("Appointment Updated");
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

    // function getDetails(row){

    //     var id = row.cells[0].innerHTML;
    //     var firstName = row.cells[1].innerHTML;
    //     var lastName = row.cells[2].innerHTML;
    //     var contactNumber = row.cells[3].innerHTML;
    //     var consultantName = row.cells[4].innerHTML;
    //     var email = row.cells[5].innerHTML;
    //     var date = row.cells[6].innerHTML;


    //     $('#exampleFormControlInput1').val(id);
    //     $('#exampleFormControlInput2').val(firstName);
    //     $('#exampleFormControlInput3').val(lastName);
    //     $('#exampleFormControlInput4').val(contactNumber);
    //     $('#exampleFormControlInput5').val(consultantName);
    //     $('#exampleFormControlInput7').val(email);
    //     $('#exampleFormControlInput6').val(date);

    // }

    // ... Your existing code ...

// Add an event listener to each row in the table


// ... Your existing code ...


