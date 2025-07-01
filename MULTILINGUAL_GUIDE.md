# 多語言網站功能說明 | Multilingual Website Guide

## 功能概述 | Feature Overview

本網站現在支援三種語言切換：
- **English** (預設) | English (Default)
- **繁體中文** | Traditional Chinese
- **简体中文** | Simplified Chinese

## 使用方式 | How to Use

1. 在網站右上角可以看到語言切換按鈕
2. 點擊按鈕會顯示語言選項下拉選單
3. 選擇您想要的語言
4. 網站內容會即時切換到選定的語言
5. 語言偏好會自動儲存在瀏覽器中

## 技術實現 | Technical Implementation

### 檔案結構 | File Structure
```
assets/
├── css/
│   └── language-switcher.css     # 語言切換器樣式
└── js/
    └── lang/
        ├── translations.js       # 翻譯內容
        └── language-switcher.js  # 語言切換功能
```

### 關鍵特性 | Key Features

1. **即時語言切換** | Real-time Language Switching
   - 無需重新載入頁面
   - 流暢的動畫效果

2. **本地儲存** | Local Storage
   - 記住使用者的語言偏好
   - 下次訪問時自動應用

3. **響應式設計** | Responsive Design
   - 在桌面和行動裝置上都能完美顯示
   - 美觀的UI設計

4. **無障礙支援** | Accessibility Support
   - 鍵盤導航支援
   - 適當的焦點指示器

### 如何添加新的翻譯內容 | How to Add New Translation Content

1. 在 `assets/js/lang/translations.js` 中添加新的翻譯鍵值對
2. 在HTML內容中添加 `data-i18n="your-key"` 屬性
3. 語言切換器會自動處理新的內容

例如：
```html
<h2 data-i18n="new-section">New Section</h2>
```

在 translations.js 中添加：
```javascript
'en': {
  'new-section': 'New Section'
},
'zh-TW': {
  'new-section': '新章節'
},
'zh-CN': {
  'new-section': '新章节'
}
```

## 瀏覽器支援 | Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 16+

## 注意事項 | Notes

- 語言切換只會影響標記了 `data-i18n` 屬性的元素
- 項目連結、外部連結等保持原始語言
- 如果需要完整的多語言支援，建議考慮使用Jekyll的多語言插件 