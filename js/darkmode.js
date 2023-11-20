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
  navbarMenu.setAttribute('onclick', 'toggleDarkmode()');
  // 初始化状态
  var isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (isLight) {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'false');
  }
  var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'true');
  }
  // 添加黑暗模式切换的事件监听
  // listenable-like object [`MediaQueryList`]
  var mqList = window.matchMedia('(prefers-color-scheme: dark)');

  mqList.addEventListener('change', (event) => {
    if (event.matches) {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkmode', 'true');
    } else {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkmode', 'false');
    }
  });
})();

// 切换 darkmode 状态
function toggleDarkmode() {
  // 读取localStorage的 darkmode 状态
  var darkmode = localStorage.getItem('darkmode'); // 'true' 或 'false'
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
    /* 修改 class="navbar-item navbar-logo"下的第一个img的src地址 */
    document.getElementsByClassName('navbar-logo')[0].querySelector('img').src = 'https://cdn.jsdelivr.net/gh/miloweimo/blogimage/cat_white.png';
    document.getElementsByClassName('footer-logo')[0].querySelector('img').src = 'https://cdn.jsdelivr.net/gh/miloweimo/blogimage/cat_white.png';
    /* 修改 class="avatar"下的img的src地址 */
    document.getElementsByClassName('avatar')[0].src = 'https://cdn.jsdelivr.net/gh/miloweimo/blogimage/avatar_white.png';
  } else {
    document.body.classList.remove('darkmode');
    document.getElementsByClassName('navbar-logo')[0].querySelector('img').src = 'https://cdn.jsdelivr.net/gh/miloweimo/blogimage/cat_black.png';
    document.getElementsByClassName('footer-logo')[0].querySelector('img').src = 'https://cdn.jsdelivr.net/gh/miloweimo/blogimage/cat_black.png';
    document.getElementsByClassName('avatar')[0].src = 'https://cdn.jsdelivr.net/gh/miloweimo/blogimage/avatar_black.png';
  }
};

