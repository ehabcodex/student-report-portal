/**
 * Student Report Submission Portal
 * Ministry of Education & Pearson BTEC
 * Integrated with Google Drive & Google Sheets
 */

// =========================================================================
// 🔗 إعداد رابط جوجل درايف (ضع رابط الـ Web App الخاص بك هنا):
// =========================================================================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwLk8yxtJrcqpkLEwfhQFgiZDsHRILhibr6HihI1MMB_u0XcQuKHkaiafxK1f7cbIPD/exec"; // <-- الصق رابط الـ Web App هنا بين علامتي التنصيص

// =========================================================================
// 1. Multilingual Translations Dictionary
// =========================================================================
const translations = {
    ar: {
        pageTitle: "بوابة تسليم تقارير الطلبة | وزارة التربية والتعليم & Pearson",
        jordanKingdom: "المملكة الأردنية الهاشمية",
        ministryTitle: "وزارة التربية والتعليم",
        btecProgram: "برامج BTEC المعتمدة",
        darkMode: "الوضع الليلي",
        lightMode: "الوضع النهاري",
        langLabel: "English",
        heroBadge: "بوابة التسليم الرقمي للمشاريع والتقارير المهنية",
        heroTitle: "منصة رفع تقارير الطلبة",
        heroSubtitle: "يرجى تعبئة بيانات الطالب بدقة وإرفاق ملف التقرير بتنسيق مضغوط (ZIP / RAR / 7Z)",
        sectionStudentTitle: "بيانات الطالب",
        sectionStudentDesc: "أدخل الاسم الكامل واختر المرحلة الدراسية المعتمدة",
        studentNameLabel: "اسم الطالب الرباعي",
        nameHint: "يرجى كتابة الاسم الرباعي كما هو مسجل في المدرسة",
        gradeLabel: "الصف والمستوى الدراسي",
        grade10Title: "الصف العاشر",
        grade10Sub: "Level 2 - التعليم المهني",
        grade11Title: "الصف الأول ثانوي",
        grade11Sub: "Level 3 part 1 - السنة الأولى",
        grade12Title: "الصف الثاني عشر",
        grade12Sub: "Level 3 part 2 - التخرج والمشروع",
        sectionTaskTitle: "بيانات المهمة أو التقرير",
        sectionTaskDesc: "حدد عنوان المهمة المطلوبة ورقم الوحدة",
        taskNameLabel: "اسم المهمة / عنوان المشروع",
        quickSuggestions: "اقتراحات سريعة:",
        sectionUploadTitle: "رفع ملف التقرير المضغوط",
        sectionUploadDesc: "يجب أن يكون الملف مضغوطاً بصيغة (ZIP, RAR, 7Z) يحتوي على كافة المستندات والأدلة",
        dropzonePromptTitle: "اسحب وأفلت الملف المضغوط هنا",
        dropzonePromptSubtitle: "أو اضغط للتصفح واختيار الملف من جهازك",
        fileSizeLimit: "الحد الأقصى: 50 ميغابايت",
        fileReadyBadge: "جاهز للرفع",
        submitBtn: "إرسال التقرير واعتماد التسليم",
        submitNotice: "يتم حفظ وتوثيق التسليمات إلكترونياً مع رقم مرجعي رسمي في Google Drive",
        successTitle: "تم استلام التقرير بنجاح!",
        successSub: "تم حفظ الملف وتوثيق التسليم في سجلات Google Drive الخاصة بالمادة",
        receiptTitle: "إشعار تسليم مهمة دراسية",
        receiptStudent: "اسم الطالب:",
        receiptGrade: "الصف والمستوى:",
        receiptTask: "اسم المهمة:",
        receiptFile: "الملف المرفق:",
        receiptDate: "تاريخ ووقت التسليم:",
        printBtn: "طباعة / حفظ الإشعار",
        newSubmitBtn: "تسليم تقرير جديد",
        footerCopy: "جميع الحقوق محفوظة © وزارة التربية والتعليم & Pearson Education 2026",
        
        // Validation messages
        errNameRequired: "يرجى إدخال اسم الطالب كاملاً (كلمتين على الأقل)",
        errGradeRequired: "يرجى اختيار الصف والمستوى الدراسي",
        errTaskRequired: "يرجى إدخال اسم المهمة أو التقرير",
        errFileRequired: "يرجى إرفاق ملف التقرير المضغوط",
        errFileType: "نوع الملف غير مدعوم! يرجى اختيار ملف مضغوط (.zip, .rar, .7z, .tar, .gz)",
        errFileSize: "حجم الملف كبير جداً! الحد الأقصى المسموح به هو 50 ميغابايت لجوجل درايف.",
        errUploadFailed: "حدث خطأ أثناء الرفع إلى Google Drive، يرجى المحاولة مرة أخرى أو التحقق من الرابط."
    },
    en: {
        pageTitle: "Student Report Submission Portal | Ministry of Education & Pearson",
        jordanKingdom: "Hashemite Kingdom of Jordan",
        ministryTitle: "Ministry of Education",
        btecProgram: "Certified BTEC Programs",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        langLabel: "العربية",
        heroBadge: "Digital Submission Portal for Vocational Projects & Reports",
        heroTitle: "Student Report Submission",
        heroSubtitle: "Please fill in student details carefully and attach the report as a compressed archive (ZIP / RAR / 7Z)",
        sectionStudentTitle: "Student Information",
        sectionStudentDesc: "Enter student's full name and choose the accredited grade level",
        studentNameLabel: "Full Student Name",
        nameHint: "Please enter your full 4-part name as registered at school",
        gradeLabel: "Grade & Academic Level",
        grade10Title: "Grade 10",
        grade10Sub: "Level 2 - Vocational Education",
        grade11Title: "Grade 11 (1st Secondary)",
        grade11Sub: "Level 3 Part 1 - Year 1",
        grade12Title: "Grade 12 (2nd Secondary)",
        grade12Sub: "Level 3 Part 2 - Graduation & Final Project",
        sectionTaskTitle: "Task & Assignment Details",
        sectionTaskDesc: "Specify the assignment title and unit details",
        taskNameLabel: "Task / Assignment Name",
        quickSuggestions: "Quick Suggestions:",
        sectionUploadTitle: "Upload Compressed Report File",
        sectionUploadDesc: "The file must be a compressed archive (ZIP, RAR, 7Z) containing all documents and evidence",
        dropzonePromptTitle: "Drag & drop compressed archive here",
        dropzonePromptSubtitle: "or click to browse from your device",
        fileSizeLimit: "Max size: 50 MB",
        fileReadyBadge: "Ready to upload",
        submitBtn: "Submit Report & Finalize",
        submitNotice: "Submissions are recorded electronically with an official reference ID in Google Drive",
        successTitle: "Report Submitted Successfully!",
        successSub: "Your file has been stored and logged into Google Drive course records",
        receiptTitle: "Assignment Submission Receipt",
        receiptStudent: "Student Name:",
        receiptGrade: "Grade & Level:",
        receiptTask: "Assignment Name:",
        receiptFile: "Attached File:",
        receiptDate: "Submission Timestamp:",
        printBtn: "Print / Save Receipt",
        newSubmitBtn: "Submit Another Report",
        footerCopy: "All rights reserved © Ministry of Education & Pearson Education 2026",
        
        // Validation messages
        errNameRequired: "Please enter the student's full name (at least 2 words)",
        errGradeRequired: "Please select a grade and academic level",
        errTaskRequired: "Please enter the assignment / task name",
        errFileRequired: "Please upload a compressed report file",
        errFileType: "Unsupported file type! Please select a compressed file (.zip, .rar, .7z, .tar, .gz)",
        errFileSize: "File size exceeds limit! Maximum allowed size is 50 MB for Google Drive.",
        errUploadFailed: "Upload to Google Drive failed. Please try again or verify the script URL."
    }
};

