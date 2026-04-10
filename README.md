# Maltese - 动态桌面宠物 (Desktop Dynamic Pet)

一款基于 Electron 和 Node.js 构建的轻量级、无边框、背景完全透明的“动态桌面宠物”应用程序。通过在桌面上层悬浮显示您喜爱的动图（GIF），增加系统操作的趣味性和互动性。

## ✨ 核心特性 / Features

- **完全沉浸**：无边框窗口设计，完美将动态 GIF 融入系统桌面（支持任何背景透明的 GIF）。
- **点击互动**：鼠标单击小宠物可触发形态或动作的变化反馈。
- **自由拖拽**：鼠标左键按住可任意将其放置于屏幕的任何角落，不会被下层窗口遮挡。
- **开发者友好**：基于 **OpenSpec** 规范与 **TDD (测试测试驱动)** 进行系统化开发，所有核心事件均拥有完整的单元测试支持。

## 🚀 快速启动 / Getting Started

### 环境要求

在本机正常运行该项目，您需要安装 [Node.js](https://nodejs.org/)（推荐版本 16.x 以上）。

### 部署与运行

1. 克隆或下载本项目资料库：
   ```bash
   git clone git@github.com:voidspiral/maltese.git
   cd maltese
   ```

2. 安装所有依赖包：
   ```bash
   npm install
   ```

3. 启动桌面宠物：
   ```bash
   npm start
   ```

### 🎨 如何更换自己的桌面宠物？

项目根目录下所需放置的资源图片决定了桌宠最终的模样。
- 替换项目目录下的 `default.gif` 为您心仪的常态宠物动画。
- 替换项目目录下的 `clicked.gif` 为您在点击该宠物后希望呈现的互动动画。

*重新启动应用后，更换的动画即可生效。*

## 🛠️ 测试与开发 / Development

本项目严格基于 TDD 构建。无论是修改主进程架构还是渲染层的页面事件交互，你都可以随时启动测试进行防回归验证。

运行所有的测试用例：
```bash
npm run test
```

使用观察模式自动运行验证（适用于编写功能时）：
```bash
npm run test:watch
```

## 📄 许可证 / License

ISC License.
