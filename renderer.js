// renderer.js
window.addEventListener('DOMContentLoaded', () => {
    const petGif = document.getElementById('pet-gif');

    // TDD 测试中所要求的逻辑：点击时图片来源切换为 clicked.gif
    let isDefault = true;

    petGif.addEventListener('click', () => {
        if(isDefault) {
             petGif.src = 'clicked.gif';
        } else {
             petGif.src = 'default.gif';
        }
        isDefault = !isDefault;
    });

    // 这里可以进一步使用 ipcRenderer 与主进程交互，如接收 'force-rest' 通知
    const { ipcRenderer } = require('electron');
    ipcRenderer.on('force-rest', () => {
        alert('主人，该休息一下了！');
    });
});
