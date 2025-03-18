

    
        function affichertout() {
            document.getElementById("btn_portfolio").className="btn"
            document.getElementById("btn_all").className="btn active"
            document.getElementById("btn_creative").className="btn"
            document.getElementById("btn_corporate").className="btn"
            document.getElementsByClassName('corporate')[0].className="corporate"
            document.getElementsByClassName('corporate')[1].className="corporate"
            document.getElementsByClassName('corporate')[2].className="corporate"
            document.getElementsByClassName('portfolio')[0].className="portfolio"
            document.getElementsByClassName('portfolio')[1].className="portfolio"
            document.getElementsByClassName('portfolio')[2].className="portfolio"
            document.getElementsByClassName('portfolio')[3].className="portfolio" 
            document.getElementsByClassName('creative')[0].className="creative"
            document.getElementsByClassName('creative')[1].className="creative"
            }
        function affichercreative() {
            affichertout()
            document.getElementById("btn_portfolio").className="btn"
            document.getElementById("btn_all").className="btn"
            document.getElementById("btn_creative").className="btn active"
            document.getElementById("btn_corporate").className="btn"
            document.getElementsByClassName('corporate')[0].className="corporate hidden"
            document.getElementsByClassName('corporate')[1].className="corporate hidden"
            document.getElementsByClassName('corporate')[2].className="corporate hidden"
            document.getElementsByClassName('portfolio')[0].className="portfolio hidden"
            document.getElementsByClassName('portfolio')[1].className="portfolio hidden"
            document.getElementsByClassName('portfolio')[2].className="portfolio hidden"
            document.getElementsByClassName('portfolio')[3].className="portfolio hidden"
            }
        function afficherportfolio() {
            affichertout()
            document.getElementById("btn_portfolio").className="btn active"
            document.getElementById("btn_all").className="btn"
            document.getElementById("btn_creative").className="btn"
            document.getElementById("btn_corporate").className="btn"
            document.getElementsByClassName('creative')[0].className="creative hidden"
            document.getElementsByClassName('creative')[1].className="creative hidden"
            document.getElementsByClassName('corporate')[0].className="corporate hidden"
            document.getElementsByClassName('corporate')[1].className="corporate hidden"
            document.getElementsByClassName('corporate')[2].className="corporate hidden"
            }
        function affichercorporate() {
            affichertout()
            document.getElementById("btn_corporate").className="btn active"
            document.getElementById("btn_portfolio").className="btn"
            document.getElementById("btn_all").className="btn"
            document.getElementById("btn_creative").className="btn"
            document.getElementsByClassName('creative')[0].className="creative hidden"
            document.getElementsByClassName('creative')[1].className="creative hidden"
            document.getElementsByClassName('portfolio')[0].className="portfolio hidden"
            document.getElementsByClassName('portfolio')[1].className="portfolio hidden"
            document.getElementsByClassName('portfolio')[2].className="portfolio hidden"
            document.getElementsByClassName('portfolio')[3].className="portfolio hidden"
            }
 