# LinkIntel+ 🔗💼

LinkIntel+ is a Chrome Extension that tracks LinkedIn job views, awards daily token points (JBL), and feeds those interactions to a backend for personalized job ad recommendations.

---

## 🔧 Features
- 🧠 Collects job viewing behavior from LinkedIn
- 💰 Earn up to 25 JBL tokens daily
- 🔄 Sends event data to a FastAPI backend
- 📊 Displays tokens in an extension popup
- 🚀 Backend ready to match job ads and personalize offers

---

## 🧩 Folder Structure
```
linkintel-plus/
├── manifest.json
├── content.js
├── popup.html
├── popup.js
├── background.js
├── icon16.png/icon48.png/icon128.png (placeholder)
└── backend/
    ├── main.py
    └── requirements.txt
```

---

## 💻 Local Development

### 1. Load Chrome Extension
1. Go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `linkintel-plus/` folder

### 2. Run the Backend
```bash
cd linkintel-plus/backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🌐 Deploy Backend to Render

### Step-by-step:
1. Go to [https://render.com](https://render.com)
2. Sign up or log in
3. Click **New Web Service**
4. Connect your GitHub repo with this project
5. Fill in settings:
    - **Environment**: Python 3
    - **Start command**:
      ```bash
      uvicorn main:app --host 0.0.0.0 --port 10000
      ```
    - **Port**: 10000
6. Deploy. Render will give you a public API URL like:
   ```
   https://linkintel-backend.onrender.com/api/event
   ```

---

## 📬 API Example
**POST** `/api/event`
```json
{
  "event": "job_view",
  "tokens": 13,
  "date": "2025-06-20",
  "url": "https://www.linkedin.com/jobs/view/..."
}
```

---

## 🚧 Future Ideas
- User dashboards
- Leaderboards for top earners
- Web3 token integration for JBL
- Job scraping + AI job matching

---

## 📄 License
MIT – build freely, improve responsibly!
