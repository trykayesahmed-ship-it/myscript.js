(function() {
    let oldBot = document.getElementById('piling-pong-overlay');
    let oldFloatBtn = document.getElementById('piling-pong-float-btn');
    if(oldBot) oldBot.remove();
    if(oldFloatBtn) oldFloatBtn.remove();

    // ১. ডানদিকের নিচের ভাসমান গোল বাটন (Piyash আইকনের মতো)
    let floatBtn = document.createElement('div');
    floatBtn.id = 'piling-pong-float-btn';
    floatBtn.style.position = 'fixed';
    floatBtn.style.bottom = '100px';
    floatBtn.style.right = '20px';
    floatBtn.style.width = '65px';
    floatBtn.style.height = '65px';
    floatBtn.style.background = 'linear-gradient(135deg, #00c087, #3772ff)';
    floatBtn.style.borderRadius = '50%';
    floatBtn.style.boxShadow = '0 0 15px rgba(55,114,255,0.6)';
    floatBtn.style.zIndex = '10000001';
    floatBtn.style.cursor = 'pointer';
    floatBtn.style.display = 'flex';
    floatBtn.style.alignItems = 'center';
    floatBtn.style.justifyContent = 'center';
    floatBtn.style.fontSize = '24px';
    floatBtn.style.color = 'white';
    floatBtn.innerHTML = '🤖';
    document.body.appendChild(floatBtn);

    // ২. মূল পপ-আপ উইন্ডো কন্টেইনার
    let botWindow = document.createElement('div');
    botWindow.id = 'piling-pong-overlay';
    botWindow.style.position = 'fixed';
    botWindow.style.top = '50%';
    botWindow.style.left = '50%';
    botWindow.style.transform = 'translate(-50%, -50%)';
    botWindow.style.width = '320px';
    botWindow.style.backgroundColor = '#131224';
    botWindow.style.color = '#ffffff';
    botWindow.style.borderRadius = '24px';
    botWindow.style.padding = '25px';
    botWindow.style.boxShadow = '0px 20px 40px rgba(0, 0, 0, 0.8)';
    botWindow.style.border = '1px solid #23223f';
    botWindow.style.zIndex = '10000000';
    botWindow.style.fontFamily = "'Segoe UI', sans-serif";
    botWindow.style.textAlign = 'center';
    botWindow.style.display = 'none'; 

    botWindow.innerHTML = `
        <div id="close-bot" style="position:absolute; right:20px; top:20px; color:#565575; cursor:pointer; font-size:18px;">✕</div>
        <h3 style="margin: 10px 0; color: #3772ff;">🔱 PILING PONG ENGINE</h3>
        <p style="font-size: 13px; color: #7d7b9d; margin-bottom: 20px;">অটো-ট্রেড এক্সিকিউশন প্যানেল</p>
        
        <button id="btn-auto-up" style="width:100%; padding:14px; background:#00c087; color:white; border:none; font-weight:bold; border-radius:12px; margin-bottom:10px; cursor:pointer; font-size:14px;">⚡ AUTO CALL (UP)</button>
        <button id="btn-auto-down" style="width:100%; padding:14px; background:#ff4757; color:white; border:none; font-weight:bold; border-radius:12px; cursor:pointer; font-size:14px;">⚡ AUTO PUT (DOWN)</button>
    `;
    document.body.appendChild(botWindow);

    // গোল বাটনে চাপ দিলে উইন্ডো ওপেন/ক্লোজ হওয়ার লজিক
    floatBtn.onclick = function() {
        if(botWindow.style.display === 'none') {
            botWindow.style.display = 'block';
        } else {
            botWindow.style.display = 'none';
        }
    };

    document.getElementById('close-bot').onclick = function() {
        botWindow.style.display = 'none';
    };

    // কটেক্সের চার্টে অটোমেটিক ক্লিক করার মেকানিজম
    document.getElementById('btn-auto-up').onclick = function() {
        let upBtn = document.querySelector('.btn-investment.up') || document.querySelector('.button-call') || document.querySelector('.section-deal__button_call');
        if(upBtn) {
            upBtn.click();
            alert('Piling Pong: Auto UP Trade Placed!');
        } else {
            alert('ট্রেড বাটনটি লাইভ চার্টে খুঁজে পাওয়া যায়নি।');
        }
    };

    document.getElementById('btn-auto-down').onclick = function() {
        let downBtn = document.querySelector('.btn-investment.down') || document.querySelector('.button-put') || document.querySelector('.section-deal__button_put');
        if(downBtn) {
            downBtn.click();
            alert('Piling Pong: Auto DOWN Trade Placed!');
        } else {
            alert('ট্রেড বাটনটি লাইভ চার্টে খুঁজে পাওয়া যায়নি।');
        }
    };
})();
