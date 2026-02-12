$(function(){
  //检测元素是否在当前可见范围内
  function isElementPartiallyInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    //条件表达式，用于判断某个元素是否在用户的可视范围内
    return(rect.bottom > 0 && rect.right >0 && rect.top < windowHeight && rect.width < windowWidth);
  }
  function handleScroll() {
    //:not(:has(*)):not(:empty)选择含文本但不含子标签的div元素
    $("p,h1,h2,h3,h4,h5,ol,li,i,pre,img,div:not(:has(*)):not(:empty),a:not(:has(*)):not(:empty)").each(function(){
      if (isElementPartiallyInViewport(this)) {
        $(this).removeClass("jerry_copyban");
      } else {
        $(this).addClass("jerry_copyban");
      }
    });
  }
  /**
   * 获取信息
   */
  if ($("html_protect").length > 0) {
    /**
     * 一、防止Ctrl+P打印以及防截屏
     */
    if ($("html_protect").attr("copyban") == "true") {
      //添加class
      $("head").append('<style> .jerry_copyban {opacity: 0 !important; visibility: hidden !important; z-index: -99;}</style>');
      //初始化时绑定滚动事件
      $(window).on("scroll",handleScroll);
      //初始化时绑定按键事件，按任意键刷新
      $(window).on("keyup",handleScroll);
      //当页面获得焦点时
      $(window).on("focus", function(){
        handleScroll();
        $(window).on("scroll", handleScroll);
      });
      //当页面失去焦点时
      $(window).on("blur",function(){
        $(window).off("scroll");
      });
    }
    /**
     * 二、禁止鼠标右键
     */
    if ($("html_protect").attr("mouseright") == "true") {
      $(document).contextmenu(function(e){e.preventDefault();});
    }
    /**
     * 三、禁止ctrl组合键和F1-F12键
     */
    if ($("html_protect").attr("f12") == "true") {
      $(document).keydown(function(e){
        if (e.ctrlKey || e.keyCode >= 112 && e.keyCode <= 123) {e.preventDefault();}
      });
    }
    /**
     * 四、禁止iframe镜像
     */
    if ($("html_protect").attr("iframe") == "true") {
      if (self != top) {top.location.href = self.location.href;}
    }
    /**
     * 五、导入ConsoleBan
     */
    if ($("html_protect").attr("consoleban") == "2") {
      $("body").append('<script src="https://npm.elemecdn.com/console-ban@5.0.0/dist/console-ban.min.js"></scr' + 'ipt>');
    } else if ($("html_protect").attr("consoleban") == "1") {
      $("body").append('<script src="https://npm.elemecdn.com/console-ban@5.0.0/dist/console-ban.min.js"></scr' + 'ipt><script>setTimeout(function(){ConsoleBan.init();},500);</scr' + 'ipt>');
    }
  }
});