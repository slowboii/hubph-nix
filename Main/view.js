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

function header(headerText){
    let html = /*HTML*/ `
    <header class="header"> 
    <div class="cover"></div>
    <img src='Assets/img/hub_header.jpg'>
        <div class="header-title">
            <h1>
            ${headerText}
            </h1>
        </div>
        <div>

        </div>
    </header>
    `
    return html;
}