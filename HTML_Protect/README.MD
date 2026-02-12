# HTML_Protect 前端网页保护

HTML_Protect是一个小巧的用于保护前端网页的js插件。

### 功能

1. 防止Ctrl+P打印
2. 防止长截图
3. 禁用鼠标右键
4. 禁止Ctrl组合键和F1~F12按键
5. 禁止iframe镜像
6. 添加Console-Ban项目限制开发人员工具的使用

### 使用方法

1. 在html文件中添加设置项 `<html_protect copyban="true" mouseright="true" f12="true" iframe="true" consoleban="1"></html_protect>`
2. 设置上面的选项，
  - copyban为防止Ctrl+P打印以及长截图，true/false
  - mouseright为禁用鼠标右键，true/false
  - f12为禁止Ctrl组合键和F1~F12按键，true/false
  - iframe为禁止iframe镜像，true/false
  - consoleban为引入Console-Ban，0为不引入，1为引入+默认设置初始化，2为仅引入，请自行在后面添加初始化代码，格式看 [README](https://github.com/fz6m/console-ban/blob/master/README.zh.md)
3. 引入本项目js文件

### 致谢

[防止Ctrl+P打印以及长截图](https://www.bilibili.com/video/BV1ka4y1m7iF/?share_source=copy_web&vd_source=7d469d0d16d77756a6002462e5742cc9)
[Console-Ban项目](https://github.com/fz6m/console-ban)

### 版权所有

Jerry 2026

https://jerry75.dpdns.org
