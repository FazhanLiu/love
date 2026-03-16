// 屏幕切换函数
function showScreen(screenId) {
    // 隐藏所有屏幕
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // 显示指定屏幕
    document.getElementById(screenId).classList.add('active');
}

// 开始表白
function startConfession() {
    showScreen('mainScreen');
    // 平滑滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 同意的响应
function respondYes() {
    showResponse('yes');
}

// 考虑中的响应
function respondMaybe() {
    showResponse('maybe');
}

// 拒绝的响应
function respondNo() {
    showResponse('no');
}

// 显示响应
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

    const responseData = responses[response];
    const responseContent = document.getElementById('responseContent');
    
    let html = `<div class="response-emoji">${responseData.emoji}</div>`;
    html += `<div class="response-text">${responseData.title}</div>`;
    html += `<div class="response-message">`;
    html += responseData.messages.map(msg => `<p>${msg}</p>`).join('');
    html += `</div>`;
    
    responseContent.innerHTML = html;
    showScreen('responseScreen');
    
    // 平滑滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 分享功能
function shareOnWeChat() {
    const text = '亲爱的你，我有件重要的事想和你说...';
    alert(`📱 微信分享提示\n\n请复制下方链接分享给对方：\n${window.location.href}\n\n或者使用下面的复制链接功能`);
}

function shareOnQQ() {
    const text = '亲爱的你，我有件重要的事想和你说...';
    alert(`💬 QQ分享提示\n\n请复制下方链接分享给对方：\n${window.location.href}\n\n或者使用下面的复制链接功能`);
}

function copyLink() {
    const link = window.location.href;
    
    // 使用现代 API 复制到剪贴板
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

// 提示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        z-index: 1000;
        animation: slideUp 0.3s ease-out;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// 键盘快捷方式
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeScreen = document.querySelector('.screen.active');
        if (activeScreen.id === 'startScreen') {
            startConfession();
        }
    }
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 添加一些额外的交互效果
    console.log('💕 表白网站已加载完成！');
    console.log('🎉 祝你的表白圆满成功！');
});