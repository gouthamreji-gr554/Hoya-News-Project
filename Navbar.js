        // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("myTopnav").style.padding = "10px 10px";
                // document.getElementById("navbar").style.opacity = 0.6;
                document.getElementById("logo").style.fontSize = "20px";
            } else {
                document.getElementById("myTopnav").style.padding = "30px 10px";
                document.getElementById("logo").style.fontSize = "35px";
            }
        }

        function standby() {
            document.getElementById('mainimage').src = 'file:///Users/ashwin/Downloads/Masthead_600px.png'
        }

        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "navbar") {
                x.className += " responsive";
            } else {
                x.className = "navbar";
            }
        }