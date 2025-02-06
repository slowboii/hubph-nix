function omOssView(){
    model.app.currentpage = 'omoss';
    // changed from omoss-header to generally header for consistency throughout the pages
    app.innerHTML = /*html*/ `
        <header class="header"> 
            <div class="omoss-title">
                <h1>
                OM OSS
                </h1>
            </div>
            <div>

            </div>
        </header>
    
    `; 
}