// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:"#page2 #box"
// })
// gsap.from("#box h1",{
//     opacity:0,
//     delay:0.5,
//     duration:8,
//     stagger:1,
//     y:30
// })
// gsap.from("#page2 h1", {
//     opacity:0,
    
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// });
// gsap.from("#page2 h2", {
//     opacity:0,
    
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// });
// gsap.from("#page3 #box", {
//     scale:0,
//     opacity:0,
//     delay:1,
//     duration:2,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page3 #box",
//         scroller:"body",
//         markers:true,
//         scrub:2
//     }
// });

gsap.to("#Page2 h1", {
    transform:"translateX(-150%)",
    
    scrollTrigger:{
        trigger:"#Page2 ",
        scoller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
});