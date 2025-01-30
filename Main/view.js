function updateView(page){
    model.app.currentPage = page;
    switch(page){
        case 'hjem':
            hjemView();
        break;
        case 'omoss':
            omOssView();
        break;
        case 'kontakt':
            kontaktView();
        break;
    }
}