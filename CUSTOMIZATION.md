# 🎨 个性化定制指南

## 快速自定义清单

这个文件列出了所有可以自定义的部分。跟着下面的步骤，让网站变成你自己的风格！

---

## 1️⃣ 修改基本信息

### 编辑这些文件：`index.html`

#### 修改页面标题

找到这行代码（第 5 行）：
```html
<title>💕 一份特别的告白</title>
```

改成你想要的标题，例如：
```html
<title>💌 送给小美的话</title>
```

#### 修改页面元数据（分享时显示）

找到这些代码（第 6-8 行）：
```html
<meta property="og:title" content="💕 一份特别的告白">
<meta property="og:description" content="我有件重要的事想和你说...">
<meta property="og:image" content="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500">
```

改成：
```html
<meta property="og:title" content="💌 送给小美的话">
<meta property="og:description" content="小美，今天我想好好和你说说心里话...">
<meta property="og:image" content="https://images.unsplash.com/你喜欢的图片链接">
```

#### 修改欢迎页面

找到这部分（第 15-21 行）：
```html
<div id="startScreen" class="screen active">
    <div class="greeting-box">
        <h1 class="title">✨ 亲爱的你 ✨</h1>
        <p class="subtitle">我想和你分享一些话...</p>
        <button class="btn btn-primary" onclick="startConfession()">点击继续</button>
    </div>
</div>
```

改成你想要的内容，例如：
```html
<div id="startScreen" class="screen active">
    <div class="greeting-box">
        <h1 class="title">💕 亲爱的小美 💕</h1>
        <p class="subtitle">有件重要的事我一直想和你说...</p>
        <button class="btn btn-primary" onclick="startConfession()">准备好了吗？</button>
    </div>
</div>
```

---

## 2️⃣ 修改表白核心内容

### 编辑这些文件：`index.html`

找到这部分（第 27-58 行）：
```html
<div class="letter-content">
    <p>亲爱的你，</p>
    <p>
        时光悄悄地过去，你的出现改变了我的生活。
        我想用这个特别的方式，向你诉说最真实的想法。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        你知道吗？每一次与你的对话，
        都让我期待下一次的见面。
        你的笑容温暖了我的每一个日子。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        自定义这里的内容，添加你想说的话...
        <br><br>
        <em>修改 index.html 中 letter-content 部分</em>
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        所以，我想问你——
        <br>
        你愿意陪伴我吗？❤️
    </p>
</div>
```

### 示例 1：热情风格

```html
<div class="letter-content">
    <p>亲爱的小美，</p>
    <p>
        每当看到你，我的心都会不由自主地加速。
        你的一颦一笑，都在我心里留下了深深的烙印。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        还记得我们第一次见面吗？
        那一刻，我就知道你对我有特别的意义。
        你的温柔、你的聪慧、你的笑容，
        都让我深深地喜欢上了你。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        我想要每天都看到你的笑脸，
        想要陪你度过每一个季节的变化，
        想要在你需要时那个依靠。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        所以，你愿意给我这个机会吗？
        <br>
        让我成为那个最特别的人？❤️
    </p>
</div>
```

### 示例 2：温柔风格

```html
<div class="letter-content">
    <p>亲爱的你，</p>
    <p>
        认识你是我最幸运的事。
        在这段时光里，你无言地教会了我什么是珍惜。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        你说过的每一句话，我都记在心里。
        你做过的每一件事，我都看在眼里。
        你的存在，让我的世界变得更加温暖和明亮。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        我不需要轰轰烈烈的承诺，
        只想陪你一起静静地看风景，
        慢慢变老。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        你愿意让我成为你身边最温暖的陪伴吗？❤️
    </p>
</div>
```

### 示例 3：幽默风格

```html
<div class="letter-content">
    <p>亲爱的朋友，</p>
    <p>
        我得坦白一个秘密：
        最近我发现了一个问题——只要没看到你，我就睡不好觉。
        所以我决定找你商量一下解决方案。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        医生说这叫"单方面的执着"。😄
        让我翻译一下专业术语的意思：我超级喜欢你。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        所以我想约你一个很长很长的约会——
        从明天到未来的每一天。
        包吃包住，还有源源不断的陪伴。
    </p>
    
    <div class="heart-divider">❤️</div>
    
    <p>
        你有兴趣吗？💕
    </p>
</div>
```

---

## 3️⃣ 修改问题部分

### 编辑这些文件：`index.html`

找到这部分（第 60-70 行）：
```html
<div class="question-box">
    <p class="question">你的答案是？</p>
    <div class="button-group">
        <button class="btn btn-yes" onclick="respondYes()">❤️ 愿意 ❤️</button>
        <button class="btn btn-maybe" onclick="respondMaybe()">💭 考虑中</button>
        <button class="btn btn-no" onclick="respondNo()">😅 不好意思</button>
    </div>
</div>
```

修改问题文本和按钮，例如：
```html
<div class="question-box">
    <p class="question">所以，你的决定是？</p>
    <div class="button-group">
        <button class="btn btn-yes" onclick="respondYes()">❤️ 我也喜欢你 ❤️</button>
        <button class="btn btn-maybe" onclick="respondMaybe()">💭 让我想想</button>
        <button class="btn btn-no" onclick="respondNo()">😅 抱歉，需要时间</button>
    </div>
</div>
```

