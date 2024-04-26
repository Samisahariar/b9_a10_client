import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../../App.css"
import 'animate.css';
import { Link } from "react-router-dom";


const Carosel = () => {
    
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      }
    ]
  )



  return (
    <>
      <div ref={sliderRef} className="keen-slider h-[80vh] relative">
        <div className="keen-slider__slide number-slide1"></div>
        <div className="keen-slider__slide number-slide2"></div>
        <div className="keen-slider__slide number-slide3"></div>
        <div className="keen-slider__slide number-slide4"></div>
        <div className="hero-overlay bg-opacity-30 h-[100vh]  w-[100vw] absolute top-0 flex justify-center items-center flex-col gap-3">
          <p className="text-md text-white tracking-widest animate__animated animate__fadeInUp">San Diego Real Estate Experts</p>
          <h3 className="lg:text-6xl text-4xl md:text-5xl text-white text-center tracking-widest animate__animated animate__fadeInUp font-dm">Top Real Estate
            <br />Listings in San Diego</h3>
          <p className="text-xs text-white tracking-wide animate__animated animate__fadeInUp md:text-start text-center">Providing The Most Comprehensive And Distinguished Real Estate Services.</p>
          <div>
            <div>
              <Link to="/land"><button className="p-3 border-2 border-white text-white hover:bg-[#E1F0DA26]">Search For Properties</button></Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
};

export default Carosel;