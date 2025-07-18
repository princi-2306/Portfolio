import CircularGallery from "../animations/CircularGallery";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {

  // const containerRef = useRef(null);
  // const galleryRef = useRef(null);

  //  useEffect(() => {
  //    const ctx = gsap.context(() => {
  //      // Access the CircularGallery's animation if possible
  //      // This assumes your CircularGallery exposes its animation
  //      const gallery = galleryRef.current;
  //      const galleryAnimation = gallery?.getAnimation(); // Hypothetical method

  //      ScrollTrigger.create({
  //        trigger: containerRef.current,
  //        start: "top top",
  //        end: "+=2000", // Adjust based on content
  //        scrub: true,
  //        pin: true,
  //      });
  //    }, containerRef);

  //    return () => ctx.revert();
  //  }, []);
 

    return (
        <div className="w-full">
        <div className=" h-100">
          <div style={{ height: "300px", position: "relative" }}>
            <div style={{ height: "600px", position: "relative" }}>
              <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default TechStack;
