$(document).ready(function () {

    $('.education').waypoint(function (direction) {
        if (direction == "down") {
            $('.nav').css({ 'background-color': '#ffffff', 'width': '100%' });
            $('.nav li').css({ 'margin-top': '10px' });
            $('.logo').css({ 'margin-top': '3px' });
            $('.nav li a:link, .nav li a:visited').css({ 'color': '#000000' });

        }
        else {
            $('.nav').css({ 'background-color': 'transparent' });
            $('.nav li a:link, .nav li a:visited').css({ 'color': 'white' });
            $('.nav li').css({ 'margin-top': '30px' });
            $('.logo').css({ 'margin-top': '10px' });
            $('.nav li a:hover, .nav li a:active').css({ 'border-bottom': '2px solid white' });
        }
    }, {
        offset: '60px;'

    });

    /** Navigation Scroll */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top-50
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                             // Set focus again
                        };
                    });
                }
            }
        });

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    let name = document.getElementById('MyName');
    let str = "Hi I am Nitin Jethwani";
    console.log(str.length);
    await sleep(1000);
    for(let i=0;i<str.length;i++)
    {
        if(i==3)
        {
            name.innerText += "\n"+str[i];
        }
        else if(i==5 || i==8 || i==14)
        {
            name.innerText += " "+str[i];
        }
        else{
            name.innerText += str[i];
        }
        await sleep(100);
    }
}
demo();