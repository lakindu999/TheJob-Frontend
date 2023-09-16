function viewAppointments() {
    const email = sessionStorage.getItem("email");
    $.ajax({
        method: "POST",
         url: "http://localhost:8086/appointment/consultant-email/"+ email,
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
        row.append($("<td>").text(element.date));
        tableBody.append(row);
    });
  }

    
