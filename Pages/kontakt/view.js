function kontaktView(){

    model.app.currentpage = 'omoss';
        app.innerHTML = /*html*/ `
        <header class="header">
            <h1>Kontakt Oss</h1>
        </header>
        <body>
            <div class="kontakt">
                <aside>
                    <div>
                        <p>
                            <a href="mailto:fakepost@hubexaple.com"> <!-- not a real email -->
                                E-post: fakepost@hubexaple.com
                            </a>
                        </p>
                        <p>
                            <a href="https://maps.app.goo.gl/jCBJ6KF7hXjhxVmm6">
                                Adresse: Phønixbrygga 3, 1606 Fredrikstad
                            </a>
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.597019781199!2d10.940899099999996!3d59.2060349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464403004883ceb7%3A0xc38a4921beb4067d!2sHub%20Ph%C3%B8nix!5e0!3m2!1suk!2sno!4v1738844369251!5m2!1suk!2sno" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </aside>

                <div class='kontakt-form'>
                    <form>
                        <h2 style="grid-column: span 2;">Ta kontakt med oss</h2>
                        <input type="text" name="navn" placeholder="Navn" required style="grid-column: span 2;"/>
                        <input type="tel" name="mobilnummer" placeholder="Mobilnummer" required/>
                        <input type="email" name="epost" placeholder="E-post" required/>
                        <textarea name="melding" placeholder="Melding" style="resize:none" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </body>
        `; 
}
