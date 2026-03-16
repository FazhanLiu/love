// ===== 全局变量 =====
let difficulty = 'normal';
let musicPlaying = false;
let heartRaining = false;
let darkMode = false;
let visitCount = localStorage.getItem('visitCount') || 0;

// ===== 访客计数 =====
function updateVisitCount() {
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitorCount').textContent = visitCount;
}

// ===== 音乐控制 =====
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    
    if (musicPlaying) {
        audio.pause();
        btn.classList.remove('active');
        musicPlaying = false;
    } else {
        audio.play().catch(() => {
            showNotification('🔇 浏览器阻止了音乐播放，请点击页面后重试');
        });
        btn.classList.add('active');
        musicPlaying = true;
    }
}

// ===== 烟火特效 =====
function triggerFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 5 + Math.random() * 5;
        const tx = Math.cos(angle) * velocity * 50;
        const ty = Math.sin(angle) * velocity * 50;
        
        firework.style.setProperty('--tx', `${tx}px`);
        firework.style.setProperty('--ty', `${ty}px`);
        firework.style.left = window.innerWidth / 2 + 'px';
        firework.style.top = window.innerHeight / 2 + 'px';
        firework.textContent = ['✨', '💥', '⭐', '🌟', '💫'][Math.floor(Math.random() * 5)];
        firework.style.fontSize = (1 + Math.random()) * 1.5 + 'em';
        
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => firework.remove(), 1000);
    }
}

// ===== 心形雨 =====
function toggleHeartRain() {
    const btn = document.getElementById('heartBtn');
    
    if (heartRaining) {
        heartRaining = false;
        btn.classList.remove('active');
        showNotification('❌ 心形雨已停止');
    } else {
        heartRaining = true;
        btn.classList.add('active');
        startHeartRain();
        showNotification('💕 心形雨已启动');
    }
}

function startHeartRain() {
    const heartsContainer = document.getElementById('hearts-rain');
    
    const heartInterval = setInterval(() => {
        if (!heartRaining) {
            clearInterval(heartInterval);
            return;
        }
        
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = ['💕', '💖', '💗', '❤️'][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-30px';
        heart.style.animationDuration = (3 + Math.random() * 3) + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }, 300);
}

// ===== 夜间模式 =====
function toggleDarkMode() {
    darkMode = !darkMode;
    const btn = document.getElementById('darkBtn');
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
        btn.classList.add('active');
        showNotification('🌙 暗黑模式已启用');
    } else {
        document.body.classList.remove('dark-mode');
        btn.classList.remove('active');
        showNotification('☀️ 已切换为亮色模式');
    }
}

