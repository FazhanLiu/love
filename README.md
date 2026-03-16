# 💕 个人表白网站

一个现代化、浪漫的个人表白网站，支持快速部署到 Netlify。

## ✨ 特性

- 🎨 现代化设计，动画效果丰富
- 📱 完美的响应式设计，支持所有设备
- 💌 自定义表白内容
- 🔗 一键分享功能（复制链接分享给微信、QQ等）
- 🚀 一键部署到 Netlify
- 📊 支持跟踪访客和回应

## 🚀 快速部署到 Netlify

### 方法一：直接上传（最简单）

1. 访问 [Netlify](https://netlify.com)
2. 注册或登录你的账户
3. 将整个 `love` 文件夹拖拽到 Netlify 的部署区域
4. 等待部署完成，你就会获得一个可分享的链接！

### 方法二：通过 GitHub（推荐）

1. 将本项目上传到 GitHub
2. 在 Netlify 中连接你的 GitHub 账户
3. 选择这个仓库
4. Netlify 会自动部署

### 方法三：使用 Netlify CLI

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy --prod
```

## ✏️ 自定义你的表白内容

编辑 `index.html` 文件中的以下部分：

### 1. 修改页面标题和元数据

```html
<meta property="og:title" content="💕 一份特别的告白">
<meta property="og:description" content="我有件重要的事想和你说...">
<title>💕 一份特别的告白</title>
```

### 2. 修改表白内容

找到这一部分并修改：

```html
<div class="letter-content">
    <p>亲爱的你，</p>
    <p>
        时光悄悄地过去，你的出现改变了我的生活。
        我想用这个特别的方式，向你诉说最真实的想法。
    </p>
    <!-- 继续修改你想说的话 -->
</div>
```

### 3. 修改问题文本（可选）

```html
<p class="question">你的答案是？</p>
```

## 🎨 自定义颜色和样式

编辑 `styles.css` 文件：

### 修改背景渐变色

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* 修改这些十六进制颜色代码 */
}
```

常用的渐变色组合：
- 粉红: `#FFB6C1` to `#FF69B4`
- 蓝色: `#4facfe` to `#00f2fe`
- 紫色: `#667eea` to `#764ba2`
- 红色: `#f093fb` to `#f5576c`

### 修改字体大小和颜色

搜索相关的 CSS 类并修改即可。

## 📊 添加分析（可选）

在 `index.html` 的 `</body>` 标签前添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 隐私和安全

- 此网站不会收集任何个人数据
- 所有交互都在客户端进行
- 访客的回应不会被保存或上传到任何服务器

## 💡 建议

- 在复制链接分享时，可以告诉对方这是一个特别的惊喜
- 选择一个浪漫的时刻分享这个链接
- 可以在自己的社交媒体上分享，制造一个特别的话题

## 📝 常见问题

**Q: 分享的链接会显示什么？**  
A: 对方打开链接后，会看到同样的表白页面。他们可以看到你的表白内容，并给出回应。

**Q: 能否看到别人的回应？**  
A: 目前没有后端数据库，回应只显示在对方的设备上。如果想追踪回应，需要添加后端服务。

**Q: 怎样更改域名？**  
A: 在 Netlify 的站点设置中修改域名配置。

## 🎁 使用建议

1. **制造惊喜** - 在特殊场合分享这个链接
2. **个性化** - 修改内容以适应你的风格
3. **分享时刻** - 选择一个浪漫的时段分享
4. **备份链接** - 获得链接后可以多次使用

---

祝你的表白圆满成功！❤️

如有问题，请检查浏览器控制台（按 F12）的错误信息。
