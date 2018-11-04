$(function(){

  var displayNotification = function(){
    if (!$('#tasksList').children().length) {
        $('#notification').fadeIn("fast");
    } else {
      $('#notification').css("display","none")
    }
  }

  $(document).on("click", "#taskAdd", function () {
      if(!$('#taskInput').val()){return false;}

      $('#tasksList').append( "<li> "  + $('#taskInput').val() + "<span class='delete'>&times</span>" + "</li>");
      $('#taskInput').val("");

      displayNotification();

  $(document).on("click",".delete", function(event){

      $(this).parent().remove();
      displayNotification();
    })
  })
})
