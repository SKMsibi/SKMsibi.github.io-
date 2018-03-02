function settingBackground() {
    var images = ['https://skmsibi.github.io/codepen/personal%20portfolio/bodo/images/testimonial-bg.jpg', 'https://images.unsplash.com/photo-1473203045991-8435c830ded1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a34331b7960f3d3659b686d5f192e83&auto=format&fit=crop&w=1324&q=80'];
    $(document).ready(function () {
        setInterval(function () {
            var random = Math.floor(Math.random() * images.length);
            var selectedImage = images[random];
            document.getElementById("Home").style.background = `url(${selectedImage})`;
            document.getElementById('Home').style.backgroundRepeat = "no-repeat";
            document.getElementById('Home').style.backgroundPosition = "fixed";
            // document.getElementById('Home').style.height = "100%";
            // document.getElementById('Home').style.width = "100%";
            document.getElementById('Home').style.paddingBottom = "60%";
            document.getElementById('Home').style.size = "100%";
        }, 2000);
    })
}