// State variables
let currentLang = localStorage.getItem('portal_lang') || 'ar';
let currentTheme = localStorage.getItem('portal_theme') || 'light';
let selectedFile = null;

// DOM Elements
const docEl = document.documentElement;
const themeToggleBtn = document.getElementById('themeToggleBtn');
const langToggleBtn = document.getElementById('langToggleBtn');
const langLabel = document.getElementById('langLabel');
const reportForm = document.getElementById('reportUploadForm');
const studentNameInput = document.getElementById('studentName');
const clearNameBtn = document.getElementById('clearNameBtn');
const taskNameInput = document.getElementById('taskName');
const fileInput = document.getElementById('fileInput');
const dropzoneArea = document.getElementById('dropzoneArea');
const dropzonePrompt = document.getElementById('dropzonePrompt');
const filePreviewCard = document.getElementById('filePreviewCard');
const fileNameDisplay = document.getElementById('fileNameDisplay');
const fileSizeDisplay = document.getElementById('fileSizeDisplay');
const fileExtDisplay = document.getElementById('fileExtDisplay');
const fileProgressFill = document.getElementById('fileProgressFill');
const removeFileBtn = document.getElementById('removeFileBtn');
const submitBtn = document.getElementById('submitBtn');
const btnLoader = document.getElementById('btnLoader');
const btnIcon = document.getElementById('btnIcon');
const btnText = document.getElementById('btnText');
const successModal = document.getElementById('successModal');
const printReceiptBtn = document.getElementById('printReceiptBtn');
const newSubmissionBtn = document.getElementById('newSubmissionBtn');

