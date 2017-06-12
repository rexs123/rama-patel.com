var linksMenu = document.querySelectorAll('[href*="#"]');

    for (var i = 0; i < linksMenu.length; i++) {

        var linkMenu = linksMenu[i];

        linkMenu.addEventListener("click", function(event) {


            var positionInicial = window.scrollY;

            var targetHref = this.getAttribute('href');

            if (targetHref !== '#') {

                var target = document.querySelector(targetHref);
                var positionTarget = target.offsetTop;

                var more = positionTarget > positionInicial;

                event.preventDefault();

                    if (typeof InstallTrigger !== 'undefined') {
                        var velocidade = 10;
                        var timer = 10;
                    }else{
                        var velocidade = 100;
                        var timer = 1;
                    }
                    var scroll = setInterval(function() {
                        var position = window.scrollY;

                        var stop = position == positionTarget;

                        if(more){
                          var direcao = positionTarget - position;
                        }else{
                          var direcao = position - positionTarget;
                        }
                        var parte = Math.ceil( direcao / velocidade);
                        if(more){
                          var smooth = position + parte;
                        }else{
                          var smooth = position - parte;
                        }
                        if (stop) {
                            clearInterval(scroll);                                             } else {
                            window.scrollTo(0, smooth);
                        }
                        }, timer);

                for (var i = 0; i < scroll; i++) {
                    window.clearInterval(i);
                    window.addEventListener('wheel', function() {
                        window.clearInterval(i);
                    });
                }
            }
        });
    }
