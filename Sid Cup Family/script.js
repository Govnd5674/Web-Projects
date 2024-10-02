var crsr = document.querySelector("#cursor")
var crsrsh = document.querySelector("#cursor-shadow")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-10+"px"
    crsr.style.top = dets.y-10+"px"
    crsrsh.style.left = dets.x-250+"px"
    crsrsh.style.top = dets.y-250+"px"
})

var h4all = document.querySelectorAll("nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4
        crsr.style.border="0.01px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})

gsap.to("main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#aboutus img,#about-us",{
    y: 50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub: 3
    }
})

gsap.from("#C1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#C1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4


    }
})

gsap.from("#C2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#C1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4


    }
})

gsap.from("#page4 h1",{
    y: 50, 
    scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 70%",
    end:"top 75%",
    scrub:4
   }

})