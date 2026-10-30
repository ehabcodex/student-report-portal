وزارة التربية والتعليم & Pearson BTEC

منصة ويب عصرية وتفاعلية مصممة لتمكين طلبة التعليم المهني والتقني (BTEC) من تسليم تقاريرهم ومشاريعهم العملية بملفات مضغوطة (ZIP / RAR / 7Z)، مع توثيق فوري وإرسال البيانات والملفات تلقائياً إلى Google Drive و Google Sheets.

✨ المميزات الرئيسية (Features)
🏛️ واجهة رسمية ومعتمدة: تضم شعار وزارة التربية والتعليم وشعار شركة بيرسون (Pearson BTEC).
🌓 دعم الوضع الليلي والنهاري (Dark / Light Mode): تجربة بصرية مريحة مع تبديل سلس وحفظ للتفضيل في المتصفح.
🌐 ثنائي اللغة (عربي / إنجليزي): دعم كامل للغتين العربية والإنجليزية وتغيير اتجاه الصفحة تلقائياً (RTL / LTR).
📚 اختيار المستويات الدراسية:
الصف العاشر - Level 2
الصف الأول ثانوي - Level 3 Part 1
الصف الثاني عشر - Level 3 Part 2
📁 رفع الملفات المضغوطة بالسحب والإفلات (Drag & Drop):
دعم صيغ الملفات المضغوطة فقط: .zip, .rar, .7z, .tar, .gz.
التحقق الفوري من نوع الملف وحجمه مع إظهار شريط تقدم ومعاينة لبيانات الملف.
🧾 إشعار استلام رقمي (Digital Receipt):
توليد رقم مرجعي رسمي لكل عملية تسليم (Reference ID).
توثيق التاريخ والوقت بدقة.
زر مباشر لطباعة الإشعار أو حفظه كملف PDF.
☁️ تكامل سحابي مباشر مع Google Drive & Google Sheets:
حفظ الملفات داخل مجلدات منظمة بحسب الصف واسم الطالب.
إدراج سطر تلقائي في جدول البيانات يحتوي على اسم الطالب، المهمة، التاريخ ورابط تحميل الملف.
📂 بنية المشروع (Project Structure)
text
student-report-portal/
├── assets/
│   ├── ministry-logo-clean.png     # شعار وزارة التربية والتعليم
│   └── pearson-logo.png            # شعار Pearson
├── index.html                      # هيكل صفحة الويب
├── style.css                       # ملف التنسيقات والتصميم المتجاوب والسمات
├── app.js                          # منطق الواجهة الأمامية والربط السحابي
├── google_apps_script.gs           # كود Google Apps Script لحفظ الملفات والبيانات
└── README.md                       # دليل وتوثيق المشروع
🚀 طريقة التثبيت والإعداد (Setup & Deployment)
1️⃣ ربط التخزين السحابي (Google Drive & Sheets)
أنشئ جدول بيانات جديد على Google Sheets
 وسمّه مثلاً: سجل تسليم تقارير الطلبة.
من القائمة العلوية للجدول، اختر ملحقات (Extensions) ⬅️ ثم Apps Script.
انسخ محتوى الكود الموجود في ملف google_apps_script.gs والصقه هناك.
اضغط على زر نشر (Deploy) ⬅️ نشر جديد (New deployment).
اضغط على رمز الترس ⚙️ واختر تطبيق ويب (Web app) ثم اضبط الآتي:
تنفيذ باسم (Execute as): حسابي (Me).
من يملك حق الوصول (Who has access): أي شخص (Anyone).
اضغط Deploy وامنح الصلاحيات للحساب، ثم انسخ رابط الـ Web app URL الناتج (ينتهي بـ /exec).
2️⃣ تحديث رابط الخادم في ملف app.js

افتح ملف app.js وتوجه إلى السطر رقم 9 والصق الرابط الذي نسخته:

javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
3️⃣ النشر على GitHub Pages
ارفع ملفات المشروع إلى مستودعك على GitHub:
bash
git add .
git commit -m "Initial commit with Google Drive integration"
git push origin main
في صفحة المستودع على GitHub، اذهب إلى: Settings ⬅️ Pages ⬅️ ومن خيار Branch اختر main واضغط Save.
سيتم إنشاء رابط مباشر لموقعك في غضون دقيقة ليصبح متاحاً للطلبة.
🛠️ التقنيات المستخدمة (Tech Stack)
HTML5 & Semantic Markup
CSS3 (Custom Properties / Flexbox / Grid / Glassmorphism)
Vanilla JavaScript (ES6+ / Fetch API / FileReader)
Google Apps Script API (DriveApp & SpreadsheetApp)
Font Awesome 6 & Google Fonts (Cairo & Plus Jakarta Sans)
📄 الترخيص (License)

هذا المشروع متاح للاستخدام التعليمي والتطويري تحت ترخيص MIT License.
