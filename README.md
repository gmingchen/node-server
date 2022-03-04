<p align="center">
  <a href="https://github.com/nodejs/node">
    <img src="https://img.shields.io/badge/node-brightgreen.svg">
  </a>
  <a href="https://www.koajs.com.cn/">
    <img src="https://img.shields.io/badge/koa2-2.13.4-brightgreen.svg">
  </a>
  <a>
    <img src="https://img.shields.io/badge/mysql-2.18.1-brightgreen.svg">
  </a>
  <a href="https://www.gulpjs.com.cn/">
    <img src="https://img.shields.io/badge/gulp-4.0.2-brightgreen.svg">
  </a>
</p>

### 简介
[node-server](https://github.com/gmingchen/node-server)主要目的在于学习使用 __`node`__ 写后端服务，是基于 ___`koa2`___ 、 ___`koa-router`___ 、 ___`mysql`___ 等实现的后端服务。并使用 ___`gulp`___ 和 ___`gulp-nodemon`___ 实现了热加载功能。后续还会加入参数验证等功能，持续更新。内置了单表的增删改查的例子，启动服务后访问 http://localhost:8000/pages 即可查看。

<img src="http://oss.gumingchen.icu/image/node-server-demo.jpg">

### 项目结构

```bash
src
├─main
│  ├─router # 路由主要配置
│  ├─utils # 工具模块
│  │  ├─constant.js # 常量
│  │  ├─filter.js # 过滤器
│  │  ├─mysql.js # 数据库工具 连接 处理
│  │  ├─page.js # 分页结果封装类
│  │  ├─response.js # 响应结果封装类
│  │  └─index.js # 常用工具
│  ├─modules # 主要业务模块
│  │  ├─user # 用户
│  │  │  ├─dao # 数据处理层
│  │  │  ├─service # 服务层
│  └─ └─ └─controller # 路由
│
├─resources
│  ├─env # 环境配置模块
│  │  ├─development.js # 开发环境配置
│  │  ├─production.js # 生产环境配置
│  │  └─index.js # 环境配置出口
│  ├─static # 静态资源
│  │  ├─files # 文件上传路径
│  └─ └─pages # Demo页面
└─application.js # 主入口启动文件
```

### 开发

```bash
# 克隆项目
git clone https://github.com/gmingchen/node-server.git

# 进入项目目录
cd node-server

# 安装依赖
npm install

# 安装数据库

# 修改 src/resources/env 文件夹下的数据库相关配置

# 启动服务
npm run hot   # 开发环境-热加载
npm run dev   # 开发环境
npm run prod  # 正式环境

# http://localhost:8000/pages Demo页
```

### 联系方式

<table>
  <tr align="center">
    <td>公众号</td>
    <td>QQ交流群</td>
    <td>微信交流群</td>
    <td>微信</td>
    <td>QQ</td>
  </tr>
  <tr>
    <td>
      <img src="http://oss.gumingchen.icu/image/official-account-qr-code.jpg" width="200px" title="公众号" alt="公众号:loafer-man" />
    </td>
    <td>
      <img src="http://oss.gumingchen.icu/image/qq-group-qr-code.jpg" width="200px" title="QQ交流群" alt="QQ交流群:124371554" />
    </td>
    <td>
      <img src="http://oss.gumingchen.icu/image/wechat-group-qr-code.jpg?time=1" width="200px" title="微信交流群" alt="微信交流群:124371554" />
    </td>
    <td>
      <img src="http://oss.gumingchen.icu/image/wechat-qr-code-1.jpg" width="200px" title="微信" alt="微信:Gy1240235512" />
    </td>
    <td>
      <img src="http://oss.gumingchen.icu/image/qq-qr-code.jpg" width="200px" title="QQ" alt="QQ:1240235512" />
    </td>
  </tr>
</table>

### 其它开源项目

[java-admin-base](https://github.com/gmingchen/java-admin-base)

是一个管理后台基础功能框架 [base-refactoring](https://github.com/gmingchen/vue3-element-plus-admin/tree/base-refactoring) 分支的后端代码，基于 __`java`__ 的 __`springboot`__

[vue3-element-plus-im](https://github.com/gmingchen/vue3-element-plus-im)

是一个即时聊天系统，基于 [vue3](https://github.com/vuejs/vue-next) 、 [element-plus](https://github.com/element-plus/element-plus) 实现。内置了好友私聊功能。

[java-im](https://github.com/gmingchen/java-im)

是[vue3-element-plus-im](https://github.com/gmingchen/vue3-element-plus-im)即时聊天系统的 __`java`__ 后端代码，__`springboot`__ 基于 [netty](https://github.com/netty/netty) 、 [shiro](https://github.com/apache/shiro) 实现。
