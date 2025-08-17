import ImageIntero from "../../../assets/images/desktop/image-interactive.jpg";

export default function InteroSection() {
  return (
    <div className="intero-section">
      <img className="hero-image" src={ImageIntero} alt="Interior" />
      <div className="intero-content">
        <div className=""></div>
        <h2>The leader in interactive VR</h2>
        <p>
          he leader in interactive VR Founded in 2011, Loopstudios has been
          producing world-class virtual reality projects for some of the best
          companies around the globe. Our award-winning creations have
          transformed businesses through digital experiences that bind to their
          brand
        </p>
      </div>
    </div>
  );
}
