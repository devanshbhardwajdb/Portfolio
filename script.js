gsap.to("#nav",{
    backgroundColor : "#4D4D4D",
    height: "90px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller :"body",
        // markers: true,
        start:"top -10%",
        end :"top 11%",
        scrub:1

    }
});

gsap.from("#page2-left",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#page2-left",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});
gsap.from("#page2-right",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#page2-right",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});
gsap.from("#abs1",{
    opacity:0,
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#abs1",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});
gsap.from("#abs2",{
    opacity:0,
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#abs1",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
    
});
gsap.from("#page3-left",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#page3-left",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});
gsap.from("#page3-right",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#page3-right",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    }
});

gsap.from("#page4-left",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#page4-left",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});
gsap.from("#page4-right",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#page4-right",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});

gsap.from("#page5-left",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#page5-left",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});
gsap.from("#page5-right",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#page5-right",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});
gsap.from("#abs4",{
    opacity:0,
    x:-70,
    scrollTrigger:{
        trigger:"#abs4",
        scroller:"body",
        start:"top 50%",
        // markers:true,
        end:"top 65%",
        scrub: 2
    },
    
});


