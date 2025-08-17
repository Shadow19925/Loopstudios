import DeskTopImages from "../../../assets/images/desktop/images";
import { useScreenSize } from "../../../util/helper"; // Import the custom hook
export default function OurCreation() {
  const { isMobile } = useScreenSize(); // Use the custom hook

  return (
    <div className="">
      <div className="our-creation">
        <h2>Our Creations</h2>
        {!isMobile ? <button>View All</button> : null}
      </div>
      <div className="creation-list">
        {DeskTopImages.map((image, index) => (
          <div key={index} className="creation-item">
            {image.title && (
              <h3>
                {image.title.split(" ").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
            )}
            <img src={image.image} alt={image.title} />
          </div>
        ))}
        {isMobile && <button>View All</button>}
      </div>
    </div>
  );
}
