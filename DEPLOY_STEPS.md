# 🚀 Vercel 前端自动部署指南

## 📋 部署步骤

### 第一步：访问 Vercel 官网

1. 打开 https://vercel.com
2. 点击右上角 "Sign Up"
3. 选择 "Continue with GitHub"
4. 授权 Vercel 访问你的 GitHub

### 第二步：导入项目

1. 登录 Vercel 后，点击 "Add New" → "Project"
2. 在列表中找到 `ss3025498/-` 仓库
3. 点击 "Import"

### 第三步：配置项目

**在导入页面配置以下信息：**

| 配置项 | 值 |
|------|----|
| Framework | React |
| Root Directory | client |
| Build Command | npm run build |
| Output Directory | build |
| Install Command | npm install |

### 第四步：设置环境变量（可选）

1. 在 Vercel 项目中，进入 "Settings" → "Environment Variables"
2. 添加以下变量：

```
REACT_APP_API_URL=https://your-backend-api.com
```

### 第五步：部署

1. 点击 "Deploy" 按钮
2. 等待自动构建（2-3分钟）
3. 完成！你的应用现在已上线 🎉

## ✅ 部署完成

- **访问地址**：`https://xxx.vercel.app`
- **自动部署**：每次推送到 `main` 分支都会自动部署
- **预览链接**：PR 会自动生成预览链接

## 🔗 自定义域名（可选）

1. 在 Vercel 项目设置中找到 "Domains"
2. 点击 "Add Domain"
3. 输入你的域名
4. 按照提示配置 DNS 记录

## 📊 监控和日志

- **部署历史**：Vercel Dashboard → Deployments
- **实时日志**：点击具体部署查看构建过程
- **错误排查**：查看 "Build Logs" 和 "Runtime Logs"

## 🎯 常见问题

### 构建失败？
- 检查 Root Directory 是否设置为 `client`
- 查看构建日志找到具体错误
- 确保所有依赖都在 `package.json` 中

### 页面刷新显示 404？
- 这是因为 React 路由问题
- Vercel 已配置 `vercel.json` 自动处理
- 清除浏览器缓存重试

### 连接后端 API？
- 更新 `REACT_APP_API_URL` 环境变量
- 确保后端服务器支持 CORS

## 📞 获取帮助

- Vercel 文档：https://vercel.com/docs
- GitHub Issues：提交问题
- Vercel 支持：https://vercel.com/support

---

**部署成功后，你可以：**
- ✅ 分享你的应用链接
- ✅ 使用自定义域名
- ✅ 配置 SSL 证书（自动）
- ✅ 监控应用性能
