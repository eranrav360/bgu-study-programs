# 🚀 הוראות העלאה לאינטרנט

מדריך שלב אחר שלב להעלאת הממשק לאינטרנט.

---

## שלב 1: העלאה ל-GitHub

### יצירת Repository

1. פתח את **https://github.com/new**
2. מלא את הפרטים:
   - **Repository name**: `bgu-study-programs`
   - **Description**: `ממשק תכניות לימוד - אוניברסיטת בן גוריון`
   - **Public** (מומלץ) או **Private**
   - **אל תסמן** "Add a README file"
3. לחץ **"Create repository"**

### העלאת הקוד

פתח Terminal/CMD בתיקיית הפרויקט והרץ:

```bash
git remote add origin https://github.com/YOUR-USERNAME/bgu-study-programs.git
git branch -M main
git push -u origin main
```

**החלף `YOUR-USERNAME` בשם המשתמש שלך!**

---

## שלב 2: בחר פלטפורמת Hosting

### אופציה 1: Vercel (מומלץ) ⭐

**למה Vercel?**
- הכי פשוט והכי מהיר
- Deploy אוטומטי בכל push
- HTTPS חינם
- מהיר מאוד

**העלאה דרך האתר:**

1. היכנס ל-**https://vercel.com**
2. לחץ **"Sign Up"** והתחבר עם GitHub
3. לחץ **"Add New..."** → **"Project"**
4. בחר את `bgu-study-programs` מרשימת ה-repositories
5. לחץ **"Deploy"**
6. ✅ סיימת! הממשק זמין תוך 30 שניות

**קישור לממשק שלך:**
```
https://bgu-study-programs.vercel.app
```

---

### אופציה 2: Render

**למה Render?**
- חינם לחלוטין
- קל לשימוש
- אמין ויציב

**העלאה:**

1. היכנס ל-**https://render.com**
2. לחץ **"Get Started"** והתחבר עם GitHub
3. לחץ **"New"** → **"Static Site"**
4. חבר את חשבון GitHub שלך
5. בחר את `bgu-study-programs`
6. הגדרות:
   - **Name**: `bgu-study-programs`
   - **Branch**: `main`
   - **Build Command**: (השאר ריק)
   - **Publish Directory**: `.`
7. לחץ **"Create Static Site"**
8. ✅ Deploy לוקח 2-3 דקות

**קישור לממשק שלך:**
```
https://bgu-study-programs.onrender.com
```

---

### אופציה 3: GitHub Pages

**למה GitHub Pages?**
- חינם לחלוטין
- מובנה ב-GitHub
- מושלם לפרויקטים ציבוריים

**העלאה:**

1. עבור ל-repository ב-GitHub:
   ```
   https://github.com/YOUR-USERNAME/bgu-study-programs
   ```

2. לחץ על **"Settings"** (למעלה)

3. במסך השמאלי, לחץ על **"Pages"**

4. תחת **"Source"**:
   - Branch: **main**
   - Folder: **/ (root)**

5. לחץ **"Save"**

6. ✅ אחרי 1-2 דקות, האתר יהיה זמין ב:
   ```
   https://YOUR-USERNAME.github.io/bgu-study-programs
   ```

---

## שלב 3: עדכונים עתידיים

אחרי ההעלאה הראשונית, כל עדכון שתעשה יעלה אוטומטית:

```bash
# עדכן את Programs.xlsx
python prepare_data_v2.py
python create_standalone.py

# העלה את השינויים
git add .
git commit -m "עדכון נתוני תכניות לימוד"
git push
```

**Vercel ו-Render יעשו deploy אוטומטי!**
**GitHub Pages יעדכן תוך דקה-שתיים.**

---

## 🎯 המלצה שלי

**שימוש רגיל**: Vercel
**אם אין לך כרטיס אשראי**: GitHub Pages
**אם רוצה יותר שליטה**: Render

---

## שאלות נפוצות

**ש: האם זה באמת חינם?**
ת: כן! כל שלוש האפשרויות חינמיות לחלוטין.

**ש: האם הממשק יעבוד מהר?**
ת: כן! Static sites מהירים מאוד.

**ש: מה אם אני רוצה דומיין משלי?**
ת: Vercel ו-Render מאפשרים חיבור דומיין מותאם אישית בחינם.

**ש: איך אני מעדכן נתונים?**
ת: ערוך את Programs.xlsx, הרץ את הסקריפטים, ו-push ל-GitHub.

---

**בהצלחה! 🚀**
