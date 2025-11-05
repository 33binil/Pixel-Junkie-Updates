import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Welcome.css'

function Welcome() {
  useEffect(() => {
    let scalerTl
    let layersTl

    const hasScrollSupport = CSS.supports(
      '(animation-timeline: view()) and (animation-range: 0 100%)'
    )

    const config = {
      theme: 'system',
      enhanced: true,
      stick: true,
      layers: true,
      center: true,
      stagger: 'range',
    }

    if (!hasScrollSupport) {
      gsap.registerPlugin(ScrollTrigger)
      console.info('GSAP ScrollTrigger registered')
    }

    const update = () => {
      const root = document.documentElement
      root.dataset.theme = config.theme
      root.dataset.enhanced = config.enhanced
      root.dataset.stick = config.stick
      root.dataset.center = config.center
      root.dataset.layers = config.layers
      root.dataset.stagger = config.stagger

      if (config.enhanced && !hasScrollSupport) {
        scalerTl = gsap
          .timeline({
            scrollTrigger: {
              trigger: 'main section:first-of-type',
              start: 'top -10%',
              end: 'bottom 80%',
              scrub: true,
            },
          })
          // Set initial state
          .set('.scaler img', {
            width: '300%',  // Start at 3x width
            height: 'auto',
            scale: 1,
            x: '0%',
            y: '0%',
            transformOrigin: 'center center',
            force3D: true
          })
          // Animate to final state
          .to('.scaler img', {
            width: '100%',
            height: 'auto',
            scale: 1,
            x: '0%',
            y: '0%',
            ease: 'power2.inOut',
            duration: 1,
            overwrite: 'auto'
          }, 0)

        // then the layers
        layersTl = gsap
          .timeline({
            scrollTrigger: {
              trigger: 'main section:first-of-type',
              start: 'top -40%',
              end: 'bottom bottom',
              scrub: true,
            },
          })
          .from('.layer:nth-of-type(1)', {
            opacity: 0,
            ease: 'sine.out',
          }, 0)
          .from('.layer:nth-of-type(1)', {
            scale: 0,
            ease: 'power1.inOut',
          }, 0)
          .from('.layer:nth-of-type(2)', {
            opacity: 0,
            ease: 'sine.out',
          }, 0)
          .from('.layer:nth-of-type(2)', {
            scale: 0,
            ease: 'power3.inOut',
          }, 0)
          .from('.layer:nth-of-type(3)', {
            opacity: 0,
            ease: 'sine.out',
          }, 0)
          .from('.layer:nth-of-type(3)', {
            scale: 0,
            ease: 'power4.inOut',
          }, 0)
      } else {
        gsap.set(['.scaler img', '.layer'], {
          attr: {
            style: undefined,
          },
        })
        scalerTl?.kill()
        layersTl?.kill()
        scalerTl = undefined
        layersTl = undefined
      }
    }

    update()

    return () => {
      scalerTl?.kill()
      layersTl?.kill()
    }
  }, [])

  return (
    <>
      <div className="content-wrap">
        <header>
          <h1 className="fluid">Welcome to<br />Pixel Junkie Creative Studio</h1>
        </header>
        <main>
          <section>
            <div className="content">
              <div className="grid">
                <div className="layer">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1556304044-0699e31c6a34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmYXNoaW9ufGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwZmFzaGlvbiUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1565321590372-09331b9dd1eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="layer">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwcm9kdWN0fGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2glMjBwcm9kdWN0fGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25ld2hlZWx8ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbWVyYSUyMHBvbGFyb2lkfGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGl0ZW18ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="layer">
                  <div>
                    <img
                      src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <div className="scaler">
                  <img
                    src="https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="fluid">Discover the power of creative innovation. We transform ideas into stunning digital experiences that captivate and convert.</h2>
          </section>
        </main>
      </div>
      
    </>
  )
}

export default Welcome
