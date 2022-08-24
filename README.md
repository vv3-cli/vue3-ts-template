# vue3 template

一个 Vue3 + TS + Vite3.0 + Axios + VueRouter 项目模板。


## 有点用的小特性

1. 这个是 **Vue3.2**的模板
2. **Vite** 配置完成可以直接使用
3. **ESlint+Prettier** 已经配置完成
4. Git**提交规范** husky配置完成
5. 封装集成 **axios** 
6. 实现基础路由，页面自带请求



## 下载项目

本项目支持通过vv3-cli脚手架来安装，脚手架目前提供 vue3-ts-template，vue3-template 两种模板都集成基础功能vue3 vite3 vue-router axios  eslint



方式二：使用 `git clone` 命名，命令如下：
```bash
git clone https://github.com/vv3-cli/vue3-ts-template.git
```



## 启动项目

这里我使用的包管理工具时npm，node版本大于 `16.16.0`。


1. 安装依赖
```bash
npm install # 或者 npm i 或者 yarn
```
2. 开发过程
```bash
npm run start # 运行

```
3. 打包编译

```bash
npm run build   # 打包正式环境
npm run build:test # 打包测试环境
npm run build:stag # 打包预发布环境
```

5. eslint代码规范

```bash
npm run lint
```





## 使用说明

1. 项目环境

- [本地](./build/.env.dev.local)
- [测试](./build/env.development)
- [预发布](./build/env.staging)
- [正式](./build/env.production)

```bash
VITE_APP_ENV # 项目环境  local test  stag prod
VITE_APP_API_URL # 后端api接口 
VITE_APP_PUBLIC_PATH  #项目静态资源path
```
2. vite 配置
- 获取当前环境
```bash 
const env = loadEnv(mode, resolve(__dirname, "build"));
```
- 静态资源打包

```bash
 output: {
                    chunkFileNames: `static/js/${time}-[hash].js`,
                    entryFileNames: `static/js/${time}-[hash].js`,
                    assetFileNames(chunkInfo) {
                        // 打包分类路径 图片 images   字体 fonts   其他
                        if (/\.(png|jpg|gif|svg)/.test(RegExp(chunkInfo.name) as any)) {
                            return "static/images/[hash].[ext]";
                        } else if (
                            /\.(woff|woff2|eot|ttf|otf)/.test(RegExp(chunkInfo.name) as any)
                        ) {
                            return "static/fonts/[hash].[ext]";
                        } else if (/\.(css|less|scss)/.test(RegExp(chunkInfo.name) as any)) {
                            return `static/css/${time}-[hash].[ext]`;
                        }
                        return "static/other/[hash].[ext]";
                    }
                }
```
- 本地开发代理

```bash
 server: {
            host: "0.0.0.0",
            port: 9527,
            open: true,
            proxy: {
                "/api": {
                    target: "https://mock.apifox.cn",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, "")
                }
            }
        }
```

## 本项目 git Commit message 统一规范


常用的修改项

- feat: 增加新功能
- fix: 修复问题/BUG
- style: 代码风格相关无影响运行结果的
- perf: 优化/性能提升
- refactor: 重构
- revert: 撤销修改
- test: 测试相关
- docs: 文档/注释
- chore: 依赖更新/脚手架配置修改等
- ci: 持续集成

## 🍚License

vue3--ts-template is open source software licensed as [MIT](./LICENSE)

## 结尾

本项目可以免费使用，如果本项目对您有帮助的话，麻烦给个 star 鼓励下~