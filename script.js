window.addEventListener("load", ToogleMode)
function ToogleMode() {
  const body = document.documentElement
  body.classList.toggle("light")
  const img = document.querySelector("#profile img")
  const vantaContainer = document.querySelector("#vanta-container")
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    VANTA.CLOUDS({
      el: "#vanta-container",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      speed: 1.0,
    })
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
    VANTA.HALO({
      el: "#vanta-container",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      baseColor: 0xf7cc0,
      backgroundColor: 0xb0b1b,
      amplitudeFactor: 0.7,
      size: 0.8,
    })
  }
}
