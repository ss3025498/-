# Vercel 前端部署指南

## 自动部署步骤

### 1️⃣ 连接 GitHub 到 Vercel

1. 访问 https://vercel.com
2. 点击 "Sign Up" → 选择 "Continue with GitHub"
3. 授权 Vercel 访问你的 GitHub 账户

### 2️⃣ 导入项目

1. 在 Vercel 仪表板，点击 "Add New" → "Project"
2. 选择 `ss3025498/-` 仓库
3. 点击 "Import"

### 3️⃣ 配置项目

**Build Settings:**
- Framework Preset: `Create React App`
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

**Root Directory:** `client`

### 4️⃣ 环境变量

在 Vercel 项目设置中添加：

```
REACT_APP_API_URL=https://your-backend-api.com
```

### 5️⃣ 部署

点击 "Deploy" 按钮，等待自动构建和部署。

## 📝 部署完成后

- ✅ 你的应用将在 `https://xxx.vercel.app` 上线
- ✅ 每次推送到 `main` 分支都会自动部署
- ✅ PR 会自动生成预览链接

## 🔧 后续配置

1. **自定义域名**：在 Vercel 项目设置中添加你的域名
2. **环境变量**：更新后端 API 地址
3. **SSL/HTTPS**：Vercel 自动提供

## ✨ 快速命令

在本地测试构建：
```bash
cd client
npm run build
npx serve -s build
```

## 📚 更多帮助

- Vercel 文档: https://vercel.com/docs
- React 部署指南: https://create-react-app.dev/deployment/vercel/
