var tl = gsap.timeline();

document.querySelectorAll("#text h1")
.forEach(function(h1){
    var clutter = '';
    h1.textContent.split("")
    .forEach(function(charc){
        clutter += `<span>${charc}</span>`;
    })
});
tl.from("#text h1",{
    stagger: .1,
    scale:1.4,
    duration: 1.5,
    ease: Expo
});
tl.from("#circle",{
    stagger:.1,
    duration: 1,
    scale: 1,
    ease: Expo,
    opacity: 0.2,

});

tl.from("#bigcircle",{
    stagger: .1,
    scale:2,
    duration: 4,
    opacity: 0,
    ease: Expo,
});
tl.from("#nav .kaam a",{
    stagger: .1,
    duration: 2,
    y: 20,
    opacity: 0.1,
    ease: Expo,
});
tl.from("#ncenter h1",{
    stagger: .1,
    duration: 2,
    y: 20,
    opacity: 0,
    ease: Expo,
});
tl.from("#dot",{
    stagger: .1,
    duration: 1.5,
    y:20,
    opacity: 0,
    ease: Expo,
});
tl.from("#dot h3",{
    stagger: .1,
    duration: 1,
    opacity: 0,
    rotation: 90,
});
tl.from("#hbottom h3",{
    stragger: .1,
    duration: 2,
    y: 15,
    opacity: 0,
    ease: Expo,
});
tl.from("#hbottom a",{
    stragger: .1,
    duration: 2,
    y:10,
    opacity: 0,
    ease: Expo,
});

function thirdpage()
{
    document.querySelector("#third")
    .addEventListener("click", function(dets){
     var sp = dets.target.id
     var gt = (sp.split("-")[1])
     //console.log(sp.split("-")[0])
     var str = ("#"+sp)
     var dec = 100-(4-gt)*4;

     tl.to(str,{
        width: dec+"%",
        ease:Expo.easeInOut,
        duration:1.5
     })
     tl.to("#str-cr-"+ gt,{
        opacity:1,
        ease:Expo.ease,
        duration:1.5,
        delay:1,
     })
     var cr="#str-cr-"+ gt
     document.querySelector(cr)
     .style.pointerEvents="all";
     document.querySelector(cr).addEventListener("click", function(dets){
        // var crs = dets.target.id.split("-")[1]

        console.log(dets.target.id)
        tl.to(str,{
            width:4+"%",
            //opacity:0,
            ease:Expo.easeInOut,
            duration:1.5
        })
        tl.to("#"+ dets.target.id,{
            //width: dec+"%",
            opacity:0,
            ease:Expo.ease,
            duration:5
        })
     })

  
    })
}
thirdpage();

function fourth(){
    document.querySelectorAll(".elem h1")
.forEach(function(havan){
    havan.addEventListener("mousemove", function(dets){
        dets.target.nextElementSibling.style.opacity = 1;
        dets.target.nextElementSibling.style.transform = `translate(-50%, -50%) translate(${dets.screenX*.3}px, -${dets.screenY*.06}px) rotate(${dets.screenX*.1}deg)`
    });

    havan.addEventListener("mouseout", function(dets){
        dets.target.nextElementSibling.style.opacity = 0;
    });
});
}
fourth();

var tl2 = gsap.timeline();
 
tl2.to("#second h1",{
    scrollTrigger: {
        markers: true,
        trigger: "#second",
        start: "top 5%",
        scrub: 4
    },
    x: "-100%"

});
tl2.from("#photoseries",{
    x: "-100%"
    
});