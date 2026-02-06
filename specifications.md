# ContiNEW AI - 應用程式規格文件

## 1. 專案概述
**ContiNEW 續續院** 是一個企業級 AI 資產管理與生成平台。本應用程式旨在提供一個直觀的前端介面，讓用戶能夠管理專案、執行 AI 生成任務（圖片、文本、電子書），並審核最終產出。

## 2. 技術架構
本專案採用純前端架構 (Single Page Application via Vanilla JS)，以確保輕量化、易部署且無須複雜的建置流程。

*   **前端核心**: 原生 HTML5, JavaScript (ES6+).
*   **樣式框架**: Tailwind CSS (透過 CDN 引入，v3.4+).
*   **字體**: Google Fonts (Noto Sans TC, Inter, Material Symbols Outlined).
*   **後端**: 無 (所有 AI 行為均為前端模擬).

## 3. 功能模組與頁面流程

### 3.1 系統登入 (Login View)
*   **ID**: `#view-login`
*   **功能**:
    *   使用者身份驗證模擬。
    *   視覺特效：動態背景光暈。
    *   簡單表單驗證 (防止空值)。
*   **流程**: 登入成功 -> 導向儀表板。

### 3.2 儀表板 (Dashboard)
*   **ID**: `#view-dashboard`
*   **功能**:
    *   顯示全域導航列 (Header)。
    *   專案卡片網格 (Grid Layout)。
    *   顯示專案狀態 (進行中/已完成)。
    *   「新增工作流」入口。
*   **流程**: 點擊專案 -> 進入編輯或執行模式。

### 3.3 案件編輯 (Edit Project)
*   **ID**: `#view-edit-project`
*   **功能**:
    *   表單輸入：案件名稱、類型、描述。
    *   素材上傳模擬 UI。
*   **流程**: 儲存 -> 進入執行模式。

### 3.4 執行模式選擇 (Execution Mode)
*   **ID**: `#view-execution-mode`
*   **功能**:
    *   展示專案內的素材資產。
    *   針對不同素材提供 AI 操作選項 (圖片變體、文案生成、合成電子書)。

### 3.5 AI 圖片生成工作區 (Image Gen Workspace)
*   **ID**: `#view-image-gen`
*   **佈局**: 左側側邊欄 (參數設定) + 右側主要區域 (結果網格)。
*   **功能**:
    *   提示詞 (Prompt) 輸入。
    *   比例選擇 (1:1, 16:9, 9:16)。
    *   **模擬**: 點擊生成 -> 載入動畫 -> 顯示隨機圖片 (Picsum)。

### 3.6 AI 文本生成工作區 (Text Gen Workspace)
*   **ID**: `#view-text-gen`
*   **功能**:
    *   指令輸入框。
    *   富文本預覽區。
    *   **模擬**: 點擊生成 -> 狀態變更 -> 插入預設文本。

### 3.7 電子書合成工作區 (E-book Gen Workspace)
*   **ID**: `#view-ebook-gen`
*   **功能**:
    *   進度條動畫模擬 (0% -> 100%)。
    *   頁面預覽網格。
*   **流程**: 生成完成 -> 顯示「前往成果產出」按鈕。

### 3.8 審核模式 (Review Mode)
*   **ID**: `#view-review-mode`
*   **功能**:
    *   大圖檢視。
    *   通過/退回 決策按鈕。
    *   指令修正輸入框。

### 3.9 成果產出 (Final Output)
*   **ID**: `#view-final-output`
*   **功能**:
    *   列出所有已核准的資產。
    *   下載按鈕 (模擬)。

## 4. 檔案結構
```
/
├── index.html        # 單一入口文件，包含所有 HTML 視圖
├── app.js            # 核心邏輯 (路由、狀態、模擬函數)
├── metadata.json     # 專案描述檔
└── specifications.md # 本文件
```

## 5. 擴充建議 (未來規劃)
若要接上真實後端 (Python/Node.js)，建議修改 `app.js` 中的 Mock 函數：
1.  **API 整合**: 將 `setTimeout` 替換為 `fetch()` 或 `axios.post()`。
2.  **狀態管理**: 引入輕量級 Store (如 Signals 或 Proxy) 管理複雜的專案數據。
3.  **路由**: 若頁面增多，建議使用 Hash Router (`window.location.hash`) 處理瀏覽器上一頁/下一頁功能。
