jQuery.fn.meuMenu = function(){
  var $ul = $(this);
  $ul.find('ul').hide();
  $ul.find('li').mouseover(function(){
    $(this).find('ul:first').show();
  }).mouseout(function(){
    $(this).find('ul:first').hide();
  });

}