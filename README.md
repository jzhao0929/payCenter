# made by jzhao.

# 项目启动步骤

## 项目启动
1.在本地建立文件夹，例如：payCenter；

2.将该项目拉取到本地文件夹“payCenter”中；

3.设置依赖包拉取镜像源：

  a.在文件夹“payCenter”中运行cmd;
  
  b.使用以下命令进行依赖包镜像源查看：
  ```
  npm config get registry
  ```
  c.使用以下命令进行依赖包镜像源设置：
  ```
  npm config set registry https://registry.npm.taobao.org
  ```
3.运行如下命令进行依赖包的拉取：
```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
