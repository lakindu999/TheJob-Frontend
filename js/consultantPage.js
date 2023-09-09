function viewAppointments() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8086/appointment/view-all",
        async: true,
        success: function (data) {
            $('#appointmentTable').empty();
            for (let appointment of data.content) {
                let id = appointment.id;
                let firstName = appointment.firstName;
                let lastName = appointment.lastName;
                let contactNumber = appointment.contactNumber;
                let consultantName = appointment.consultantName;
                let email = appointment.email;
                let date = appointment.date;

                var row = `<tr onclick="getDetails(this)"><td>${id}</td><td>${firstName}</td><td>${lastName}</td><td>${contactNumber}</td><td>${consultantName}</td><td>${email}</td><td>${date}</td></tr>`;
                $('#appointmentTable').append(row);
            }
        },
        error: function (xhr, exception) {
            alert("Error");
        }
    });
}

// function viewAppointments() {
//     // Retrieve the consultant's name from sessionStorage
//     let email = window.sessionStorage.getItem('email');

//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8086/appointment/by-email",
//         headers: {
//             "email": email // Pass the consultant's name in headers
//         },
//         async: true,
//         success: function (data) {
//             console.log(data); // Add this line to inspect the response structure
//             $('#appointmentTable').empty();
//             for (let appointment of data.content) {
//                 let id = appointment.id;
//                 let firstName = appointment.firstName;
//                 let lastName = appointment.lastName;
//                 let contactNumber = appointment.contactNumber;
//                 let email = appointment.email;
//                 let date = appointment.date;

//                 var row = `<tr onclick="getDetails(this)"><td>${id}</td><td>${firstName}</td><td>${lastName}</td><td>${contactNumber}</td><td>${email}</td><td>${date}</td></tr>`;
//                 $('#appointmentTable').append(row);
//             }
//         },
//         error: function (xhr, exception) {
//             alert("Error");
//         }
//     });

// function viewAppointments() {
//   const email = sessionStorage.getItem("email");
//   $.ajax({
//       method: "GET",
//       url: "http://localhost:8086/appointment/by-email/"+ email,
//       async: true,
//       success: function (data) {
//         console.log(data);
//         $('#appointmentTable').empty();
//         for (let appointment of data.content) {
//             let id = appointment.id;
//             let firstName = appointment.firstName;
//             let lastName = appointment.lastName;
//             let contactNumber = appointment.contactNumber;
//             let consultantName = appointment.consultantName;
//             let email = appointment.email;
//             let date = appointment.date;

//             var row = `<tr onclick="getDetails(this)"><td>${id}</td><td>${firstName}</td><td>${lastName}</td><td>${contactNumber}</td><td>${consultantName}</td><td>${email}</td><td>${date}</td></tr>`;
//             $('#appointmentTable').append(row);
//         }
//       },
//       error: function (xhr, exception) {
//           alert("Error");
//       },
//   });



// function populateTable(data) {
//   var tableBody = $("#appointmentTable");
//   // Clear the existing table body
//   tableBody.empty();
//   // Loop through the data and append rows to the table
//   $.each(data, function (index, element) {
//       var row = $("<tr>");
//       row.append($("<td>").text(element.id));
//       row.append($("<td>").text(element.consultantname));
//       row.append($("<td>").text(element.clientname));
//       row.append($("<td>").text(element.clientphone));
//       row.append($("<td>").text(element.date));
//       row.append($("<td>").text(element.time));
//       tableBody.append(row);
//   });
// }
    
