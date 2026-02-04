# 🎓 תכניות לימוד - אוניברסיטת בן גוריון

ממשק אינטראקטיבי להצגת תכניות הלימוד והשילובים האפשריים באוניברסיטת בן גוריון בנגב.

## תכונות

- 🔍 **חיפוש מחלקות** עם השלמה אוטומטית
- 🎓 **סינון לפי תואר** - תואר ראשון / תואר שני
- 📊 **86 מחלקות**, 443 תכניות לימוד
- 📱 **ממשק רספונסיבי** - נוח לשימוש במובייל ובמחשב
- 🇮🇱 **תמיכה מלאה בעברית** (RTL)
- ⚡ **ביצועים מהירים** - ללא תלות בספריות חיצוניות

## הרצה מקומית

### אפשרות 1: עם שרת מקומי
```bash
python -m http.server 8000
```
או הפעל את `start_server.bat` (Windows)

ואז פתח בדפדפן: `http://localhost:8000`

### אפשרות 2: ללא שרת
פתח את הקובץ `index_standalone.html` ישירות בדפדפן.

## מבנה הפרויקט

```
.
├── index.html              # ממשק ראשי (דורש שרת)
├── index_standalone.html   # גרסה עצמאית (ללא שרת)
├── programs_data.json      # נתוני התכניות
├── Programs.xlsx           # קובץ Excel המקורי
├── prepare_data_v2.py     # סקריפט להמרת Excel ל-JSON
├── create_standalone.py    # יצירת גרסה standalone
└── start_server.bat        # הרצת שרת מקומי (Windows)
```

## עדכון הנתונים

לעדכן את נתוני התכניות:

1. ערוך את הקובץ `Programs.xlsx`
2. הרץ:
```bash
python prepare_data_v2.py
python create_standalone.py
```

## דרישות מערכת

- Python 3.7+
- pandas
- openpyxl

התקנת תלויות:
```bash
pip install pandas openpyxl
```

## טכנולוגיות

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Python (pandas, openpyxl) - לעיבוד נתונים בלבד
- **ללא תלות בספריות חיצוניות** בצד הלקוח

## Deploy לאינטרנט

### Vercel (מומלץ)
```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages
1. העלה את הקבצים ל-GitHub
2. **Settings** > **Pages**
3. בחר **main branch**
4. האתר יהיה זמין ב: `https://USERNAME.github.io/REPO-NAME`

### Render
1. חבר את ה-repository ל-Render
2. בחר **Static Site**
3. Render יעשה deploy אוטומטי

## צילומי מסך

- חיפוש מחלקות עם autocomplete
- סינון לפי תואר ראשון/שני
- תצוגת שילובים אפשריים

## רישיון

MIT License
