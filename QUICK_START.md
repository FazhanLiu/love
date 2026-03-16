# 🚀 快速开始指南

欢迎使用个人表白网站！这是一份 2 分钟的快速上手指南。

## 📂 文件结构

```
love/
├── index.html              # 主页面（核心文件）
├── styles.css              # 样式文件（外观）
├── script.js               # 交互脚本（功能）
├── netlify.toml            # Netlify 配置
├── package.json            # 项目配置
├── .gitignore              # Git 忽略文件
├── README.md               # 项目说明
├── NETLIFY_DEPLOYMENT.md   # 详细部署指南
├── CUSTOMIZATION.md        # 完整定制指南
└── QUICK_START.md          # 本文件
```

---

## ⚡ 3 步快速部署

### 1️⃣ 本地编辑（可选）

打开 `index.html`，修改表白内容：

```html
<p>亲爱的你，</p>
<p>
    这里改成你想说的话...
    你可以表达你的感情、理由或期望。
</p>
```

**💡 提示**：可以参考 [CUSTOMIZATION.md](CUSTOMIZATION.md) 了解更多自定义选项。

### 2️⃣ 上传到 Netlify

**方法最简单**：打开 https://netlify.com，把 `love` 文件夹拖拽上去！

![Netlify 拖拽说明](https://imgur.com/example.png)

**需要详细步骤？** → 查看 [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md)

### 3️⃣ 分享链接

部署完成后，你会得到一个 URL，例如：
```
https://love-confession-12345.netlify.app
```

直接复制这个链接分享给朋友就可以了！

---

## 🎨 常见自定义

### 改变主色调

编辑 `styles.css`，第 16 行：
```css
/* 改成你喜欢的颜色组合 */
background: linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%);
```

**颜色方案**：
- 粉红: `#FFB6C1` 到 `#FF69B4`
- 蓝色: `#4facfe` 到 `#00f2fe`
- 红色: `#f093fb` 到 `#f5576c`
- 紫色: `#667eea` 到 `#764ba2`

### 改变表白内容

编辑 `index.html`，找到这部分：
```html
<div class="letter-content">
    <!-- 你的表白内容放这里 -->
</div>
```

### 改变按钮文字

编辑 `index.html`，找到这部分：
```html
<button class="btn btn-yes" onclick="respondYes()">❤️ 愿意 ❤️</button>
```

### 改变回应内容

编辑 `script.js`，找到 `responses` 对象并修改。

---

## 📱 测试网站

打开 `index.html` 文件即可在浏览器中测试：
1. 用浏览器打开文件（双击或右键 → 打开方式）
2. 点击"点击继续"查看表白内容
3. 选择回应按钮测试功能

---

## ❓ 常见问题

**Q: 如何修改分享的标题？**  
A: 编辑 `index.html` 第 5 行的 `<title>` 标签。

**Q: 怎么添加背景音乐？**  
A: 在 `index.html` 的 `<body>` 标签内添加：
```html
<audio autoplay loop>
    <source src="music.mp3" type="audio/mpeg">
</audio>
```

**Q: 链接可以多次使用吗？**  
A: 可以！你可以把同一个链接分享给多个朋友。

**Q: 对方的回应会被保存吗？**  
A: 不会。回应只在对方的设备上显示。

**Q: 怎么更新网站内容？**  
A: 修改文件后重新上传到 Netlify 即可。

---

## 🎯 自定义清单

- [ ] 修改表白标题
- [ ] 修改表白内容
- [ ] 选择主题颜色
- [ ] 修改按钮文字（可选）
- [ ] 修改回应内容（可选）
- [ ] 本地测试
- [ ] 上传到 Netlify
- [ ] 获取分享链接
- [ ] 分享给朋友

---

## 📚 更多资源

- **完整定制指南**: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **详细部署指南**: [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md)
- **项目说明**: [README.md](README.md)

---

## 💡 创意建议

1. **特殊场合**：在生日、纪念日等特殊时刻分享
2. **私密分享**：只分享给特定的人
3. **社交媒体**：在朋友圈、微博等分享预告
4. **截图分享**：截图分享给朋友看

---

## ⏰ 预计时间

- 编辑内容：5-10 分钟
- 上传到 Netlify：1-2 分钟
- 总计：**10-15 分钟**

---

现在就开始吧！祝你的表白圆满成功！🎉❤️

有任何问题？
- 查看 [CUSTOMIZATION.md](CUSTOMIZATION.md) 了解更多自定义选项
- 查看 [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md) 了解部署问题
