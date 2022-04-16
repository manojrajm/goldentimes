const tl = gsap.timeline({ defaults: { ease: "slow" } });

tl.to(".slider", { y: "-100%", duration: 2, delay: 2 });

tl.to(".tag", { x: "-100%", duration: 2, delay: 1 });

tl.fromTo(".cntnt", { opacity: 0 }, { opacity: 1, duration: 1, y: 50 });
tl.fromTo(
  ".img-1",
  { opacity: 1 },
  { opacity: 1, duration: 1, x: -50, rotate: 360 }
);

tl.fromTo(".col-4", { opacity: 0 }, { opacity: 1, duration: 1, y: 30 });

function updateTime() {
  const element = document.getElementById("timer");
  const date = new Date();
  element.innerText = date.toLocaleTimeString();
}

setInterval(updateTime, 1000);

updateTime();