---

## 4️⃣ 修改相应内容

### 编辑这些文件：`script.js`

找到这部分（第 57-100 行）：
```javascript
const responses = {
    yes: {
        emoji: '🎉',
        title: '太好了！',
        messages: [
            '你的同意让我多么开心！',
            '从这一刻起，我们开始了一段新的故事。',
            '感谢你愿意相信我，愿意与我共同走向未来。',
            '让我们一起创造美好的回忆吧！❤️'
        ]
    },
    maybe: {
        emoji: '💭',
        title: '我会等你',
        messages: [
            '没关系，我理解你的想法。',
            '我会用行动证明自己的真心，',
            '希望有一天能获得你的肯定。',
            '无论如何，感谢你的诚实。💙'
        ]
    },
    no: {
        emoji: '😔',
        title: '尊重你的决定',
        messages: [
            '虽然有些失落，但我尊重你的选择。',
            '认识你已经是件幸福的事了。',
            '希望你能找到最适合的人。',
            '祝福你的未来会更加美好！💛'
        ]
    }
};
```

修改成你想要的内容，例如：
```javascript
const responses = {
    yes: {
        emoji: '🎉🎉🎉',
        title: '耶！我们在一起了！',
        messages: [
            '你不知道这一刻对我有多重要！',
            '我发誓会好好对你，让你开心每一天。',
            '从现在开始，你就是我最重要的人。',
            '让我们一起走向幸福的未来吧！💕💕💕'
        ]
    },
    ...
};
```

---

## 5️⃣ 修改颜色和样式

### 编辑这些文件：`styles.css`

#### 修改主题颜色（背景渐变）

找到这部分（第 16 行）：
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

更改颜色代码，选择你喜欢的配色：

**粉红系**：
```css
background: linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%);
```

**蓝色系**：
```css
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

**红色系**：
```css
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

**绿色系**：
```css
background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
```

**橙色系**：
```css
background: linear-gradient(135deg, #fbb034 0%, #ffdd00 100%);
```

#### 修改文本颜色

找到标题颜色（第 64 行）：
```css
.title {
    color: #667eea;
}
```

改成你想要的颜色。常用颜色代码：
- 红色: `#d63031`
- 粉红: `#ff6b9d`
- 蓝色: `#0984e3`
- 紫色: `#6c5ce7`
- 绿色: `#00b894`

#### 修改按钮样式

找到是按钮部分：
```css
.btn-yes {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

改成你喜欢的颜色。

---

## 6️⃣ 修改分享文本

### 编辑这些文件：`index.html`

找到分享部分（第 75-88 行）：
```html
<div class="share-section">
    <p class="share-text">想把这个页面分享给朋友吗？</p>
    <div class="share-buttons">
        <button class="share-btn" onclick="shareOnWeChat()" title="分享到微信">
            <span>📱</span> 微信
        </button>
        ...
    </div>
</div>
```

修改分享文本：
```html
<div class="share-section">
    <p class="share-text">觉得这个表白很特别？分享给你的朋友吧！</p>
    ...
</div>
```

---

## 7️⃣ 修改表情符号

你可以在页面的任何地方修改表情符号：

**常用表情代码：**
- 💕 `&#128149;` 或直接用 `💕`
- 💖 `💖`
- 💗 `💗`
- ❤️ `❤️`
- 🎉 `🎉`
- 🎊 `🎊`
- 🌹 `🌹`
- 💐 `💐`
- 🌙 `🌙`
- ⭐ `⭐`
- ✨ `✨`

---

## 8️⃣ 完整示例：自定义一个新网站

假设你要为朋友"小王"创建一个表白网站，步骤如下：

### 步骤 1：修改基础信息

在 `index.html` 中修改：
```html
<title>💌 送给小王的话</title>
<meta property="og:title" content="💌 送给小王的话">
<h1 class="title">💕 亲爱的小王 💕</h1>
```

### 步骤 2：修改表白内容

```html
<p>亲爱的小王，</p>
<p>
    相识这么久，你早就成为了我生活中最重要的部分。
    今天，我想用这个特别的方式，好好和你说说心里话。
</p>
```

### 步骤 3：修改主题颜色

在 `styles.css` 中修改：
```css
background: linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%);
```

### 步骤 4：修改回应内容

在 `script.js` 中修改响应文本。

### 步骤 5：上传到 Netlify

按照 `NETLIFY_DEPLOYMENT.md` 的步骤上传。

---

## 📝 提示

1. **保持备份**：修改前复制原文件内容
2. **小步修改**：一次只改一个部分，然后在浏览器中预览
3. **使用开发工具**：按 F12 打开开发者工具，可以实时看到修改效果
4. **测试链接**：修改完后在不同设备上测试链接（手机、电脑等）

---

## 🎨 更多创意想法

- 添加背景音乐（需要修改 HTML）
- 添加图片（修改 og:image 或在内容中添加 `<img>` 标签）
- 添加视频（在 `letter-content` 中添加 `<video>` 标签）
- 添加倒计时（修改 JavaScript）
- 添加烟火效果（添加额外的 JavaScript 库）

有想法可以尝试实现！祝你创意无限！✨

