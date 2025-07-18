import { useEffect, useRef} from 'react';
import gsap from 'gsap';

function LoadingPage() {
    const loader = useRef<HTMLDivElement>(null);
    const image = useRef<HTMLImageElement>(null);
    const ring = useRef<HTMLDivElement>(null);
    const pageWrapper = useRef<HTMLDivElement>(null);
    const textappear = useRef<HTMLDivElement>(null);
    const textdisappear = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial setup - hide elements that should appear later
        if (image.current) gsap.set(image.current, { opacity: 0, y: 20 });
        if (textappear.current) gsap.set(textappear.current, { opacity: 0, y: 10 });
        if (textdisappear.current) gsap.set(textdisappear.current, { opacity: 1 });
        
        // Hide the entire image container initially
        gsap.set('.image-container', { opacity: 0 });

        // Animate the loader container
        gsap.fromTo(loader.current, 
            { opacity: 0, y: 20 }, 
            { duration: 1, opacity: 1, y: 0, ease: "power2.inOut" }
        );

        // Animate the ring for 2 seconds
        gsap.to(ring.current, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: "linear"
        });

        // Main timeline for the loading sequence
        const mainTimeline = gsap.timeline();

        mainTimeline
            // After 2 seconds, start fading out the ring and loading text
            .to([ring.current, textdisappear.current], { 
                opacity: 0, 
                duration: 0.5, 
                delay: 2 
            })
            // Simultaneously fade in the entire image container
            .to('.image-container', { 
                opacity: 1, 
                duration: 0.8, 
                ease: "power2.inOut" 
            }, "-=0.3") // Start slightly before the previous animation ends
            // Then animate the image and text within the container
            .to([image.current, textappear.current], { 
                opacity: 1, 
                y: 0, 
                duration: 0.6, 
                ease: "power2.inOut" 
            }, "-=0.4") // Start slightly before the container finishes fading in
            // After showing content for 1 second, fade out the entire page
            .to(pageWrapper.current, {
                opacity: 0,
                duration: 0.5,
                delay: 1,
                onComplete: () => {
                    if (pageWrapper.current) {
                        pageWrapper.current.style.display = 'none';
                    }
                }
            });

        // Cleanup function
        return () => {
            mainTimeline.kill();
        };
        
    }, []);

    return (
        <div ref={pageWrapper} className='fixed inset-0 flex justify-center items-center h-screen bg-black z-50'>
            <div ref={loader} className="loader relative flex flex-col items-center justify-center">
              <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80'>
                {/* Loading text */}
                <div ref={textdisappear} className="absolute top-40 text-2xl font-medium text-white mx-16">
                    Loading...
                </div>
                
                {/* Ring container */}
                <div className="relative w-40 h-40 flex items-center justify-center mb-6 mx-8">
                    <div 
                        ref={ring} 
                        className="absolute w-24 h-24 rounded-full border-4 border-transparent border-t-white border-r-white animate-spin"
                        style={{
                            borderStyle: 'solid',
                            borderWidth: '4px',
                            borderColor: 'transparent',
                            borderTopColor: '#ffffff',
                            borderRightColor: '#ffffff'
                        }}
                    ></div>
                </div>
                </div>

                {/* Image container */}
                <div className="image-container relative flex flex-col items-center opacity-0">
                    <div className="w-60 h-60 rounded-full overflow-hidden">
                        <img 
                            ref={image}
                            className='w-full h-full object-cover' 
                            src="https://avatars.githubusercontent.com/u/181342436?v=4" 
                            alt="Profile" 
                        />
                    </div>
                    
                    {/* Welcome text */}
                    <div ref={textappear} className='text-center font-bold text-4xl mt-6 text-white tracking-wider'>
                        WELCOME
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;