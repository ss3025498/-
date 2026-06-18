# SP Matrix 创作助手 - AI Content Creation Platform

一个完整的AI内容创作平台，支持文本、配音、视频等多种内容创作方式。

## 功能特性

- 👤 用户认证系统
- 🎬 AI文本创作
- 🔊 AI配音服务
- 🎥 视频生成
- 💰 积分系统和充值
- 📊 用户仪表板
- 🎨 多种AI模型选择

## 快速开始

### 前置要求
- Node.js >= 14
- MongoDB

### 安装

```bash
git clone https://github.com/ss3025498/-
cd -
npm install
cd client && npm install
cd ..
```

### 开发

```bash
npm run dev
```

访问 http://localhost:3000

### 生产部署

```bash
npm run build
npm start
```

## 项目结构

```
.
├── server/           # 后端代码
├── client/           # 前端代码
├── .env.example      # 环境变量示例
└── README.md
```

## 环境配置

复制 `.env.example` 为 `.env` 并填入你的配置：

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_api_key
PORT=5000
```
