/* Javascript for BnsXBlock. */
function BnsXBlock(runtime, element) {

    function updateCount(result) {
        $('.count', element).text(result.count);
    }

    function updateApiData(return_data){
        $('.apidata', element).text(return_data);
    }

    var handlerUrl = runtime.handlerUrl(element, 'increment_count');

    

    $('#get_num').click(function(eventObject) {

        //$.get("http://localhost:8000/api/interview/", function(data, status){
        //    alert("Magic Number: " + /*JSON.stringify(data)*/ data[0].greeting + "\nStatus: " + status);
        //});

        var token = document.getElementById('token').value;

        $.ajax({
            type: "GET",
            headers: {'Authorization': 'Bearer '+token},
            url: "http://localhost:8000/api/interview/",
            success: function(data, status){
                alert("Magic Number: " + /*JSON.stringify(data)*/ data[0].greeting + "\nStatus: " + status);
            }
        });


    });


    $('#post_num').click(function(eventObject) {
        var mObject = new Object();
        mObject.id = 1;
        mObject.greeting = document.getElementById('magic_num').value;
        var token = document.getElementById('token').value;

        //alert(JSON.stringify(mObject));

        $.ajax({
            type: "PUT",
            headers: {'Authorization': 'Bearer '+token},
            url: "http://localhost:8000/api/interview/update/1/",
            data: mObject,
            success: function(data, status){
                alert(data + "\nStatus: " + status);
            }
        });


    });

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}




        //$.ajax({
        //    type: "POST",
        //    url: handlerUrl,
        //    data: JSON.stringify({"hello": "world"}),
        //    success: updateCount
        //});
        
        //$.ajax({
//            type: "GET",
//            url: "http://localhost:8000/api/interview/",
  //          data:{
    //           //data to be sent to the server.
      //      },
        //    success: function(response){
          //      //$('.apidata', element).text(response);
            //    $('.apidata', element).text(response);
            //}
        //});
