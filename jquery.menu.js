jQuery.fn.meuMenu = function(){
  var $ul = $(this);
  $ul.addClass('plugin_menu').find('li > ul  li:has(ul)').find('a:first').addClass('sub_menu');
  $ul.find('ul').hide();
  $ul.find('li').mouseover(function(){
    $(this).find('ul:first').show();
  }).mouseout(function(){
    $(this).find('ul:first').hide();
  });

}