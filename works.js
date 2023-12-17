
$(function(){
  //获取访问参数中的文章ID
  var paramarray = new URL(window.location.href).search.slice(1).split('&');
  var findpostid = false;
  for (var i=0;i<paramarray.length;i++) {
    if (paramarray[i].split("=")[0] == "id") {
      //转成数字
      postid = ~~paramarray[i].split("=")[1];
      if (cont[postid]) {
        findpostid = true;
      }
    }
  }
  if (!findpostid) {
    window.location.href = window.location.hostname;
  }
  //主题JS
  $("body").append('<script src="' + oneuiapp + '"></script>');
  //网站标题
  document.title = cont[postid][2];
  //网站关键字
  $("meta[name='keywords']").attr("content",keywords);
  //网站介绍
  $("meta[name='description']").attr("content",descrp);
  //网站图标
  $('link[rel="shortcut icon"]').attr("href",ico);
  //开始一点点填写内容
  //右上角信息
  $($("#inf>li .fw-semibold")[0]).text("作品类型：" + cont[postid][5][0]);
  $($("#inf>li .fw-semibold")[1]).text("作品名称：" + cont[postid][2]);
  $($("#inf>li .fw-semibold")[2]).text("作品价格：" + cont[postid][5][1]);
  $($("#inf>li .fw-semibold")[3]).text("最新版本：" + cont[postid][5][2]);
  $($("#inf>li .fw-semibold")[4]).text("发布时间：" + cont[postid][1]);
  $($("#inf>li .fw-semibold")[5]).text("发布网址：" + cont[postid][4]);
  if (cont[postid][5][3]) {
    $($("#inf>li .fw-semibold")[6]).children("font").text("正常");
    $($("#inf>li .fw-semibold")[6]).children("font").attr("color","green");
  } else {
    $($("#inf>li .fw-semibold")[6]).children("font").text("异常");
    $($("#inf>li .fw-semibold")[6]).children("font").attr("color","red");
  }
  //背景图
  $("#main-container>.bg-image").css("background-image","url('" + cont[postid][0] + "')");
  $("#main-container>.bg-image h1").text(cont[postid][2]);
  $("#main-container>.bg-image h2").text(cont[postid][3]);
  $("#main-container .fs-sm.push strong").html(" &bull; " + cont[postid][1] + " &bull; ");
  //正文
  var lins = cont[postid][6][1].split("\n");
  var pfnt = [["$s$","strong"],["$i$","em"],["$m$","mark"],["$d$","del"],["$r$","font class='text-danger'"],["$b$","font class='text-primary'"]];
  for (var l=lins.length-1;l>=0;l--) {
    //默认只会替换第一个匹配到的子串
    for (var c in pfnt) {
      if (lins[l].includes(pfnt[c][0])) {
        var psp = lins[l].split(pfnt[c][0]);
        lins[l] = psp[0];
        var pa = 0;
        var padd = ["<" + pfnt[c][1] + ">","</" + pfnt[c][1] + ">"];
        //排除字体颜色
        if (padd[1].includes("font")) {padd[1] = "</font>";}
        for (var rp=1;rp<psp.length;rp++) {
          lins[l] += padd[pa] + psp[rp];
          pa = (pa+1)%2;
        }
      }
    }
    $($("#main-container article>h3")[0]).after("<p>" + lins[l] + "</p>");    
  }
  //配图
  var coln = 12;
  for (var c=2;c<5;c++) {
    if (c>2) {coln = 6;}
    $("#vi").append(`
      <div class="col-${coln} animated fadeIn"><a class="img-link img-link-simple img-link-zoom-in img-lightbox">
        <img class="img-fluid" data-original="${cont[postid][6][c]}" src="${cont[postid][6][c]}" alt="${cont[postid][2]}">
      </a></div>`);
  }
  //图片查看器安装
  new Viewer($("#vi")[0],{});
  //底部按钮
  $($("article").next(".push").children("a")[0]).attr("href",cont[postid][4]);
  $($("article").next(".push").children("a")[1]).attr("href",cont[postid][5][4]);
  //下方推荐
  function comm(idd) {
    console.log("aaa" + idd)
    $(".content-boxed>.row.py-5").append(`
      <div class="col-md-4">
        <a class="block block-rounded block-link-pop overflow-hidden" href="./works.html?id=${idd}">
          <div class="bg-image" style="background-image: url('${cont[idd][0]}');">
            <div class="block-content bg-primary-dark-op">
              <h4 class="text-white mt-5 push">${cont[idd][2]}</h4>
            </div>
          </div>
          <div class="block-content block-content-full fs-sm fw-medium">
            <strong><span class="text-primary"></span> · ${cont[idd][1]}</strong>
          </div>
        </a>
      </div>`);
  }
  if (postid>0) {comm(postid-1);}
  if (postid+1<cont.length) {comm(postid+1);}
  if (postid+2<cont.length) {comm(postid+2);}
});