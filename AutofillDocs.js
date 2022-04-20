function onOpen() {
    const ui = SpreadsheetApp.getUi();
    const menu = ui.createMenu('AutoFill Docs');
    menu.addItem ('Create Term','createNewGoogleDocs');
    menu.addToUi();
    
 }
    
function createNewGoogleDocs() {
    
    const googleDocTemplate = DriveApp.getFileById('Document ID : Stored in the URL');
    const destinationFolder = DriveApp.getFolderById('Folder ID: Stored in the URL');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Name of the Sheet');
    const rows = sheet.getDataRange().getValues();

    rows.forEach(function(row, index){
        if (index === 0) return;
        if (row['Term Link Number']) return;

    
    
    
    })
 
 }