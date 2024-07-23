/**
 * 设置变量
 * 所有网站内容都在这里设置，无后台，请保证这个文件放在合适的直链储存
 * 下面的内容均为示例，请自行修改
 */


/**
 * CDN设置
 */

//主题CDN加速链接目录
//注意：越快的CDN就越费钱，请把下面的链接换成自己的CDN！如果没有条件的站长可以解压 CDN资源.7z 到当前目录下然后填./themes/$t$.min-5.6.css
//$t$代表主题名称，如amethyst
themecss = "https://pan.wike6.cn/assets/oneui/css/themes/$t$.min-5.5.css";

//主题自带插件CDN加速链接
//同上，如果没有条件的站长可以解压 CDN资源.7z 到当前目录下然后填./oneui.app.min-5.8.js
oneuiapp = ["./oneui.app.min-5.8.js"];



/**
 * 网站基础信息设置
 */

//网站标题
dctitle = "xx团队官网";

//网站关键字，用空格分隔
keywords = "xx团队 xx工作室";

//网站介绍
descrp = "xx团队的官网";

//网站图标
ico = "https://";

//备案号
beiancode = "无备案";

//添加板块：特点feature，一言hito，作品work，动态zone，成员member，联系contact，把不要的删除
modules = ["feature","hito","work","zone","member","contact","flinks"];

//防止XXS扒站
//true开启，false关闭
fxxs = true;

//IE浏览器提示
//true开启，false关闭
banie = true;



/**
 * 网站内容设置
 */

//团队名称
teamname = "xx团队";

//建立年份
teamday = "2022";

//网站左上角处名称
headtitle = "xx团队官网";

//网站顶端跳转按钮，每个数组内第一个元素为板块，第二个为font-awesome图标，第三个为名字
//第一个topd为首页，不可删除
headbuts = [["topd","fa fa-home","首页"],["work","fa fa-boxes-stacked","作品"],["member","fa fa-person-walking","成员"],["contact","fab fa-qq","联系"]];

//网站第一板块背景图URL
blk1bg = "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png";

//今日诗词
//如果jrsc内容为api，则调用今日诗词API，否则为所填内容
jrsc = "江天一色无纤尘，皎皎空中孤月轮。";

//网站第一板块子标题
blk1stitle = "Nothing";

//弹窗内容
//标题，文字(\n换行)
aler = ["欢迎~","你好鸭\n欢迎访问"];

//About模块内容
//首页图下面4个图标对应的文字
//按顺序依次填写font-awesome图标、标题、内容
aboutmod = [
  [
    "fa fa-boxes",
    "标题一",
    "内容一"
  ],
  [
    "fa fa-laptop-code",
    "标题二",
    "内容二"
  ],
  [
    "fa fa-cloud",
    "标题三",
    "内容三"
  ],
  [
    "fa fa-user-lock",
    "标题四",
    "内容四"
  ]
];

//联系方式设置
//目前只支持2个，可自己修改代码增加
//按顺序依次填写font-awesome图标、标题、链接
//邮箱请务必加前缀 mailto:
contacts = [
  [
    "fab fa-qq",
    "QQ群",
    "https://im.qq.com"
  ],
  [
    "fab fa-google",
    "邮箱",
    "mailto:xxx@example.com"
  ]
];




/**
 * 内容撰写
 */

//友链
//每个项依次写：图片URL，名称，简介，链接
flinks = [
  [
    "https://www.baidu.com/favicon.ico",
    "示例(百度1)",
    "懂得都懂",
    "https://baidu.com"
  ],
  [
    "https://www.baidu.com/favicon.ico",
    "示例(百度2)",
    "懂得都懂",
    "https://baidu.com"
  ]
];

//成员
//每个项依次写：背景图片URL，头像，名称，简介，联系方式[QQ号，网站，邮箱]
//无就留空
memb = [
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "https://q.qlogo.cn/headimg_dl?dst_uin=1814669296&spec=640",
    "XXX",
    "成员1",
    [
      "88888888",
      "https://baidu.com",
      "xxx@example.com"
    ]
  ],
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "https://q.qlogo.cn/headimg_dl?dst_uin=1814669296&spec=640",
    "XXX",
    "成员2",
    [
      "https://wpa.qq.com/msgrd?v=3&uin=888888&site=qq&menu=yes&jumpflag=1",
      "https://baidu.com",
      "xxx@example.com"
    ]
  ]
];

//动态
//每个项依次写：图片URL，时间，事件
zone = [
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2022-12-13",
    "事件1"
  ],
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2022-12-13",
    "事件2"
  ],
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2022-12-13",
    "事件3"
  ],
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2022-12-13",
    "事件4"
  ],
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2022-12-13",
    "事件5"
  ]
];

//作品
//最核心部分！！！
//每个项依次写：图片URL，时间，标题，简介，网址，[类型，价格，版本，状态(正常true异常false)，下载直链]，[内容背景，作品详细介绍，[图片3张]]
//作品详细介绍用\n换行，$s$xxx1$s$表示xxx1加粗，$i$xxx2$i$表示xxx2斜体，$m$xxx3$m$表示xxx3高亮，$d$xxx4$d$表示xxx4加删除线，
//$r$xxx5$r$表示xxx5红色，$b$xxx6$b$表示xxx6蓝色。
cont = [
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2023-12-13 14:15:16",
    "标题",
    "简介",
    "https://baidu.com",
    [
      "网站",
      "0",
      "1.0",
      false,
      "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
    ],
    [
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "$s$xxx1$s$表示xxx1加粗\n$i$xxx2$i$表示xxx2斜体\n$m$xxx3$m$表示xxx3高亮\n$d$xxx4$d$表示xxx4加删除线\n$r$xxx5$r$表示xxx5红色\n$b$xxx6$b$表示xxx6蓝色。",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png"
    ]  
  ],
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2023-12-18 14:15:16",
    "标题",
    "简介",
    "https://baidu.com",
    [
      "网站",
      "0",
      "1.0",
      false,
      "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
    ],
    [
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "$s$xxx1$s$表示xxx1加粗\n$i$xxx2$i$表示xxx2斜体\n$m$xxx3$m$表示xxx3高亮\n$d$xxx4$d$表示xxx4加删除线\n$r$xxx5$r$表示xxx5红色\n$b$xxx6$b$表示xxx6蓝色。",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png"
    ]  
  ],
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2023-12-23 14:15:16",
    "标题",
    "简介",
    "https://baidu.com",
    [
      "网站",
      "0",
      "1.0",
      false,
      "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
    ],
    [
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "$s$xxx1$s$表示xxx1加粗\n$i$xxx2$i$表示xxx2斜体\n$m$xxx3$m$表示xxx3高亮\n$d$xxx4$d$表示xxx4加删除线\n$r$xxx5$r$表示xxx5红色\n$b$xxx6$b$表示xxx6蓝色。",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
      "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png"
    ]  
  ]
];