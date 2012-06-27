jQuery.fn.meuMenu = function(){
  var $ul = $(this);
  //$ul.addClass('plugin_menu');
  //$ul.find('li > ul > li').has('ul').find('a').addClass('sub_menu');
  $ul.find('ul').hide();
  $ul.find('li').mouseover(function(){
    $(this).find('ul:first').show();
  }).mouseout(function(){
    $(this).find('ul:first').hide();
  });

}