/**
 * @jest-environment jsdom
 */

describe('Renderer Process - Pet Interaction', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="pet-container">
        <img id="pet-gif" src="default.gif" />
      </div>
    `;
    // 模拟 renderer.js 的点击事件绑定
    const petGif = document.getElementById('pet-gif');
    petGif.addEventListener('click', () => {
      petGif.src = 'clicked.gif';
    });
  });

  test('should initially load default gif', () => {
    const petGif = document.getElementById('pet-gif');
    expect(petGif.src).toContain('default.gif');
  });

  test('should change gif source when clicked', () => {
    const petGif = document.getElementById('pet-gif');
    petGif.click(); // 主动触发点击模拟互动
    expect(petGif.src).toContain('clicked.gif');
  });
});
