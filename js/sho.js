/* Cart open and close */

let hideMain = document.getElementById("mainid");
let about = document.getElementById("aboutid");
let cart = document.getElementById("popup");

    function openPopup(){
        cart.classList.add("open-popup");
    }

    function closePopup(){
        cart.classList.remove("open-popup");
    }


/* Subscription popup */

let subS = document.getElementById("subpPop");

    function openSubpop(){
        subS.classList.add("subscription-pop");
        hideMain.classList.add("activem");
    }

    function closeSubpop(){
        subS.classList.remove("subscription-pop");
        hideMain.classList.remove("activem");
    }


/* purchase form */

let pur = document.getElementById("mypurchase");

    function openPurchase(){
        pur.classList.add("make-purchase-active");
        cart.classList.remove("open-popup");
        hideMain.classList.add("activem");
    }
    function closePurchase(){
        pur.classList.remove("make-purchase-active");
        hideMain.classList.remove("activem");
    }

/* special thanks */


document.getElementById("open-thankyou").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
    pur.classList.remove("make-purchase-active");
})

document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
    hideMain.classList.remove("activem");
    about.classList.remove("about-data-active");
})


/* item details */
let rmmprdct = document.getElementById("mainp");
let itmed = document.getElementById("seedtI");

    function openSdpopup(){
        itmed.classList.add("actived");
        rmmprdct.classList.add("activemp");
    }

    function closeSdpopup(){
        itmed.classList.remove("actived");
        rmmprdct.classList.remove("activemp");
    }

/* about popup */


    function openAbout(){
        about.classList.add("about-data-active");
        hideMain.classList.add("activem");
        cart.classList.remove("open-popup");
    }
    function closeAbout(){
        about.classList.remove("about-data-active");
        hideMain.classList.remove("activem");
    }