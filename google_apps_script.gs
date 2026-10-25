/**
 * Google Apps Script - كود استقبال التقارير وحفظها في Google Drive و Google Sheets
 * 
 * طريقة الاستخدام:
 * 1. افتح Google Sheets جديد في حسابك على Google Drive
 * 2. اضغط على Extensions (إضافات) -> Apps Script
 * 3. انسخ هذا الكود والصقه هناك بالكامل
 * 4. اضغط Deploy (نشر) -> New deployment -> نوع Web App
 * 5. اختر Execute as: "Me" و Who has access: "Anyone"
 * 6. انسخ رابط الـ Web App وضعه في متغير GOOGLE_SCRIPT_URL في ملف app.js
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // 1. مجلد رئيسي على درايف
    var folderName = "تقارير الطلبة - BTEC";
    var folders = DriveApp.getFoldersByName(folderName);
    var mainFolder;
    if (folders.hasNext()) {
      mainFolder = folders.next();
    } else {
      mainFolder = DriveApp.createFolder(folderName);
    }

    // 2. مجلد فرعي باسم الصف الدراسي لتنظيم الملفات
    var gradeFolderName = data.gradeLevel || "عام";
    var subFolders = mainFolder.getFoldersByName(gradeFolderName);
    var gradeFolder;
    if (subFolders.hasNext()) {
      gradeFolder = subFolders.next();
    } else {
      gradeFolder = mainFolder.createFolder(gradeFolderName);
    }

    // 3. فك تشفير الملف وحفظه داخل مجلد الصف
    var decodedFile = Utilities.base64Decode(data.fileData);
    var cleanFileName = (data.studentName || "طالب") + " - " + (data.taskName || "مهمة") + " - " + data.fileName;
    var blob = Utilities.newBlob(decodedFile, data.fileType || "application/octet-stream", cleanFileName);
    var savedFile = gradeFolder.createFile(blob);
    var fileUrl = savedFile.getUrl();

    // 4. تسجيل بيانات الطالب في جدول Google Sheets المفتوح
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // إضافة ترويسة الجدول في حال كان جديداً
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "الرقم المرجعي",
        "تاريخ ووقت التسليم",
        "اسم الطالب الرباعي",
        "الصف والمستوى",
        "اسم المهمة",
        "اسم الملف الأصلي",
        "حجم الملف",
        "رابط تحميل الملف من Google Drive"
      ]);
      // تنسيق الترويسة
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#007fa3");
      headerRange.setFontColor("#ffffff");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // إضافة سطر جديد بالبيانات
    sheet.appendRow([
      data.refId,
      new Date().toLocaleString("ar-JO"),
      data.studentName,
      data.gradeLevel,
      data.taskName,
      data.fileName,
      data.fileSize,
      fileUrl
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      refId: data.refId,
      fileUrl: fileUrl
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
