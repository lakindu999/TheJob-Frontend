function viewAppointments() {
    // Retrieve the email from sessionStorage
    var email = sessionStorage.getItem('email');
    
    // Check if the email is present in sessionStorage
    if (!email) {
        alert("Email not found in session. Please log in first.");
        return;
    }

    // Use the email in the AJAX request URL
    $.ajax({
        method: "GET",
        url: "http://localhost:8086/appointment/consultant-email/" + email,
        async: true,
        success: function (data) {
            $('#appointmentTable').empty();
            for (let appointment of data.content) {
                let id = appointment.id;
                let firstName = appointment.firstName;
                let lastName = appointment.lastName;
                let contactNumber = appointment.contactNumber;
                let consultantName = appointment.consultantName;
                let date = appointment.date;

                var row = `<tr onclick="getDetails(this)"><td>${id}</td><td>${firstName}</td><td>${lastName}</td><td>${contactNumber}</td><td>${consultantName}</td><td>${date}</td></tr>`;
                $('#appointmentTable').append(row);
            }
        },
        error: function (xhr, exception) {
            alert("Error");
        }
    });
}
