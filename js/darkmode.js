(function(){
  // 找到元素 .navbar-end 第一个子元素
  var navbarEnd = document.getElementsByClassName('navbar-end');
  if (navbarEnd.length === 0) { return; }
  var navbarMenu = navbarEnd[0].firstElementChild;
  if (navbarMenu === null) { return; }
  // 给navbarMenu <a> 删除属性 target 和 href
  navbarMenu.removeAttribute('target');
  navbarMenu.removeAttribute('href');
  // 给navbarMenu <a> 添加属性 onclick
  navbarMenu.setAttribute('onclick', 'darkmode()');

  // darkmode 初始化读取
  var darkmode = localStorage.getItem('darkmode');
  // darkmode 没有 初始化为 false
  if (darkmode === null) {
    darkmode = false;
    localStorage.setItem('darkmode', darkmode);
    return;
  }
  // darkmode 为 'true' 则添加 class darkmode
  if (darkmode === 'true') {
    document.body.classList.add('darkmode');
  }
})();

// 切换 darkmode 状态
function darkmode() {
  // 读取localStorage的 darkmode 状态 'true' 或 'false'
  var darkmode = localStorage.getItem('darkmode');
  // 如果 darkmode 是 'false' 则设置为 'true'
  if (darkmode === 'false') {
    darkmode = true;
    localStorage.setItem('darkmode', darkmode);
  }
  // 如果 darkmode 是 'true' 则设置为 'false'
  else {
    darkmode = false;
    localStorage.setItem('darkmode', darkmode);
  }
  // 设置body的 class
  if (darkmode) {
    document.body.classList.add('darkmode');
  } else {
    document.body.classList.remove('darkmode');
  }
};

