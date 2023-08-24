(function(){
  // 找到logo
  var logo = document.getElementsByClassName('navbar-logo');
  if (!logo) { return; }
  // 给logo href 修改 
  logo[0].href = 'https://miloweimo.github.io/';
})();