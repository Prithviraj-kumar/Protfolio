function revealTospan() {
    document.querySelectorAll(".reveal")
        .forEach(function(elem) {
            //create two spans
            var Parent = document.createElement("Span");
            var Child = document.createElement("Span");

            //parent and child both sets their respective classes
            Parent.classList.add("parent");
            Child.classList.add("child");

            // span parent gers child and child gets elem details 
            Child.innerHTML = elem.innerHTML;
            Parent.appendChild(Child);

            //elem replaces its value with parent span
            elem.innerHTML = "";
            elem.appendChild(Parent);
        })
}

function valueSetters() {

    gsap.set("#nav a", { y: "-100%, opacity:0" });
    gsap.set("#home .parent .child", { y: "100%" }); //span
    gsap.set("#home .row img", { opacity: 0 });

    document.querySelectorAll("#Visual>g").forEach(function(e) {
        var character = e.childNodes[1].childNodes[1];

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}

function loaderAnimation() {
    var tl = gsap.timeline();
    tl
        .from("#loader .child span", {
            x: 80,
            stagger: .1,
            duration: 1.3,
            ease: Expo.easeOut,
            // ease: Out.Cubic
        })
        .to("#loader .parent .child", {
            y: "-100%",
            duration: 1,
            delay: -0.5,
            ease: Circ.easeInOut
                // ease: Out.Cubic
        })
        .to("#loader", {
            height: 0,

            duration: 1,
            delay: -0,
            ease: Circ.easeInOut
                // ease: Out.Cubic
        })
        .to("#green", {
            height: "100%",
            top: 0,
            duration: 1,
            delay: -.8,
            ease: Circ.easeInOut
                // ease: Out.Cubic

        })
        .to("#green", {
            height: "0%",
            duration: 1,
            delay: -0.4,
            ease: Circ.easeInOut,
            // ease: Out.Cubic,
            onComplete: function() {
                animateHomepage();
            }

        })
}

function animateHomepage() {
    var tl = gsap.timeline();

    tl
        .to("#nav a", {
            y: 0,
            delay: -0.5,
            opacity: 1,
            stagger: .05,
            ease: Expo.easeInOut
                // ease: Out.Cubic
        })

    .to("#home .parent .child", {
        y: 0,

        stagger: .1,
        opacity: 2,
        ease: Expo.easeInOut
            // ease: Out.Cubic
    })

    .to("#home .row img", {
        opacity: 1,
        delay: -.5,
        ease: Expo.easeInOut,
        // ease: Out.Cubic,
        onComplete: function() {
            animateSvg();
        }
    })
}

function animateSvg() {


    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,

    })
}

function locoInitialize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect() {
    document.querySelectorAll(".cnt")
        .forEach(function(cnt) {
            var showingimage;
            cnt.addEventListener("mousemove", function(dets) {
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showingimage = dets.target;
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${
                    dets.clientX}px, ${dets.clientY}px)`;

                showingimage.style.filter = "grayscale(1)";

                document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
            })
            cnt.addEventListener("mouseleave", function(dets) {
                document.querySelector("#cursor").children[showingimage.dataset.index].style.opacity = 0;

                showingimage.style.filter = "grayscale(0)";

                document.querySelector("#work").style.backgroundColor = "#fff";


            })

        })
}



revealTospan();
valueSetters();
loaderAnimation();
locoInitialize();
cardHoverEffect();