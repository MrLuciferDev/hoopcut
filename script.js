function startLoader()
{
  let counterElement = document.querySelector(".counter");
  let currentValue=0;

  function updateCounter()
  {
    if(currentValue==100)
    {
      return;
    }
    currentValue= currentValue + (Math.floor(Math.random()*10)+1);
    if(currentValue>100)
    {
      currentValue=100;
    }
    counterElement.textContent = currentValue;
    let delay = Math.floor(Math.random()*200)+50;
    setTimeout(updateCounter,delay);
  }
  updateCounter();
}

startLoader();

gsap.to(".counter",0.25,{
  delay:3.5,
  opacity:0,
});
gsap.to(".loaderline1",0.25,{
  delay:3.5,
  opacity:0,
});
gsap.to(".loaderline2",0.25,{
  delay:3.5,
  opacity:0,
});
gsap.to(".loaderline3",0.25,{
  delay:3.5,
  opacity:0,
});

gsap.to(".bar",1.5,{
     delay: 3.5,
     height:0,
     stagger:{
     amount: 0.5,
},
ease: "power4.inOut",
});

gsap.from(".logo",1,{
  delay:4.5,
  scale:2,
  
})

Shery.makeMagnet("#btn" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


$(document).ready(function () {
    $("#btn")
      .on("mouseenter", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
          top: relY,
          left: relX,
        });
      })
      .on("mouseout", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
          top: relY,
          left: relX,
        });
      });
  });



  function delay(n)
{
    n=n || 2000;
    return new Promise((done)=>{
        setTimeout(()=>{
    },n);
    });
}


  function pageTransition()
  {
    let tl=gsap.timeline();
    tl.to(".loading-screen",{
      duration:1.2,
      width:"100%",
      left:"0%",
      ease:"Expo.easeInOut"
    });

    tl.to(".loading-screen",{
      duration:1,
      width:"100%",
      left:"100%",
      ease:"Expo.easeInOut",
      delay:0.3
    });
    tl.set(".loading-screen",{left:"-100%"});
  }

  function contentAnimation(){
    let tl = gsap.timeline();
    tl.to(".hello h1",{
      top:0,
      duration:1,
      ease:"power3.inOut",
      delay:0.75,
    });
  }



    barba.init({
      sync:true,
      transitions:[
        {
          async leave(data){
            const done=this.async();

            pageTransition();
            await delay(1);
            done();
          },
          async enter(data) {
            contentAnimation();
          },
          async once(data)
          {
            contentAnimation();
          },
        },
      ],
    });
  

