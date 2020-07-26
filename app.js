$(function(){

  $("a").click(function(){
    $("img").attr("src",$(this).attr("href"));
    return false;
  });

  $("button").dblclick(function(){
    $("img").attr("src","./img/sea.jpg");
  });

});
