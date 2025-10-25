console.log("pipi");
  
  function mapRange(value, inMin, inMax, outMin, outMax) { // chat ajudou
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
  }
  
  
window.onload = () => {
    const ofertaScroll = document.getElementById('scroll-ofertas')
    const ofertasContainers = document.querySelectorAll('div.ofertas-container')
    ofertasContainers[0].style.scale = 1.075 // p n bugar

    ofertaScroll.addEventListener("scroll", () => {
        let scrollValue = ofertaScroll.scrollLeft

        let maxScroll = ofertaScroll.scrollWidth
        console.log(maxScroll)

        if (scrollValue <= 150) {
          let mapped = mapRange(scrollValue, 0, 125+(240), 1.075, 1)
          ofertasContainers[0].style.scale = mapped
        }
      
        if (scrollValue > 175 && scrollValue <= 425) {
          let mapped = mapRange(scrollValue, 175, 125+(240), 1, 1.075)
          if (scrollValue > 125+(240)) // olha o reverse uoow
            mapped = mapRange(scrollValue, 125+(240), 125+(240*2), 1.075, 1)
          ofertasContainers[1].style.scale = mapped
        }
      
        if (scrollValue > 425) {
          let maxScroll = ofertaScroll.scrollWidth - ofertaScroll.clientWidth
          let mapped = mapRange(scrollValue, 125+(240*2), 125+(240*3), 1, 1.075)
          ofertasContainers[2].style.scale = mapped
        }
      })
    
}



// 150 ; 425 ; 556