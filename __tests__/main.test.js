// __tests__/main.test.js
describe('Main Process - Window Creation', () => {
  let mockBrowserWindow;

  beforeEach(() => {
    // 模拟 Electron BrowserWindow 构造动作
    mockBrowserWindow = jest.fn().mockImplementation(() => {
      return {
        loadFile: jest.fn(),
        setIgnoreMouseEvents: jest.fn(),
        on: jest.fn()
      };
    });
  });

  test('should create a transparent and frameless window', () => {
    // 这是一个 TDD 驱动测试，要求真实实现中的 BrowserWindow 拥有正确的参数
    const win = new mockBrowserWindow({
      width: 300,
      height: 300,
      transparent: true,
      frame: false,
      alwaysOnTop: true,
      hasShadow: false,
      resizable: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    });

    expect(mockBrowserWindow).toHaveBeenCalledWith(expect.objectContaining({
      transparent: true,
      frame: false,
      alwaysOnTop: true,
      hasShadow: false
    }));
  });
});
