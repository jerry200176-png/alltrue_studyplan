<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AllTrue Study Plan / 全真課程排程

此專案為全真課程排程系統，包含前端 React (Vite) 與後端環境。

## 🚀 本地開發與運行 (Local Development)

**環境要求/Prerequisites:** Node.js 20+

1. 安裝套件 (Install dependencies):

   ```bash
   npm install
   ```

2. 環境變數設定 (Environment Variables):
   複製 `.env.example` 並重新命名為 `.env`，接著設定必要的 API Key（如 `GEMINI_API_KEY`）與資料庫路徑。
   *(請注意，`.env` 已加入 `.gitignore`，不會被上傳至版本控制)*

3. 啟動開發伺服器 (Start Dev Server):

   ```bash
   npm run dev
   ```

   預設會運行於 `http://localhost:3000`

4. 生產環境建置 (Build for Production):

   ```bash
   npm run build
   ```

   建置完成的檔案將位於 `dist` 資料夾。

---

## 📦 部署 (Deployment)

我們已經為此專案配置了 GitHub Actions (`.github/workflows/deploy.yml`)。
此配置會於每次推送至 `main` 分支時，自動進行專案建置 `npm run build` 並部署至 **GitHub Pages**。

### 部署前設定 (GitHub Repository Settings)

若要確保 Actions 成功部署：

1. 請至儲存庫 (Repository) 的 **Settings > Pages**
2. 將 **Source** 更改為 **GitHub Actions**
3. 將代碼推送至 `main` 即可自動觸發部署流程。

---

## 🛠 .gitignore 規範

專案已設定好常見之忽略檔案 (Ignored Files):

- **套件夾**: `node_modules/`
- **建置產物**: `dist/`, `build/`
- **環境變數**: `.env`, `.env.*` (僅保留 `.env.example` 供參考)
- **日誌檔**: `*.log`
- **編輯器及系統暫存**: `.DS_Store`, `.idea`, `.vscode/`
