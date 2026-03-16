# 🚀 Netlify 部署完全指南

## 快速开始（3 分钟部署）

### 第一步：访问 Netlify

1. 打开 https://netlify.com
2. 点击右上角 **"Sign up"** 注册账户
3. 选择 **"Email"** 或使用 GitHub/Google 账户登录

### 第二步：部署网站

#### 方案 A：直接拖拽上传（最简单 ⭐）

1. 在 Netlify 仪表板上，找到 **"Drag and drop your site output folder here"** 区域
2. 将整个 `love` 文件夹拖拽到这个区域
3. 等待上传完成（通常 5-10 秒）
4. 你会看到一个随机生成的域名，例如：`https://random-name-12345.netlify.app`

#### 方案 B：通过 GitHub（推荐有经验的用户）

1. 将项目推送到 GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/love.git
   git push -u origin main
   ```

2. 在 Netlify 中点击 **"New site from Git"**
3. 选择 GitHub 并授权
4. 选择你的 `love` 仓库
5. Netlify 会自动部署，以后每次 push 都会自动更新

### 第三步：获取可分享的链接

1. 部署完成后，你会看到一个格式如 `https://random-name-xxxxx.netlify.app` 的 URL
2. 这就是你可以分享给朋友的表白链接！
3. 复制这个链接分享到微信、QQ、微博等

---

## 自定义域名（可选）

如果你想要一个更个性化的域名，比如 `love.example.com`：

1. 在 Netlify 站点设置中找到 **"Domain settings"**
2. 点击 **"Add custom domain"**
3. 输入你想要的域名
4. 按照 Netlify 的指示修改 DNS 设置
5. 等待 DNS 生效（通常 24 小时内）

---

## 更新网站内容

### 如果使用拖拽上传

1. 修改文件后，重新拖拽整个 `love` 文件夹到 Netlify
2. 几秒钟后更新完成

### 如果使用 GitHub

1. 在本地修改文件
2. 运行以下命令：
   ```bash
   git add .
   git commit -m "更新表白内容"
   git push
   ```
3. Netlify 会自动检测到变化并重新部署

---

## 使用自定义域名后的完整 URL

部署成功后，你的表白网站会有这样的 URL 结构：

- **Netlify 默认域名**：`https://mysite.netlify.app`
- **自定义域名**：`https://yourdomain.com`
- **子路径**（如果需要）：`https://yourdomain.com/love`

分享链接时，可以是：
- 完整链接：`https://mysite.netlify.app/?message=special`
- 短链接：可以使用短链服务进一步缩短

---

## 常见问题排查

### 问题 1：上传后页面显示 404

**解决方案**：
- 确保 `index.html` 文件在根目录
- 检查 `netlify.toml` 配置
- 清除浏览器缓存（Ctrl+Shift+Delete）

### 问题 2：样式没有加载

**解决方案**：
- 检查 `styles.css` 文件是否在同一目录
- 刷新页面并清除缓存
- 打开浏览器开发工具（F12）查看错误

### 问题 3：Javascript 功能不工作

**解决方案**：
- 检查 `script.js` 文件是否存在
- 打开浏览器控制台（F12 → Console）查看错误信息
- 确保没有 CORS 相关的问题

### 问题 4：无法复制链接

**解决方案**：
- 使用最新的浏览器
- 尝试使用不同的浏览器
- 手动复制 URL 地址栏的链接

---

## 性能优化（可选）

### 启用 CDN 加速

Netlify 默认使用全球 CDN，你的网站会在全球各地快速加载。

### 启用预留部署

1. 在 Netlify 设置中找到 **"Deployment"**
2. 启用 **"Deploy previews"**
3. 这样每次提交都会生成预览链接

---

## 分享建议

### 微信分享

```
标题：💕 亲爱的你，有件重要的事想和你说...
描述：点击进去看看吧！
链接：你的 Netlify URL
```

### QQ 分享

```
标题：💌 特别的某人
链接：你的 Netlify URL
```

### 微博/小红书

```
正文配图：
"用一个的特别的方式，和你说一些重要的话...
[链接]"
```

---

## 更多功能扩展

### 添加访客计数
在 `index.html` 中添加访客计数器服务：
- [Visitor Count](https://www.visitorcounter.net/)
- [StatCounter](https://statcounter.com/)

### 添加分析统计
- [Google Analytics](https://analytics.google.com/)
- [Netlify Analytics](https://www.netlify.com/products/analytics/)

### 添加表单反馈
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Formspree](https://formspree.io/)

---

## 获取帮助

- Netlify 官方文档：https://docs.netlify.com/
- 常见问题：https://support.netlify.com/
- 社区论坛：https://community.netlify.com/

---

祝你的表白顺利！🎉❤️

有任何问题,都可以在 Netlify 官网与他们的客服联系！
