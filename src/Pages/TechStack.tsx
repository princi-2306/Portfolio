import OrbitImages from "../animations/OrbitImages";
import java from "../assets/download (5).jpeg"
import zustand from "../assets/fca49300-e7f1-11ea-9f51-cfd949b31560.png"
import js from "../assets/JavaScript-Emblem.png"
import python from "../assets/python.jpeg"
import react from "../assets/react.svg"
import sql from "../assets/Curso Intensivo de MySQL_ Aprende SQL desde Cero a Experto.jpeg"
import Tailwind from "../assets/Tailwind CSS Grid_ The Ultimate Cheat Sheet (2023).jpeg"
import nodejs from "../assets/Authenticating Node_js Applications With Passport _ Envato Tuts+.jpeg"
import html from "../assets/Adding Application Notifications With Kendo UI Core _ Envato Tuts+.jpeg"


const TechStack = () => {
  const images = [
    java,
    zustand,
    js,
    python,
    react,
    sql,
    Tailwind,
    nodejs,
    html
  ];

  return (
    
    <div className="w-full" id="tech-stack-section">
      <OrbitImages
        images={images}
        shape="ellipse"
        radiusX={420}
        radiusY={120}
        rotation={-8}
        duration={30}
        itemSize={100}
        responsive={true}
        radius={160}
        direction="normal"
        fill
        showPath
        paused={false}
      />
      ;
    </div>
  );
};

export default TechStack;
