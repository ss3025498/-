# SP Matrix 创作助手 - AI Content Creation Platform

一个完整的AI内容创作平台，支持文本、配音、视频等多种内容创作方式。

## 功能特性

- 👤 用户认证系统
- 🎬 AI文本创作
- 🎙️ AI配音服务
- 📹 视频导入和处理
- 💰 积分系统和充值
- 👥 用户仪表板
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
│   ├── index.js      # 服务器入口
│   └── routes/       # API路由
├── client/           # 前端代码
│   ├── public/       # 静态文件
│   └── src/          # React源代码
├── .env.example      # 环境变量示例
└── package.json      # 项目依赖
```

## 环境配置

复制 `.env.example` 为 `.env` 并填入你的配置：

```
MONGODB_URI=mongodb://localhost:27017/sp-matrix
JWT_SECRET=your_secret_key
AI_API_KEY=your_ai_api_key
PORT=5000
```

## API文档

### 认证
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录

### 用户
- `GET /api/users/profile` - 获取用户资料
- `GET /api/users/stats` - 获取用户统计

### 项目
- `POST /api/projects` - 创建项目
- `GET /api/projects` - 获取所有项目
- `GET /api/projects/:id` - 获取项目详情

### 积分
- `GET /api/points/packages` - 获取积分套餐
- `GET /api/points/balance` - 获取用户余额
- `POST /api/points/purchase` - 购买积分
- `POST /api/points/redeem` - 兑换码兑换

## 许可证

MIT
