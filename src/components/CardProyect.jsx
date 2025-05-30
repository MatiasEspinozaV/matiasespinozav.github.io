import '../styles/CardProyect.css';

const CardProyect = ({ linkWeb, frontImage, titleImg, description, techIcons = [], backColor = "#ffffff", imgColor = "#ffffff", fontColor = "#000000" }) => {
  return (
    <a href={linkWeb} className="card-link" target="_blank">
    <div className="project-card">
      <div className="card-inner">
        <div className="card-front" style={{ backgroundColor: backColor }}>
          <img src={frontImage} alt={titleImg} className="project-image" />
        </div>
        <div className="card-back" style={{ backgroundColor: backColor }}>
          <div className="divImage" style={{ backgroundColor: imgColor }}>
            <img src={titleImg} alt={titleImg} className="title-image" />
          </div>
          <p style={{ color : fontColor }}>{description}</p>
          <div className="tech-icons">
            {techIcons.map((icon, index) => (
              <img key={index} src={icon} alt="Tech" />
            ))}
          </div>
        </div>
      </div>
    </div>
    </a>
  );
};

export default CardProyect;
