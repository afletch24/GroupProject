$(document).ready(function(){
console.log("hi");
    

    $("#submitButton").on("click", function(){
        event.preventDefault();
        var name = $("#employeeName").val().trim();
        var role = $("#employeeRole").val();
        var startDate = $("#employeeStartDate").val();
        var monthlyRate = $("#employeeMonthlyRate").val();



        console.log(name);
        console.log(role);
        console.log(startDate);
        console.log(monthlyRate);
    });





});