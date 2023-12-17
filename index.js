/**
 * 应用变量
 */
$(function(){
  //防XXS扒站
  if (fxxs) {
    $("body").append('<script src="https://npm.elemecdn.com/console-ban@5.0.0/dist/console-ban.min.js"></script><script>setTimeout(function(){ConsoleBan.init();},500);</script>');
    $(document).contextmenu(function(e){e.preventDefault();}); //禁止鼠标右键
    if (self != top) {top.location.href = self.location.href;} //禁止iframe镜像
    $(document).keydown(function(e){
      if (e.ctrlKey || e.keyCode >= 112 && e.keyCode <= 123) {e.preventDefault();}
    }); //禁止ctrl组合键和F1-F12键
  }
  //IE浏览器提示
  if (/*@cc_on!@*/ false || (!!window.MSInputMethodContext && !!document.documentMode)) {window.location.href = 'https://ssle.cn/check-browser-ie.html';}
  //主题CDN
  $('div[aria-labelledby="themecss"]').children("a").each(function(){
    //排除默认主题
    if ($(this).attr("data-theme") != "default") {
      $(this).attr("data-theme",themecss.replace("$t$",$(this).attr("data-theme")));
    }
  });
  //主题JS
  $("body").append('<script src="' + oneuiapp + '"></script>');
  //网站标题
  document.title = dctitle;
  //网站关键字
  $("meta[name='keywords']").attr("content",keywords);
  //网站介绍
  $("meta[name='description']").attr("content",descrp);
  //网站图标
  $('link[rel="shortcut icon"]').attr("href",ico);
  //左上角名称
  $("#headtitle").html(headtitle + $("#headtitle").html());
  //自定义模块
  var bgnum = 0;
  var bgcla = ["bg-body-light","bg-body-extra-light"]
  $("#topd").parent("main").children("div").each(function(){
    //排除第一个
    if ($(this).attr("id") == "topd") {return;}
    if (modules.includes($(this).attr("id"))) {
      //保留
      $(this).addClass(bgcla[bgnum % 2]);
      bgnum++;
      //现在开始按钮绑定事件
      if (bgnum == 2) {
        (function(gst){
          $("#gst").click(function(){
            //将该div的高度赋给当前浏览的滚动条高度
            document.documentElement.scrollTop = gst.offsetTop;
          });  
        })($(this)[0]);
      }
    } else {
      //去除
      $(this).remove();
    }
  });
  //自定义顶部按钮
  for (var but in headbuts) {
    //判断没有被排除
    if (modules.includes(headbuts[but][0]) || but == 0) {
      //创建了一个新的作用域，确保了but1在每次迭代时都有不同的值，从而解决了闭包问题
      (function(but1){
        $("header div>ul").append('<li class="nav-main-item"><a id="1' + headbuts[but1][0] + '" class="nav-main-link btn btn-alt-secondary px-3 d-none d-sm-inline-block" href="javascript:void(0)"><i class="' + headbuts[but1][1] + '"></i>&nbsp;<span class="nav-main-link-name"><strong>' + headbuts[but1][2] + '</strong></span></a></li>');
        $("#1" + headbuts[but1][0]).click(function(){
          //[0]把JQ对象转为JS对象
          $("#" + headbuts[but1][0])[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        });
      })(but);
    }
  }
  //网站第一板块背景图URL
  $("#topd").css("background-image","url('" + blk1bg + "')");
  //今日诗词
  if (jrsc == "api") {
    $("body").append('<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js"></script>');
  } else {
    $("#jinrishici-sentence").text(jrsc);
  }
  //团队名称&日期
  $("#topd div>h1").text(teamname);
  $("#teamday").html("© " + teamday + ' - <span data-toggle="year-copy"></span><a class="fw-semibold text" href="https://' + window.location.hostname + '"> ' + teamname + " </a>");
  //网站第一板块子标题
  $("#topd p>span").text(blk1stitle);
  //About模块内容填充
  if (modules.includes("feature")) {
    for (var i=0;i<4;i++) {
      $($("#feature div>i")[i]).addClass(aboutmod[i][0]);
      $($("#feature div>h4")[i]).text(aboutmod[i][1]);
      $($("#feature div>p")[i]).text(aboutmod[i][2]);
    }
  }
  //联系方式填充
  if (modules.includes("contact")) {
    for (var i=0;i<2;i++) {
      $($("#contact a>i")[i]).addClass(contacts[i][0]);
      $($("#contact div>a")[i]).html($($("#contact div>a")[i]).html() + "&nbsp;" + contacts[i][1]);
      $($("#contact div>a")[i]).attr("href",contacts[i][2]);
    }
  }
  //备案号
  $('a[href="https://beian.miit.gov.cn"]>span').html($('a[href="https://beian.miit.gov.cn"]>span').html() + beiancode);
  //友链
  if (modules.includes("flinks")) {
    for (var lnk in flinks) {
      $("#flinks .row.items-push").append(`
        <div class="col-md-6 col-xl-4">
          <a class="block block-rounded block-link-pop" target="_blank" href="${flinks[lnk][3]}">
            <div class="block-content block-content-full d-flex align-items-center justify-content-between">
              <img class="img-avatar img-avatar48" src="${flinks[lnk][0]}" alt="Web Favicon">
              <div class="ms-3 text-end">
                <p class="fw-semibold mb-0">${flinks[lnk][1]}</p>
                <p class="fs-sm fw-medium text-muted mb-0">${flinks[lnk][2]}</p>
              </div>
            </div>
          </a>
        </div>`);
    }  
  }
  //成员
  if (modules.includes("member")) {
    for (var mem in memb) {
      wy = "";
      if (memb[mem][4][0] != "") {wy += '<a class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled" href="https://wpa.qq.com/msgrd?v=3&uin=' + memb[mem][4][0] + '&site=qq&menu=yes&jumpflag=1"><i class="fab fa-fw fa-qq"></i></a>';}
      if (memb[mem][4][1] != "") {wy += '<a class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled" href="' + memb[mem][4][1] + '"><i class="fa fa-fw fa-link"></i></a>';}
      if (memb[mem][4][2] != "") {wy += '<a class="btn btn-sm btn-alt-primary me-1 js-bs-tooltip-enabled" href="mailto:' + memb[mem][4][2] + '"><i class="fab fa-fw fa-google"></i></a>';}
      $("#member .row.items-push").append(`
        <div class="col-md-6 col-xl-3" style="margin-top: 20px;">
          <div class="block block-rounded text-center bg-image" style="background-image: url('${memb[mem][0]}');" href="javascript:void(0)">
            <div class="block-content block-content-full">
              <img class="img-avatar img-avatar-thumb" src="${memb[mem][1]}" alt="${memb[mem][2]}">
            </div>
            <div class="block-content block-content-full bg-primary-dark-op">
              <p class="fw-semibold text-white mb-0">${memb[mem][2]}</p>
              <p class="fs-sm text-white-75 mb-2">${memb[mem][3]}</p>${wy}
            </div>
          </div>
        </div>`);
    }  
  }
  //动态
  if (modules.includes("zone")) {
    for (var zo in zone) {
      $("#zoneslick").append(`
        <div class="col-lg-4"><a class="block block-rounded block-link-pop overflow-hidden">
          <img class="img-fluid" src="${zone[zo][0]}" alt="${zone[zo][2]}">
          <div class="block-content">
            <h4 class="mb-1">${zone[zo][2]}</h4>
            <p class="fs-sm fw-medium mb-2">&bull; <strong>${zone[zo][1]}</strong> &bull;</p>
          </div>
        </a></div>
      `);
    }
    $("#zoneslick").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
    });
  }
  //作品
  if (modules.includes("work")) {
    for (var wk in cont) {
      $("#work .content>.row").append(`
        <div class="col-lg-4">
          <a class="block block-rounded block-link-pop overflow-hidden" href="./works.html?id=${wk}">
            <img class="img-fluid" src="${cont[wk][0]}" alt="${cont[wk][2]}">
            <div class="block-content">
              <h4 class="mb-1">${cont[wk][2]}</h4>
              <p class="fs-sm fw-medium mb-2">&bull; <strong>${cont[wk][1]}</strong> &bull;</p>
              <p class="fs-sm text-muted">${cont[wk][3]}</p>
            </div>
          </a>
        </div>
      `);
    }
  }
  //进网站提示框
  $("#welmodal h3").text(aler[0]);
  var alerli = aler[1].split("\n");
  for (var al in alerli) {
    $("#welmodal .block-content.fs-sm").append("<p>" + alerli[al] + "</p>");
  }
  setTimeout(function(){$('button[data-bs-target="#welmodal"]').click();},300);
});