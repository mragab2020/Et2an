function doGet() {
  const folderId = "PUT_YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE";
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  const result = [];

  while (files.hasNext()) {
    const file = files.next();
    result.push({
      name: file.getName(),
      url: file.getUrl(),
      updated: file.getLastUpdated()
    });
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}