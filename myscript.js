(function() {
    let oldBot = document.getElementById('piling-pong-overlay');
    if(oldBot) oldBot.remove();

    let botWindow = document.createElement('div');
    botWindow.id = 'piling-pong-overlay';
    botWindow.style.position = 'fixed';
    botWindow.style.top = '50%';
    botWindow.style.left = '50%';
    botWindow.style.transform = 'translate(-50%, -50%)';
    botWindow.style.width = '340px';
    botWindow.style.backgroundColor = '#131224';
    botWindow.style.color = '#ffffff';
    botWindow.style.borderRadius = '24px';
    botWindow.style.padding = '25px';
    botWindow.style.boxShadow = '0px 20px 40px rgba(0, 0, 0, 0.8)';
    botWindow.style.border = '1px solid #23223f';
    botWindow.style.zIndex = '10000000';
    botWindow.style.fontFamily = "'Segoe UI', Roboto, sans-serif";
    botWindow.style.textAlign = 'center';

    botWindow.innerHTML = `
        <div id="close-bot" style="position:absolute; right:20px; top:20px; color:#565575; cursor:pointer; font-size:18px;">✕</div>
        <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #3a7bd5, #3a6073); margin: 10px auto; border-radius: 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(58,123,213,0.4);">
            <span style="font-size:32px;">🔱</span>
        </div>
        <div style="background: rgba(55, 114, 255, 0.1); border: 1px solid rgba(55, 114, 255, 0.3); color: #58a6ff; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-top: 10px; letter-spacing: 1px;">PILING PONG BOT AI</div>
        <h2 style="margin: 15px 0 5px 0; font-size: 24px; font-weight: 700; color: #fff;">Welcome Back!</h2>
        <p style="margin: 0 0 25px 0; font-size: 13px; color: #7d7b9d;">System is online and ready to trade</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 25px;">
            <div style="background: #1a1931; border: 1px solid #262447; padding: 15px 10px; border-radius: 12px; cursor: pointer;" onclick="alert('Scanning Market Trend...')">
                <div style="font-size:18px; margin-bottom:3px;">🔍</div>
                <div style="font-size:11px; font-weight:bold; color:#fff; letter-spacing:0.5px;">SMART SCAN</div>
            </div>
            <div style="background: #1a1931; border: 1px solid #262447; padding: 15px 10px; border-radius: 12px; cursor: pointer;" onclick="alert('Analyzing Win-Rate: 98.4%')">
                <div style="font-size:18px; margin-bottom:3px;">🔥</div>
                <div style="font-size:11px; font-weight:bold; color:#fff; letter-spacing:0.5px;">HIGH WIN RATE</div>
            </div>
            <div style="background: #1a1931; border: 1px solid #262447; padding: 15px 10px; border-radius: 12px; cursor: pointer;" onclick="alert('Auto-Trading Engine Started!')">
                <div style="font-size:18px; margin-bottom:3px;">⚙️</div>
                <div style="font-size:11px; font-weight:bold; color:#fff; letter-spacing:0.5px;">AUTO TRADE</div>
            </div>
            <div style="background: #1a1931; border: 1px solid #262447; padding: 15px 10px; border-radius: 12px; cursor: pointer;" onclick="alert('Anti-Loss Protection Active')">
                <div style="font-size:18px; margin-radius:3px;">🛡️</div>
                <div style="font-size:11px; font-weight:bold; color:#fff; letter-spacing:0.5px;">PROTECTED</div>
            </div>
        </div>
        <div style="background: rgba(0, 192, 135, 0.15); border: 1px solid rgba(0, 192, 135, 0.4); color: #00c087; font-size: 13px; font-weight: bold; padding: 12px; border-radius: 30px; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <span style="width: 8px; height: 8px; background: #00c087; border-radius: 50%; display: inline-block; box-shadow: 0 0 8px #00c087;"></span>
            BOT ACTIVE & READY
        </div>
    `;

    document.body.appendChild(botWindow);

    document.getElementById('close-bot').onclick = function() {
        botWindow.remove();
    };
})();
