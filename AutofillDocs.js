function onOpen() {
    const ui = SpreadsheetApp.getUi();
    const menu = ui.createMenu('AutoFill Docs');
    menu.addItem ('Create Term','createNewGoogleDocs');
    menu.addToUi();
    
    }
    
    function createNewGoogleDocs() {
    
    const googleDocTemplate = DriveApp.getFileById('Document ID : Stored in the URL');
    const destinationFolder = DriveApp.getFolderById('Folder ID: Stored in the URL');

    }