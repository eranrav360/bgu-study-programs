import React, { useState, useRef, useEffect } from 'react';

// Compact programs data embedded
const programsData = {"לימודי מדבר":[{"d":"לימודי מדבר עם תזה - חקלאות וביוטכנולוגיה באזורים צחיחים","s":"תואר 2"},{"d":"לימודי מדבר עם תזה - מיקרוביולוגיה סביבתית","s":"תואר 2"},{"d":"לימודי מדבר עם תזה - השקיה וסביבת הצמח","s":"תואר 2"},{"d":"לימודי מדבר עם תזה - אגרואינפורמטיקה","s":"תואר 2"}],"הידרולוגיה ואיכות מים":[{"d":"הידרולוגיה ואיכות מים עם תזה - מיקרוביולוגיה ואיכות מים","s":"תואר 2"},{"d":"הידרולוגיה ואיכות מים עם תזה - התפלה וטיפול במים","s":"תואר 2"},{"d":"הידרולוגיה ואיכות מים עם תזה - משאבי מים","s":"תואר 2"}],"פיזיקה סביבתית ואנרגית שמש":[{"d":"פיזיקה סביבתית ואנרגית שמש עם תזה","s":"תואר 2"}],"אקולוגיה, ממשק ושמירת טבע":[{"d":"אקולוגיה, ממשק ושמירת טבע עם תזה - ממשק ושמירת טבע","s":"תואר 2"},{"d":"אקולוגיה, ממשק ושמירת טבע עם תזה - אקולוגיה אבולוציונית","s":"תואר 2"}],"לימודי מדינת ישראל":[{"d":"לימודי מדינת ישראל מחקרי","s":"תואר 2"},{"d":"לימודי מדינת ישראל כללי","s":"תואר 2"},{"d":"לימודי מדינת ישראל דו מחלקתי","s":"תואר 1"},{"d":"לימודי מדינת ישראל דו מחלקתי - לומדים על מדים","s":"תואר 1"},{"d":"לימודי מדינת ישראל דו מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"מדעי הקוגניציה והמח":[{"d":"מדעי הקוגניציה והמח המחקרי","s":"תואר 2"},{"d":"מדעי הקוגניציה והמח דו מחלקתי עם מדעי הרוח והחברה","s":"תואר 1"},{"d":"מדעי הקוגניציה והמח ראשי","s":"תואר 1"},{"d":"מדעי הקוגניציה והמח דו מחלקתי עם מדעי הטבע","s":"תואר 1"},{"d":"מדעי הקוגניציה והמח דו מחלקתי עם מדעי הטבע - שילוב עם מדעי המחשב","s":"תואר 1"},{"d":"מדעי הקוגניציה והמח דו מחלקתי עם מדעי הטבע - שילוב עם מדעי החיים","s":"תואר 1"},{"d":"מדעי הקוגניציה והמח דו מחלקתי עם מדעי הטבע - שילוב עם מתמטיקה","s":"תואר 1"},{"d":"מדעי הקוגניציה והמח חד מחלקתי","s":"תואר 1"}],"פסיכולוגיה":[{"d":"פסיכולוגיה מחקרי - פסיכולוגיה קלינית","s":"תואר 2"},{"d":"פסיכולוגיה מחקרי - פסיכולוגיה התפתחותית","s":"תואר 2"},{"d":"פסיכולוגיה מחקרי - פסיכולוגיה ניסויית: קוגניציה ומוח","s":"תואר 2"},{"d":"פסיכולוגיה מחקרי - פסיכולוגיה חברתית","s":"תואר 2"},{"d":"פסיכולוגיה השלמה - פסיכולוגיה ניסויית: קוגניציה ומוח","s":"תואר 2"},{"d":"פסיכולוגיה השלמה - פסיכולוגיה חברתית","s":"תואר 2"},{"d":"פסיכולוגיה דו מחלקתי - פיסיקה","s":"תואר 1"},{"d":"פסיכולוגיה דו מחלקתי","s":"תואר 1"},{"d":"פסיכולוגיה דו מחלקתי - פסיכוביולוגיה","s":"תואר 1"},{"d":"פסיכולוגיה דו מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"סוציולוגיה ואנתרופולוגיה":[{"d":"סוציולוגיה ואנתרופולוגיה כללי","s":"תואר 2"},{"d":"סוציולוגיה ואנתרופולוגיה כללי - סוציולוגיה ארגונית","s":"תואר 2"},{"d":"סוציולוגיה ואנתרופולוגיה מחקרי","s":"תואר 2"},{"d":"סוציולוגיה ואנתרופולוגיה מחקרי - סוציולוגיה ארגונית","s":"תואר 2"},{"d":"סוציולוגיה ואנתרופולוגיה דו מחלקתי","s":"תואר 1"}],"מקרא":[{"d":"מקרא כללי","s":"תואר 2"},{"d":"מקרא מחקרי","s":"תואר 2"}],"ספרות עברית":[{"d":"ספרות עברית מחקרי","s":"תואר 2"},{"d":"ספרות עברית כללי - כתיבה יצירתית","s":"תואר 2"},{"d":"ספרות עברית כללי","s":"תואר 2"},{"d":"ספרות עברית ראשי","s":"תואר 1"},{"d":"ספרות עברית דו-מחלקתי","s":"תואר 1"}],"לשון עברית":[{"d":"לשון עברית מחקרי - עריכה לשונית","s":"תואר 2"},{"d":"לשון עברית מחקרי","s":"תואר 2"},{"d":"לשון עברית כללי","s":"תואר 2"},{"d":"לשון עברית כללי - עריכה לשונית","s":"תואר 2"},{"d":"לשון עברית דו-מחלקתי","s":"תואר 1"}],"לימודי המזרח התיכון":[{"d":"לימודי המזרח התיכון כללי","s":"תואר 2"},{"d":"לימודי המזרח התיכון מחקרי","s":"תואר 2"},{"d":"לימודי המזרח התיכון ראשי","s":"תואר 1"},{"d":"לימודי המזרח התיכון דו מחלקתי","s":"תואר 1"}],"היסטוריה של עם ישראל":[{"d":"היסטוריה של עם ישראל מחקרי","s":"תואר 2"},{"d":"היסטוריה של עם ישראל כללי","s":"תואר 2"},{"d":"היסטוריה של עם ישראל דו מחלקתי","s":"תואר 1"}],"מחשבת ישראל":[{"d":"מחשבת ישראל כללי","s":"תואר 2"},{"d":"מחשבת ישראל מחקרי","s":"תואר 2"},{"d":"מחשבת ישראל דו-מחלקתי","s":"תואר 1"}],"היסטוריה כללית":[{"d":"היסטוריה כללית מחקרי","s":"תואר 2"},{"d":"היסטוריה כללית כללי","s":"תואר 2"},{"d":"היסטוריה כללית דו מחלקתי","s":"תואר 1"}],"מדעי הסביבה, גאואינפורמטיקה ותכנון ערים-גאוגרפיה":[{"d":"מדעי הסביבה, גאואינפורמטיקה ותכנון ערים-גאוגרפיה מחקרי - גיאואינפורמטיקה","s":"תואר 2"},{"d":"מדעי הסביבה, גאואינפורמטיקה ותכנון ערים-גאוגרפיה כללי","s":"תואר 2"},{"d":"מדעי הסביבה, גאואינפורמטיקה ותכנון ערים-גאוגרפיה דו-מחלקתי","s":"תואר 1"},{"d":"מדעי הסביבה, גאואינפורמטיקה ותכנון ערים-גאוגרפיה ראשי","s":"תואר 1"},{"d":"מדעי הסביבה, גאואינפורמטיקה ותכנון ערים-גאוגרפיה חד-מחלקתי","s":"תואר 1"}],"חינוך":[{"d":"חינוך מחקרי - חינוך, למידה והתחדשות","s":"תואר 2"},{"d":"חינוך מחקרי - מנהל, חברה ומדיניות החינוך","s":"תואר 2"},{"d":"חינוך דו-מחלקתי","s":"תואר 1"},{"d":"חינוך ראשי - מנהל ומדיניות חינוך","s":"תואר 1"},{"d":"חינוך דו-מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"פילוסופיה":[{"d":"פילוסופיה מחקרי","s":"תואר 2"},{"d":"פילוסופיה כללי","s":"תואר 2"},{"d":"פילוסופיה דו מחלקתי","s":"תואר 1"}],"כלכלה":[{"d":"כלכלה כללי","s":"תואר 2"},{"d":"כלכלה מחקרי","s":"תואר 2"},{"d":"כלכלה חד מחלקתי - חשבונאות","s":"תואר 1"},{"d":"כלכלה חד מחלקתי - מנהל עסקים","s":"תואר 1"},{"d":"כלכלה דו מחלקתי","s":"תואר 1"},{"d":"כלכלה ראשי","s":"תואר 1"}],"עבודה סוציאלית":[{"d":"עבודה סוציאלית כללי - בריאות הנפש","s":"תואר 2"},{"d":"עבודה סוציאלית כללי - ילד ומשפחה","s":"תואר 2"},{"d":"עבודה סוציאלית חד מחלקתי - מסלול רגיל","s":"תואר 1"},{"d":"עבודה סוציאלית חד מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"מדעי המחשב":[{"d":"מדעי המחשב עבודת גמר - מדעי המחשב","s":"תואר 2"},{"d":"מדעי המחשב צבירה - מדעי המחשב","s":"תואר 2"},{"d":"מדעי המחשב ראשי","s":"תואר 1"},{"d":"מדעי המחשב דו מחלקתי - מדעי הרוח והחברה","s":"תואר 1"},{"d":"מדעי המחשב חד-מחלקתי - מדעי המחשב","s":"תואר 1"},{"d":"מדעי המחשב חד-מחלקתי - מדעי הנתונים","s":"תואר 1"},{"d":"מדעי המחשב משולב לתואר כפול - הנדסת חשמל ומחשבים","s":"תואר 1"}],"מתמטיקה":[{"d":"מתמטיקה עבודת גמר - מתמטיקה יישומית","s":"תואר 2"},{"d":"מתמטיקה עבודת גמר - מתמטיקה עיונית","s":"תואר 2"},{"d":"מתמטיקה ראשי","s":"תואר 1"},{"d":"מתמטיקה חד-מחלקתי - מתמטיקה כללית","s":"תואר 1"},{"d":"מתמטיקה דו מחלקתי - מתמטיקה ומדעי המחשב","s":"תואר 1"}],"פיסיקה":[{"d":"פיסיקה עבודת גמר - פיסיקה","s":"תואר 2"},{"d":"פיסיקה חד מחלקתי","s":"תואר 1"},{"d":"פיסיקה ראשי","s":"תואר 1"},{"d":"פיסיקה משולב לתואר כפול - פיסיקה והנדסת חשמל","s":"תואר 1"}],"כימיה":[{"d":"כימיה עבודת גמר - כימיה","s":"תואר 2"},{"d":"כימיה חד מחלקתי - כימיה","s":"תואר 1"},{"d":"כימיה ראשי","s":"תואר 1"}],"מדעי החיים":[{"d":"מדעי החיים עבודת גמר - מדעי החיים","s":"תואר 2"},{"d":"מדעי החיים חד מחלקתי - מדעי החיים","s":"תואר 1"},{"d":"מדעי החיים ראשי","s":"תואר 1"},{"d":"מדעי החיים חד מחלקתי - ביולוגיה וביוטכנולוגיה ימית - קמפוס אילת","s":"תואר 1","e":1}],"הנדסת חשמל ומחשבים":[{"d":"הנדסת חשמל ומחשבים חד מחלקתי עם עבודת גמר (תיזה)","s":"תואר 2"},{"d":"הנדסת חשמל ומחשבים חד מחלקתי","s":"תואר 1"}],"הנדסת מכונות":[{"d":"הנדסת מכונות חד מחלקתי עם עבודת גמר (תיזה)","s":"תואר 2"},{"d":"הנדסת מכונות חד מחלקתי","s":"תואר 1"}],"הנדסה כימית":[{"d":"הנדסה כימית חד מחלקתי עם עבודת גמר (תיזה)","s":"תואר 2"},{"d":"הנדסה כימית חד-מחלקתי","s":"תואר 1"}],"הנדסת תעשיה וניהול":[{"d":"הנדסת תעשיה וניהול חד מחלקתי עם סמינר מסכם","s":"תואר 2"},{"d":"הנדסת תעשיה וניהול חד מחלקתי","s":"תואר 1"}],"הנדסת מערכות מידע":[{"d":"הנדסת מערכות מידע חד מחלקתי עם עבודת גמר (תיזה)","s":"תואר 2"},{"d":"הנדסת מערכות מידע חד מחלקתי","s":"תואר 1"}],"הנדסת בניין":[{"d":"הנדסת בניין חד מחלקתי עם עבודת גמר (תיזה)","s":"תואר 2"},{"d":"הנדסת בניין חד מחלקתי","s":"תואר 1"}],"הנדסה ביו-רפואית":[{"d":"הנדסה ביו-רפואית חד מחלקתי עם עבודת גמר (תיזה)","s":"תואר 2"},{"d":"הנדסה ביו-רפואית חד מחלקתי","s":"תואר 1"}],"הנדסת ביוטכנולוגיה":[{"d":"הנדסת ביוטכנולוגיה חד מחלקתי עם עבודת גמר (תיזה)","s":"תואר 2"},{"d":"הנדסת ביוטכנולוגיה חד-מחלקתי","s":"תואר 1"}],"הנדסת תכנה":[{"d":"הנדסת תכנה חד מחלקתי","s":"תואר 1"}],"הנדסת מחשבים":[{"d":"הנדסת מחשבים חד מחלקתי","s":"תואר 1"}],"הנדסת נתונים":[{"d":"הנדסת נתונים חד מחלקתי","s":"תואר 1"}],"מנהל עסקים":[{"d":"מנהל עסקים ללא עבודת גמר - MBA בפרספקטיבה רב-תחומית","s":"תואר 2"},{"d":"מנהל עסקים ללא עבודת גמר - MBA בשיווק וייעוץ אסטרטגי","s":"תואר 2"},{"d":"מנהל עסקים ללא עבודת גמר - MBA במימון ואקטואריה","s":"תואר 2"},{"d":"מנהל עסקים ללא עבודת גמר - MBA בחדשנות ויזמות היי-טק","s":"תואר 2"}],"ניהול":[{"d":"ניהול חד מחלקתי - שיווק","s":"תואר 1"},{"d":"ניהול חד מחלקתי - מימון","s":"תואר 1"},{"d":"ניהול חד מחלקתי - יזמות וחדשנות","s":"תואר 1"},{"d":"ניהול דו מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"ניהול תיירות ופנאי":[{"d":"ניהול תיירות ופנאי ללא עבודת גמר-מרוכז","s":"תואר 2"},{"d":"ניהול תיירות ופנאי חד מחלקתי","s":"תואר 1"},{"d":"ניהול תיירות ופנאי חד מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"רוקחות":[{"d":"רוקחות קליני","s":"תואר 2"},{"d":"רוקחות חד מחלקתי","s":"תואר 1"}],"פיזיותרפיה":[{"d":"פיזיותרפיה עם עבודת גמר","s":"תואר 2"},{"d":"פיזיותרפיה חד-מחלקתי","s":"תואר 1"}],"מדעי האחיות (סיעוד)":[{"d":"מדעי האחיות (סיעוד) חד-מחלקתי","s":"תואר 2"},{"d":"מדעי האחיות (סיעוד) חד-מחלקתי","s":"תואר 1"},{"d":"מדעי האחיות (סיעוד) חד-מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"ריפוי בעיסוק":[{"d":"ריפוי בעיסוק חד מחלקתי","s":"תואר 1"}],"רפואה על שם ג'ויס וארוינג גולדמן":[{"d":"רפואה על שם ג'ויס וארוינג גולדמן חד-מחלקתי","s":"תואר 1"}],"תקשורת":[{"d":"תקשורת המחקרי","s":"תואר 2"},{"d":"תקשורת דו מחלקתי","s":"תואר 1"},{"d":"תקשורת דו מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"אמנויות":[{"d":"אמנויות דו מחלקתי - אמנות חזותית","s":"תואר 1"},{"d":"אמנויות דו מחלקתי - תולדות האמנות","s":"תואר 1"},{"d":"אמנויות דו מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"לימודים רב תחומיים":[{"d":"לימודים רב תחומיים דו מחלקתי","s":"תואר 1"},{"d":"לימודים רב תחומיים דו מחלקתי - קמפוס אילת","s":"תואר 1","e":1}],"הכשרת מורים":[{"d":"הכשרת מורים חד שנתי","s":"תואר 2"},{"d":"הכשרת מורים דו שנתי","s":"תואר 2"},{"d":"הכשרת מורים חד שנתי - קמפוס אילת","s":"תואר 2","e":1}],"מדעי ההתנהגות":[{"d":"מדעי ההתנהגות חד מחלקתי","s":"תואר 1"}],"קיימות ושמירת סביבה":[{"d":"קיימות ושמירת סביבה דו מחלקתי","s":"תואר 1"}],"בלשנות":[{"d":"בלשנות מחקרי","s":"תואר 2"},{"d":"בלשנות דו מחלקתי","s":"תואר 1"}],"ארכיאולוגיה":[{"d":"ארכיאולוגיה מחקרי","s":"תואר 2"},{"d":"ארכיאולוגיה דו מחלקתי","s":"תואר 1"}],"פוליטיקה וממשל":[{"d":"פוליטיקה וממשל מחקרי","s":"תואר 2"},{"d":"פוליטיקה וממשל דו מחלקתי","s":"תואר 1"}],"ספרויות זרות":[{"d":"ספרויות זרות מחקרי","s":"תואר 2"},{"d":"ספרויות זרות דו מחלקתי - ספרות אנגלית","s":"תואר 1"}],"ניהול וישוב סכסוכים":[{"d":"ניהול וישוב סכסוכים כללי","s":"תואר 2"},{"d":"ניהול וישוב סכסוכים כללי - קמפוס אילת","s":"תואר 2","e":1},{"d":"ניהול וישוב סכסוכים חטיבה מורחבת","s":"תואר 1"}],"לימודי אפריקה":[{"d":"לימודי אפריקה מחקרי","s":"תואר 2"},{"d":"לימודי אפריקה דו מחלקתי","s":"תואר 1"}],"תולדות האמנות ותרבות חזותית":[{"d":"תולדות האמנות ותרבות חזותית מחקרי","s":"תואר 2"},{"d":"תולדות האמנות ותרבות חזותית כללי - קמפוס אילת","s":"תואר 2","e":1}],"מדעי כדור הארץ והסביבה":[{"d":"מדעי כדור הארץ והסביבה עבודת גמר","s":"תואר 2"},{"d":"מדעי כדור הארץ והסביבה ראשי","s":"תואר 1"},{"d":"מדעי כדור הארץ והסביבה חד מחלקתי","s":"תואר 1"}],"סטטיסטיקה וניתוח נתונים":[{"d":"סטטיסטיקה וניתוח נתונים דו מחלקתי","s":"תואר 1"}],"מדעי הרפואה":[{"d":"מדעי הרפואה עם תיזה","s":"תואר 2"}],"מדעי המעבדה הרפואית":[{"d":"מדעי המעבדה הרפואית חד-מחלקתי","s":"תואר 1"}],"רפואת חרום":[{"d":"רפואת חרום חד-מחלקתי","s":"תואר 1"}],"ניהול מערכות בריאות":[{"d":"ניהול מערכות בריאות חד מחלקתי","s":"תואר 1"}],"יזמות וחדשנות":[{"d":"יזמות וחדשנות דו מחלקתי","s":"תואר 1"}],"רפואה ארבע שנתית":[{"d":"רפואה ארבע שנתית חד מחלקתי","s":"תואר 1"}],"הנדסה שנה א'":[{"d":"הנדסה שנה א' חד-מחלקתי - קמפוס אילת","s":"תואר 1","e":1}]};

const departmentsList = Object.keys(programsData).sort();

export default function PolaChatWithNavigation() {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [awaitingSubOption, setAwaitingSubOption] = useState(null);
  const [programSearchMode, setProgramSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const messagesEndRef = useRef(null);
  const searchInputRef = useRef(null);

  const topics = {
    counseling: { id: 'counseling', label: 'יעוץ לימודים', icon: '🎓', color: 'blue' },
    programs: { id: 'programs', label: 'תכניות לימוד', icon: '📚', color: 'green' },
    admission: { id: 'admission', label: 'תנאי קבלה', icon: '✅', color: 'purple' },
    other: { id: 'other', label: 'מלגות ומעונות', icon: '💡', color: 'orange' },
  };

  const topicResponses = {
    counseling: {
      initial: 'מעולה! אשמח לעזור לך עם יעוץ לימודים באוניברסיטת בן-גוריון 🎓\n\nספר/י לי קצת על עצמך - מה מעניין אותך ללמוד? האם יש תחום ספציפי שאת/ה שוקל/ת?',
      followUp: 'זה נשמע מעניין! באוניברסיטת בן-גוריון יש מגוון רחב של אפשרויות בתחום הזה. אשמח לשמוע עוד על הרקע שלך כדי להתאים לך את המסלול הנכון.',
    },
    programs: {
      initial: 'בשמחה! 📚 באוניברסיטת בן-גוריון יש מגוון רחב של תכניות לימוד.\n\nאיזו תכנית לימוד מעניינת אותך? הקלד/י את שם המחלקה ואני אציג לך את כל האפשרויות 👇',
      followUp: 'רוצה לחפש תכנית נוספת? הקלד/י את שם המחלקה 👇',
    },
    admission: {
      initial: 'אשמח לעזור עם מידע על תנאי קבלה! ✅\n\nאיך תרצה/י להתקדם?',
      followUp: 'אעדכן אותך בפרטים המדויקים לגבי תנאי הקבלה לתכנית הזו.',
      hasSubOptions: true,
      subOptions: [
        { id: 'check_my_data', label: 'אני רוצה לדעת למה אני יכול להתקבל עם הנתונים שלי', icon: '📊' },
        { id: 'check_program', label: 'אני רוצה לבדוק תנאי קבלה לתכנית מסוימת', icon: '🔍' },
      ],
      subResponses: {
        check_my_data: 'מצוין! בוא נבדוק למה את/ה יכול/ה להתקבל 📊\n\nאשמח אם תשתף/י אותי בנתונים שלך:\n• מה ממוצע הבגרות שלך?\n• האם יש לך ציון פסיכומטרי? אם כן, מה הציון?\n• האם יש לך ציון אמיר/אמירם?',
        check_program: 'בשמחה! 🔍\n\nלאיזו תכנית את/ה מתעניין/ת לבדוק את תנאי הקבלה?\n\nאת/ה יכול/ה לציין שם של תכנית ספציפית או תחום שמעניין אותך.',
      },
    },
    other: {
      initial: 'בטח! 💡 אוכל לעזור לך עם מידע על מלגות, מעונות ושירותים נוספים.\n\nבאוניברסיטת בן-גוריון יש מגוון מלגות לסטודנטים מצטיינים, מלגות סיוע, ומעונות סטודנטים בקמפוס. על מה תרצה/י לשמוע?',
      followUp: 'יש לי מידע מפורט על הנושא הזה. בוא נצלול לפרטים!',
    },
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, programSearchMode, selectedDepartment]);

  useEffect(() => {
    if (programSearchMode && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [programSearchMode]);

  const addPolaMessage = (text, topic, isTopicSwitch = false, showSubOptions = false) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'pola',
        text,
        topic,
        isTopicSwitch,
        showSubOptions,
        timestamp: new Date(),
      }]);
      setIsTyping(false);
    }, 800);
  };

  const handleTopicSelect = (topicId) => {
    const topic = topics[topicId];
    const topicData = topicResponses[topicId];
    const isSwitch = currentTopic !== null && currentTopic !== topicId;

    if (isSwitch) {
      setMessages(prev => [...prev, {
        type: 'system',
        text: `עברת לנושא: ${topic.label} ${topic.icon}`,
        timestamp: new Date(),
      }]);
    }

    setCurrentTopic(topicId);
    setSelectedDepartment(null);
    setSearchQuery('');

    if (topicId === 'programs') {
      setProgramSearchMode(true);
      setAwaitingSubOption(null);
      addPolaMessage(topicData.initial, topicId, isSwitch);
    } else if (topicData.hasSubOptions) {
      setProgramSearchMode(false);
      setAwaitingSubOption(topicId);
      addPolaMessage(topicData.initial, topicId, isSwitch, true);
    } else {
      setProgramSearchMode(false);
      setAwaitingSubOption(null);
      const response = isSwitch || messages.some(m => m.topic === topicId)
        ? topicData.followUp
        : topicData.initial;
      addPolaMessage(response, topicId, isSwitch);
    }
  };

  const handleSubOptionSelect = (subOptionId) => {
    const topicData = topicResponses[awaitingSubOption];
    const subOption = topicData.subOptions.find(s => s.id === subOptionId);

    setMessages(prev => [...prev, {
      type: 'user',
      text: subOption.label,
      timestamp: new Date(),
    }]);

    setAwaitingSubOption(null);
    addPolaMessage(topicData.subResponses[subOptionId], currentTopic);
  };

  const handleDepartmentSelect = (deptName) => {
    setSelectedDepartment(deptName);
    setSearchQuery('');
    setProgramSearchMode(false);

    setMessages(prev => [...prev, {
      type: 'user',
      text: deptName,
      timestamp: new Date(),
    }]);

    const programs = programsData[deptName];
    const baPrograms = programs.filter(p => p.s === 'תואר 1');
    const maPrograms = programs.filter(p => p.s === 'תואר 2');

    let responseText = `מצאתי את התכניות במחלקה "${deptName}" 🎯\n\n`;
    if (baPrograms.length > 0) responseText += `📘 ${baPrograms.length} תכניות תואר ראשון\n`;
    if (maPrograms.length > 0) responseText += `📗 ${maPrograms.length} תכניות תואר שני\n`;
    responseText += '\nבחר/י תכנית שמעניינת אותך:';

    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'pola',
        text: responseText,
        topic: 'programs',
        showPrograms: deptName,
        timestamp: new Date(),
      }]);
      setIsTyping(false);
    }, 800);
  };

  const handleProgramSelect = (program) => {
    setMessages(prev => [...prev, {
      type: 'user',
      text: program.d,
      timestamp: new Date(),
    }]);

    const eilatText = program.e ? ' (קמפוס אילת 🏖️)' : '';
    const degreeText = program.s === 'תואר 1' ? 'תואר ראשון' : 'תואר שני';

    addPolaMessage(
      `בחרת ב: "${program.d}"${eilatText}\n📚 סוג תואר: ${degreeText}\n\nרוצה לדעת עוד פרטים על התכנית הזו? אפשר לשאול על תנאי קבלה, מבנה התואר, או כל שאלה אחרת! 😊`,
      'programs'
    );
    setProgramSearchMode(true);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, {
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    }]);

    setInputValue('');

    if (currentTopic) {
      addPolaMessage(topicResponses[currentTopic].followUp, currentTopic);
      if (currentTopic === 'programs') {
        setProgramSearchMode(true);
      }
    }
  };

  const getFilteredDepartments = () => {
    if (!searchQuery) return [];
    return departmentsList.filter(dept => dept.includes(searchQuery));
  };

  const TopicButtons = ({ excludeTopic, size = 'small' }) => {
    const otherTopics = Object.values(topics).filter(t => t.id !== excludeTopic);

    return (
      <div className={`flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-orange-200/50 ${size === 'large' ? 'justify-center' : ''}`}>
        <span className="text-xs text-gray-400 w-full mb-1">נושאים נוספים:</span>
        {otherTopics.map(topic => (
          <button
            key={topic.id}
            onClick={() => handleTopicSelect(topic.id)}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-white/80 hover:bg-orange-100 border border-orange-200 rounded-full text-gray-600 hover:text-orange-600 transition-all duration-200 hover:scale-105"
          >
            <span>{topic.icon}</span>
            <span>{topic.label}</span>
          </button>
        ))}
      </div>
    );
  };

  const SubOptionButtons = ({ topicId }) => {
    const topicData = topicResponses[topicId];
    if (!topicData.subOptions) return null;

    return (
      <div className="space-y-2 mt-3">
        {topicData.subOptions.map(option => (
          <button
            key={option.id}
            onClick={() => handleSubOptionSelect(option.id)}
            className="w-full text-right p-3 rounded-xl border-2 bg-white border-orange-200 text-gray-700 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 flex items-center gap-2"
          >
            <span className="text-lg">{option.icon}</span>
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    );
  };

  const ProgramButtons = ({ deptName }) => {
    const programs = programsData[deptName];
    if (!programs) return null;

    const baPrograms = programs.filter(p => p.s === 'תואר 1');
    const maPrograms = programs.filter(p => p.s === 'תואר 2');

    return (
      <div className="space-y-2 mt-3">
        {baPrograms.length > 0 && (
          <>
            <div className="text-xs font-bold text-blue-600 mt-2">📘 תואר ראשון</div>
            {baPrograms.map((prog, idx) => (
              <button
                key={`ba-${idx}`}
                onClick={() => handleProgramSelect(prog)}
                className="w-full text-right p-2.5 rounded-xl border-2 bg-white border-blue-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
              >
                <span className="text-xs">🎓</span>
                <span className="text-xs font-medium flex-1">{prog.d}</span>
                {prog.e && <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full">אילת</span>}
              </button>
            ))}
          </>
        )}
        {maPrograms.length > 0 && (
          <>
            <div className="text-xs font-bold text-purple-600 mt-2">📗 תואר שני</div>
            {maPrograms.map((prog, idx) => (
              <button
                key={`ma-${idx}`}
                onClick={() => handleProgramSelect(prog)}
                className="w-full text-right p-2.5 rounded-xl border-2 bg-white border-purple-200 text-gray-700 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 flex items-center gap-2"
              >
                <span className="text-xs">🎓</span>
                <span className="text-xs font-medium flex-1">{prog.d}</span>
                {prog.e && <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full">אילת</span>}
              </button>
            ))}
          </>
        )}
      </div>
    );
  };

  const ProgramSearchBox = () => {
    const filtered = getFilteredDepartments();

    return (
      <div className="mt-3 space-y-2">
        <div className="relative">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 הקלד שם מחלקה..."
            className="w-full p-3 rounded-xl border-2 border-orange-300 text-gray-700 text-sm text-right outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            dir="rtl"
          />
        </div>
        {searchQuery && filtered.length > 0 && (
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {filtered.map(dept => (
              <button
                key={dept}
                onClick={() => handleDepartmentSelect(dept)}
                className="w-full text-right p-2.5 rounded-xl border bg-white border-orange-200 text-gray-700 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 text-sm"
              >
                📚 {dept}
              </button>
            ))}
          </div>
        )}
        {searchQuery && filtered.length === 0 && (
          <div className="text-center text-gray-400 text-sm py-2">
            לא נמצאו מחלקות תואמות 😔
          </div>
        )}
      </div>
    );
  };

  const MainTopicButtons = () => (
    <div className="space-y-2">
      {Object.values(topics).map(topic => (
        <button
          key={topic.id}
          onClick={() => handleTopicSelect(topic.id)}
          className="w-full text-right p-3 rounded-xl border-2 bg-white border-orange-200 text-gray-700 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 flex items-center gap-2"
        >
          <span className="text-lg">{topic.icon}</span>
          <span className="text-sm font-medium">{topic.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col" style={{ height: '700px' }}>
        {/* Header */}
        <div className="bg-gradient-to-l from-orange-500 to-orange-400 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
              🎓
            </div>
            <div>
              <h1 className="text-white font-bold">פולה</h1>
              <p className="text-orange-100 text-xs">היועצת הדיגיטלית של בן-גוריון</p>
            </div>
          </div>
          {currentTopic && (
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-white text-xs">{topics[currentTopic].icon} {topics[currentTopic].label}</span>
            </div>
          )}
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {/* Welcome Message */}
          <div className="flex flex-col items-end">
            <div className="text-orange-500 text-xs font-medium mb-1">פולה היועצת הדיגיטלית</div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl rounded-tr-sm p-4 max-w-[85%] border border-orange-100 shadow-sm">
              <p className="text-gray-700 text-sm leading-relaxed">
                היי, נעים להכיר! 😊 אני פולה 👋 יועצת אקדמית דיגיטלית של אוניברסיטת בן-גוריון בנגב 🎓
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-2">
                אני אשמח לעזור לך ב...
              </p>
              {!currentTopic && <div className="mt-3"><MainTopicButtons /></div>}
              {currentTopic && <TopicButtons excludeTopic={null} />}
            </div>
          </div>

          {/* Messages */}
          {messages.map((msg, idx) => (
            <div key={idx}>
              {msg.type === 'system' ? (
                <div className="flex justify-center">
                  <div className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {msg.text}
                  </div>
                </div>
              ) : msg.type === 'user' ? (
                <div className="flex flex-col items-start">
                  <div className="bg-orange-500 text-white rounded-2xl rounded-tl-sm p-3 max-w-[85%] shadow-sm">
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-end">
                  <div className="text-orange-500 text-xs font-medium mb-1">פולה היועצת הדיגיטלית</div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl rounded-tr-sm p-4 max-w-[85%] border border-orange-100 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                    {msg.showPrograms ? (
                      <ProgramButtons deptName={msg.showPrograms} />
                    ) : msg.showSubOptions && awaitingSubOption === msg.topic ? (
                      <SubOptionButtons topicId={msg.topic} />
                    ) : (
                      <TopicButtons excludeTopic={msg.topic} />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Program Search Box - shown when in program search mode */}
          {programSearchMode && !isTyping && (
            <div className="flex flex-col items-end">
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl rounded-tr-sm p-4 max-w-[85%] border border-green-200 shadow-sm">
                <ProgramSearchBox />
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex flex-col items-end">
              <div className="text-orange-500 text-xs font-medium mb-1">פולה היועצת הדיגיטלית</div>
              <div className="bg-orange-50 rounded-2xl rounded-tr-sm p-4 border border-orange-100">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-orange-500 flex items-center gap-3">
          <button
            onClick={handleSendMessage}
            className="w-10 h-10 bg-orange-400 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="הקלידו כאן..."
            className="flex-1 bg-white/10 text-white placeholder-white/70 outline-none text-right px-4 py-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
