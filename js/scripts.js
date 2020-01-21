$(document).ready(function(){
  $("#form").submit(function(event){

    var fave1 = $("#fave1").val();
    var fave2 = $("#fave2").val();
    var fave3 = $("#fave3").val();
    var arr1 = [fave1, fave2, fave3];
    var newarr = [];
    newarr.push(arr1[1]);
    newarr.push(arr1[0]);
    newarr.push(arr1[2]);
    $("#list").append("<li>" + newarr[0] + "</li>");
    $("#list").append("<li>" + newarr[1] + "</li>");
    $("#list").append("<li>" + newarr[2] + "</li>");
    event.preventDefault();
  });
});