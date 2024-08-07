﻿# Glow Team 团队官网

Glow Team是一款适用于团队、工作室等官网的模板。

### 前言

本项目灵感来自Coco-Team，但是Coco-Team是个收费项目，我查看Demo后发现它使用的是一个oneui模板，便花一周的时间制作了这个Glow Team，大致界面模仿Coco，但纯前端实现。

~~如果你觉得这样做侵权了，那么谷歌是不是早可以起诉鸿蒙了？~~

### 特点

在Coco-Team的基础上做如下优化：

1. 纯前端实现所有功能，优点包括：
   - 提高访问速度：无需PHP后台处理，访问速度极快
   - 网站更加安全：纯静态页面可以避免PHP相关漏洞，减少攻击，防SQL注入，修改内容也在源码里实现，不存在盗号进后台乱改数据库等风险
   - 提升网站稳定性：不会因后台程序、数据库等出现错误而影响网站的访问
   - 方便部署：无需服务器，可以部署在几乎所有静态托管平台
2. 代码文件简化：Coco-Team2.2版有357个代码文件，而Glow Team只有6个
3. 功能添加：添加动态、跳转、友链等新功能
4. 替换magnific-popup为功能更强的viewjs
5. 开源静态资源使用公共CDN，oneui相关资源支持自定义CDN

### 使用方法

1. 首先，你需要一点编程基础，比如，你得知道数组这个数据格式
2. 下载本仓库文件
3. 打开env.js
4. 根据注释提示配置env.js内容
5. 修改env.js后上传所有文件到托管的地方(服务器，静态平台均可)
6. 所有内容都只需在env.js内配置，基本包含Coco-Team的90%以上设置项
7. 你也可以单独把配置env.js放到直链网盘里，然后在`works.html`和`index.html`里修改引用的地址

### 版权所有

Jerry 2024

https://jerry.000708.xyz