// ===== 难度设置 =====
function setDifficulty(level) {
    difficulty = level;
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

// ===== 纪念日倒计时 =====
function setAnniversaryDate() {
    const dateInput = document.getElementById('anniversaryDate').value;
    if (dateInput) {
        localStorage.setItem('anniversaryDate', dateInput);
        updateCountdown();
        showNotification('📅 纪念日已设置！');
    }
}

function updateCountdown() {
    const dateString = localStorage.getItem('anniversaryDate');
    if (!dateString) return;
    
    const targetDate = new Date(dateString).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance < 0) {
        document.getElementById('days').textContent = '完成';
        document.getElementById('hours').textContent = '了';
        document.getElementById('minutes').textContent = '!';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// 定时更新倒计时
setInterval(updateCountdown, 1000);

// ===== "不好意思"按钮逃跑 =====
function moveButton() {
    if (difficulty === 'easy') return; // 简单模式不逃跑
    
    const btn = document.getElementById('noBtn');
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    if (difficulty === 'hard') {
        // 困难模式：直接移动
        btn.style.position = 'fixed';
        btn.style.left = randomX + 'px';
        btn.style.top = randomY + 'px';
        btn.classList.add('moving');
    } else {
        // 正常模式：有概率移动
        if (Math.random() > 0.3) {
            btn.style.position = 'fixed';
            btn.style.left = randomX + 'px';
            btn.style.top = randomY + 'px';
            btn.classList.add('moving');
        }
    }
}

// ===== 彩虹字效果 =====
function showLoveMessage() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: popIn 0.5s ease-out;
    `;
    
    modal.innerHTML = `
        <div class="rainbow-text" style="margin-bottom: 20px;">I LOVE YOU ❤️</div>
        <p style="color: #333; margin: 20px 0;">你是我的唯一</p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            padding: 10px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
        ">关闭</button>
    `;
    
    document.body.appendChild(modal);
}

// ===== 下载截图 =====
function downloadScreenshot() {
    showNotification('📸 功能开发中，敬请期待！');
}

// ===== 屏幕切换函数 =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ===== 开始表白 =====
function startConfession() {
    if (!difficulty) {
        showNotification('⚠️ 请先选择难度！');
        return;
    }
    triggerFirewords();
    setTimeout(() => {
        showScreen('mainScreen');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
}

function triggerFirewords() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => triggerFireworks(), i * 300);
    }
}

// ===== 回应函数 =====
function respondYes() {
    showResponse('yes');
}

function respondMaybe() {
    showResponse('maybe');
}

function respondNo() {
    showResponse('no');
}

// ===== 显示响应 =====
function showResponse(response) {
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
                '我会用行动证明自己的真心。',
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

    const responseData = responses[response];
    const responseContent = document.getElementById('responseContent');
    
    let html = `<div class="response-emoji">${responseData.emoji}</div>`;
    html += `<div class="response-text">${responseData.title}</div>`;
    html += `<div class="response-message">`;
    html += responseData.messages.map(msg => `<p>${msg}</p>`).join('');
    html += `</div>`;
    
    responseContent.innerHTML = html;
    showScreen('responseScreen');
    
    // 成功响应时放烟火
    if (response === 'yes') {
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => triggerFireworks(), i * 200);
            }
        }, 500);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 分享功能 =====
function shareOnWeChat() {
    const text = '亲爱的你，我有件重要的事想和你说...';
    showNotification(`📱 请复制链接分享：\n${window.location.href}`);
}

function shareOnQQ() {
    const text = '亲爱的你，我有件重要的事想和你说...';
    showNotification(`💬 请复制链接分享：\n${window.location.href}`);
}

function copyLink() {
    const link = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(link).then(() => {
            showNotification('✅ 链接已复制到剪贴板！');
        }).catch(() => {
            fallbackCopyToClipboard(link);
        });
    } else {
        fallbackCopyToClipboard(link);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showNotification('✅ 链接已复制到剪贴板！');
    } catch (err) {
        showNotification('❌ 复制失败，请手动复制');
    }
    document.body.removeChild(textArea);
}

// ===== 提示通知 =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        z-index: 1000;
        animation: slideUp 0.3s ease-out;
        max-width: 80%;
        text-align: center;
        white-space: pre-wrap;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// ===== 键盘快捷方式 =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen && activeScreen.id === 'startScreen') {
            startConfession();
        }
    }
});

// ===== 页面加载完成初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('💕 增强版表白网站已加载完成！');
    console.log('🎉 祝你的表白圆满成功！');
    
    // 初始化访客计数
    updateVisitCount();
    
    // 加载已保存的纪念日
    const savedDate = localStorage.getItem('anniversaryDate');
    if (savedDate) {
        document.getElementById('anniversaryDate').value = savedDate;
        updateCountdown();
    }
    
    // 添加照片库功能
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const url = prompt('请输入图片 URL (或留空跳过):\n\n提示：可以从这些网站获取图片\nhttps://unsplash.com\nhttps://pexels.com');
            if (url) {
                item.style.backgroundImage = `url('${url}')`;
                item.style.backgroundSize = 'cover';
                item.style.backgroundPosition = 'center';
            }
        });
    });
});