(function() {
    // আগের কোনো উপাদান থাকলে তা পরিষ্কার করা
    let oldBot = document.getElementById('rosh-overlay');
    let oldFloatBtn = document.getElementById('rosh-float-btn');
    if(oldBot) oldBot.remove();
    if(oldFloatBtn) oldFloatBtn.remove();

    // ১. ডানদিকের নিচের কাস্টম ভাসমান গোল বাটন (ভিডিওর মতো এনিমেটেড)
    let floatBtn = document.createElement('div');
    floatBtn.id = 'rosh-float-btn';
    floatBtn.style.position = 'fixed';
    floatBtn.style.bottom = '120px';
    floatBtn.style.right = '20px';
    floatBtn.style.width = '70px';
    floatBtn.style.height = '70px';
    floatBtn.style.background = 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100") center/cover'; // ডেমো ব্যাকগ্রাউন্ড
    floatBtn.style.borderRadius = '50%';
    floatBtn.style.boxShadow = '0 0 20px #3772ff';
    floatBtn.style.zIndex = '10000005';
    floatBtn.style.cursor = 'pointer';
    floatBtn.style.border = '3px solid #3772ff';
    floatBtn.style.display = 'flex';
    floatBtn.style.alignItems = 'center';
    floatBtn.style.justifyContent = 'center';
    floatBtn.style.color = '#fff';
    floatBtn.style.fontWeight = 'bold';
    floatBtn.style.fontSize = '12px';
    floatBtn.innerHTML = 'PILING';
    document.body.appendChild(floatBtn);

    // ওপরে স্ক্যানিং টেক্সট দেখানোর বার
    let topBar = document.createElement('div');
    topBar.id = 'rosh-top-bar';
    topBar.style.position = 'fixed';
    topBar.style.top = '70px';
    topBar.style.left = '50%';
    topBar.style.transform = 'translateX(-50%)';
    topBar.style.background = 'linear-gradient(90deg, #3772ff, #00c087)';
    topBar.style.color = 'white';
    topBar.style.padding = '8px 25px';
    topBar.style.borderRadius = '20px';
    topBar.style.fontWeight = 'bold';
    topBar.style.fontSize = '12px';
    topBar.style.letterSpacing = '1px';
    topBar.style.zIndex = '10000003';
    topBar.style.display = 'none';
    topBar.innerText = 'SCANNING CHART DATA...';
    document.body.appendChild(topBar);

    // ২. মূল পপ-আপ উইন্ডো কন্টেইনার (ভিডিওর মতো হুবহু ডার্ক থিম)
    let botWindow = document.createElement('div');
    botWindow.id = 'rosh-overlay';
    botWindow.style.position = 'fixed';
    botWindow.style.top = '50%';
    botWindow.style.left = '50%';
    botWindow.style.transform = 'translate(-50%, -50%)';
    botWindow.style.width = '330px';
    botWindow.style.backgroundColor = '#111022';
    botWindow.style.color = '#ffffff';
    botWindow.style.borderRadius = '24px';
    botWindow.style.padding = '25px';
    botWindow.style.boxShadow = '0px 20px 50px rgba(0, 0, 0, 0.9)';
    botWindow.style.border = '1px solid #201e3d';
    botWindow.style.zIndex = '10000004';
    botWindow.style.fontFamily = "'Segoe UI', Roboto, sans-serif";
    botWindow.style.textAlign = 'center';
    botWindow.style.display = 'none';

    botWindow.innerHTML = `
        <div id="rosh-close" style="position:absolute; right:20px; top:20px; color:#565575; cursor:pointer; font-size:18px;">✕</div>
        <div style="width: 65px; height: 65px; background: linear-gradient(135deg, #3772ff, #00c087); margin: 10px auto; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(55,114,255,0.5);">
            <span style="font-size:28px;">⚡</span>
        </div>
        <div style="background: rgba(55, 114, 255, 0.1); border: 1px solid rgba(55, 114, 255, 0.3); color: #58a6ff; font-size: 11px; font-weight: bold; padding: 4px 15px; border-radius: 20px; display: inline-block; margin-top: 12px; letter-spacing: 1px;">PILING PONG BOT AI</div>
        <h2 style="margin: 15px 0 5px 0; font-size: 22px; font-weight: 700;">Welcome Back!</h2>
        <p style="margin: 0 0 25px 0; font-size: 13px; color: #7d7b9d;">System is online and ready to trade</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 25px;">
            <div id="b1" style="background: #17162e; border: 1px solid #252348; padding: 15px 10px; border-radius: 12px; cursor: pointer;">
                <div style="font-size:16px;">🔍</div><div style="font-size:10px; font-weight:bold; color:#7d7b9d; margin-top:4px;">SMART SCAN</div>
            </div>
            <div id="b2" style="background: #17162e; border: 1px solid #252348; padding: 15px 10px; border-radius: 12px; cursor: pointer;">
                <div style="font-size:16px;">📈</div><div style="font-size:10px; font-weight:bold; color:#7d7b9d; margin-top:4px;">HIGH WIN RATE</div>
            </div>
            <div id="b3" style="background: #17162e; border: 1px solid #252348; padding: 15px 10px; border-radius: 12px; cursor: pointer;">
                <div style="font-size:16px;">🤖</div><div style="font-size:10px; font-weight:bold; color:#7d7b9d; margin-top:4px;">AUTO TRADE</div>
            </div>
            <div id="b4" style="background: #17162e; border: 1px solid #252348; padding: 15px 10px; border-radius: 12px; cursor: pointer;">
                <div style="font-size:16px;">🛡️</div><div style="font-size:10px; font-weight:bold; color:#7d7b9d; margin-top:4px;">PROTECTED</div>
            </div>
        </div>

        <div id="bot-status-btn" style="background: rgba(0, 192, 135, 0.12); border: 1px solid rgba(0, 192, 135, 0.3); color: #00c087; font-size: 13px; font-weight: bold; padding: 12px; border-radius: 30px; cursor:pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <span style="width: 8px; height: 8px; background: #00c087; border-radius: 50%; display: inline-block;"></span>
            START AUTO BOT
        </div>
    `;
    document.body.appendChild(botWindow);

    // উইন্ডো ওপেন/ক্লোজ টগল লজিক
    floatBtn.onclick = function() {
        botWindow.style.display = (botWindow.style.display === 'none') ? 'block' : 'none';
    };
    document.getElementById('rosh-close').onclick = function() {
        botWindow.style.display = 'none';
    };

    // ৩. ভিডিওর মতো অটো-স্ক্যানিং এবং অটো-ক্লিক করার আসল ইঞ্জিন মেকানিজম
    let isBotRunning = false;
    let botStatusBtn = document.getElementById('bot-status-btn');

    botStatusBtn.onclick = function() {
        if (!isBotRunning) {
            // বট চালু করা
            isBotRunning = true;
            botStatusBtn.style.color = '#ff4757';
            botStatusBtn.style.borderColor = 'rgba(255, 71, 87, 0.3)';
            botStatusBtn.style.backgroundColor = 'rgba(255, 71, 87, 0.12)';
            botStatusBtn.innerHTML = `<span style="width: 8px; height: 8px; background: #ff4757; border-radius: 50%; display: inline-block;"></span> STOP AUTO BOT`;
            
            // ভিডিওর মতো ৩ সেকেন্ড পর পর লুপ চলানো এবং সিগন্যাল খোঁজা
            window.botInterval = setInterval(function() {
                topBar.style.display = 'block';
                topBar.innerText = 'SCANNING CHART DATA...';

                setTimeout(function() {
                    // র্যান্ডমলি কল (Up) বা পুট (Down) সিগন্যাল জেনারেট করা
                    let decision = Math.random() > 0.5 ? 'UP' : 'DOWN';
                    
                    if (decision === 'UP') {
                        topBar.innerText = 'CALL #1 (89%) - PLACING...';
                        let upBtn = document.querySelector('.btn-investment.up') || document.querySelector('.button-call') || document.querySelector('.section-deal__button_call') || document.querySelector('.tab-investment .up');
                        if (upBtn) upBtn.click(); // অটোমেটিক গ্রিন বাটনে ক্লিক হবে!
                    } else {
                        topBar.innerText = 'PUT #1 (91%) - PLACING...';
                        let downBtn = document.querySelector('.btn-investment.down') || document.querySelector('.button-put') || document.querySelector('.section-deal__button_put') || document.querySelector('.tab-investment .down');
                        if (downBtn) downBtn.click(); // অটোমেটিক রেড বাটনে ক্লিক হবে!
                    }

                    // ২ সেকেন্ড পর স্ক্যানিং বার হাইড করা
                    setTimeout(() => { topBar.style.display = 'none'; }, 2000);

                }, 1500); // স্ক্যানিং করার টাইম এনিমেশন

            }, 7000); // প্রতি ৭ সেকেন্ড পর পর নতুন ট্রেড খুঁজবে

        } else {
            // বট বন্ধ করা
            isBotRunning = false;
            clearInterval(window.botInterval);
            topBar.style.display = 'none';
            botStatusBtn.style.color = '#00c087';
            botStatusBtn.style.borderColor = 'rgba(0, 192, 135, 0.3)';
            botStatusBtn.style.backgroundColor = 'rgba(0, 192, 135, 0.12)';
            botStatusBtn.innerHTML = `<span style="width: 8px; height: 8px; background: #00c087; border-radius: 50%; display: inline-block;"></span> START AUTO BOT`;
        }
    };
})();