// Error message elements
const nameError = document.getElementById('nameError');
const gradeError = document.getElementById('gradeError');
const taskError = document.getElementById('taskError');
const fileError = document.getElementById('fileError');

// ==========================================
// 2. Theme Management (Dark / Light)
// ==========================================
function applyTheme(theme) {
    currentTheme = theme;
    docEl.setAttribute('data-theme', theme);
    localStorage.setItem('portal_theme', theme);

    const themeIcon = themeToggleBtn.querySelector('.control-icon i');
    const themeText = themeToggleBtn.querySelector('.control-text');

    if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
        themeText.textContent = translations[currentLang].lightMode;
    } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeText.textContent = translations[currentLang].darkMode;
    }
}

themeToggleBtn.addEventListener('click', () => {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// ==========================================
// 3. Language & Internationalization (I18N)
// ==========================================
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portal_lang', lang);

    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    docEl.setAttribute('dir', dir);
    docEl.setAttribute('lang', lang);

    document.title = translations[lang].pageTitle;
    langLabel.textContent = translations[lang].langLabel;

    // Update all i18n text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update input placeholders
    if (studentNameInput) {
        studentNameInput.placeholder = studentNameInput.getAttribute(`data-placeholder-${lang}`) || '';
    }
    if (taskNameInput) {
        taskNameInput.placeholder = taskNameInput.getAttribute(`data-placeholder-${lang}`) || '';
    }

    // Refresh theme button label
    applyTheme(currentTheme);
}

langToggleBtn.addEventListener('click', () => {
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// ==========================================
// 4. Input Helpers & Clear Button
// ==========================================
studentNameInput.addEventListener('input', () => {
    clearNameBtn.style.display = studentNameInput.value.trim() ? 'flex' : 'none';
    clearError(nameError);
});

clearNameBtn.addEventListener('click', () => {
    studentNameInput.value = '';
    clearNameBtn.style.display = 'none';
    studentNameInput.focus();
});

taskNameInput.addEventListener('input', () => {
    clearError(taskError);
});

// Suggestion Chips Click
document.querySelectorAll('.chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
        taskNameInput.value = chip.getAttribute('data-fill');
        taskNameInput.focus();
        clearError(taskError);
    });
});

// Grade selection changes
document.querySelectorAll('input[name="gradeLevel"]').forEach(radio => {
    radio.addEventListener('change', () => {
        clearError(gradeError);
    });
});

// ==========================================
// 5. File Drag & Drop and Upload Handler
// ==========================================
const validExtensions = ['.zip', '.rar', '.7z', '.tar', '.gz'];
const maxFileSize = 50 * 1024 * 1024; // 50MB (Optimal for Google Apps Script Web payload)

function formatBytes(bytes, decimals = 1) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function validateAndSetFile(file) {
    clearError(fileError);
    if (!file) return false;

    const fileName = file.name.toLowerCase();
    const hasValidExt = validExtensions.some(ext => fileName.endsWith(ext));

    if (!hasValidExt) {
        showError(fileError, translations[currentLang].errFileType);
        resetFileInput();
        return false;
    }

    if (file.size > maxFileSize) {
        showError(fileError, translations[currentLang].errFileSize);
        resetFileInput();
        return false;
    }

    selectedFile = file;

    // Show preview card
    const ext = fileName.split('.').pop().toUpperCase();
    fileNameDisplay.textContent = file.name;
    fileSizeDisplay.textContent = formatBytes(file.size);
    fileExtDisplay.textContent = ext;

    dropzonePrompt.style.display = 'none';
    filePreviewCard.style.display = 'flex';

    fileProgressFill.style.width = '100%';
    return true;
}

function resetFileInput() {
    selectedFile = null;
    fileInput.value = '';
    dropzonePrompt.style.display = 'block';
    filePreviewCard.style.display = 'none';
}

// Drag & drop listeners
['dragenter', 'dragover'].forEach(eventName => {
    dropzoneArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneArea.classList.add('dragover');
    });
});

['dragleave', 'drop'].forEach(eventName => {
    dropzoneArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneArea.classList.remove('dragover');
    });
});

dropzoneArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
        validateAndSetFile(dt.files[0]);
    }
});

dropzoneArea.addEventListener('click', (e) => {
    if (e.target.closest('#removeFileBtn')) return;
    if (!selectedFile) {
        fileInput.click();
    }
});

fileInput.addEventListener('change', (e) => {
    if (fileInput.files && fileInput.files.length > 0) {
        validateAndSetFile(fileInput.files[0]);
    }
});

removeFileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    resetFileInput();
});

// Helper: Convert File to Base64 for Google Apps Script
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            // Remove data URI prefix (e.g. "data:application/zip;base64,")
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
        };
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

// ==========================================
// 6. Validation Helpers
// ==========================================
function showError(element, msg) {
    element.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${msg}`;
    element.classList.add('visible');
}

function clearError(element) {
    element.textContent = '';
    element.classList.remove('visible');
}

function validateForm() {
    let isValid = true;

    // 1. Student Name
    const nameVal = studentNameInput.value.trim();
    if (!nameVal || nameVal.split(/\s+/).length < 2) {
        showError(nameError, translations[currentLang].errNameRequired);
        isValid = false;
    } else {
        clearError(nameError);
    }

    // 2. Grade Selection
    const selectedGrade = document.querySelector('input[name="gradeLevel"]:checked');
    if (!selectedGrade) {
        showError(gradeError, translations[currentLang].errGradeRequired);
        isValid = false;
    } else {
        clearError(gradeError);
    }

    // 3. Task Name
    const taskVal = taskNameInput.value.trim();
    if (!taskVal || taskVal.length < 3) {
        showError(taskError, translations[currentLang].errTaskRequired);
        isValid = false;
    } else {
        clearError(taskError);
    }

    // 4. File
    if (!selectedFile) {
        showError(fileError, translations[currentLang].errFileRequired);
        isValid = false;
    } else {
        clearError(fileError);
    }

    return isValid;
}

// ==========================================
// 7. Form Submission to Google Drive & Receipt
// ==========================================
reportForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        const firstError = document.querySelector('.error-msg.visible');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Enter loading state
    submitBtn.disabled = true;
    btnLoader.style.display = 'inline-block';
    btnIcon.style.display = 'none';

    const studentName = studentNameInput.value.trim();
    const selectedGrade = document.querySelector('input[name="gradeLevel"]:checked').value;
    const taskName = taskNameInput.value.trim();
    const fileName = selectedFile.name;
    const fileSize = formatBytes(selectedFile.size);

    // Generate unique reference
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const refId = `JO-BTEC-2026-${randomNum}`;

    try {
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.startsWith('http')) {
            // Real Upload to Google Apps Script / Google Drive
            const fileBase64 = await fileToBase64(selectedFile);
            const payload = {
                refId: refId,
                studentName: studentName,
                gradeLevel: selectedGrade,
                taskName: taskName,
                fileName: fileName,
                fileSize: fileSize,
                fileType: selectedFile.type || 'application/octet-stream',
                fileData: fileBase64
            };

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Standard for Google Web App redirects
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify(payload)
            });
        } else {
            // Simulated delay if URL is not yet added
            await new Promise(r => setTimeout(r, 1200));
        }

        // Fill receipt modal
        const now = new Date();
        const formattedDate = now.toLocaleDateString(currentLang === 'ar' ? 'ar-JO' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        document.getElementById('receiptNumber').textContent = refId;
        document.getElementById('receiptStudentName').textContent = studentName;
        document.getElementById('receiptGradeName').textContent = selectedGrade;
        document.getElementById('receiptTaskName').textContent = taskName;
        document.getElementById('receiptFileName').textContent = `${fileName} (${fileSize})`;
        document.getElementById('receiptTimestamp').textContent = formattedDate;

        // Reset submit button state
        submitBtn.disabled = false;
        btnLoader.style.display = 'none';
        btnIcon.style.display = 'inline-block';

        // Show modal
        successModal.classList.add('active');

    } catch (err) {
        console.error(err);
        submitBtn.disabled = false;
        btnLoader.style.display = 'none';
        btnIcon.style.display = 'inline-block';
        showError(fileError, translations[currentLang].errUploadFailed);
    }
});

// Print Receipt
printReceiptBtn.addEventListener('click', () => {
    window.print();
});

// New Submission
newSubmissionBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
    reportForm.reset();
    resetFileInput();
    clearNameBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Close modal on click outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
    }
});

// ==========================================
// 8. Initialization on Page Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    applyTheme(currentTheme);
});
