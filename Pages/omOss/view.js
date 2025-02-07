function omOssView(){
    model.app.currentpage = 'omoss';
    // changed from omoss-header to generally header for consistency throughout the pages
    app.innerHTML = /*html*/ `
    ${header('Om Oss')}
    `; 
}