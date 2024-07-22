import React, { useEffect, useRef, useState } from 'react';
import '../Styles/WordCloud.css';
import ReactLogo from '../images/tech_logos/react.webp'; 
import JavaLogo from '../images/tech_logos/java.webp';
import HtmlLogo from '../images/tech_logos/html.png';
import PythonLogo from '../images/tech_logos/python.png';
import FlaskLogo from '../images/tech_logos/flask.webp';
import DjangoLogo from '../images/tech_logos/django.png';
import GitHubLogo from '../images/tech_logos/github.png';
import CLogo from '../images/tech_logos/C.png';
import CppLogo from '../images/tech_logos/C++.png';
import JavascriptLogo from '../images/tech_logos/Javascsript.png';
import SQLServerLogo from '../images/tech_logos/SQLserver.png';
import GitLogo from '../images/tech_logos/git.png';
import CSharpLogo from '../images/tech_logos/CSharp.png';
import JupyterNotebookLogo from '../images/tech_logos/JupyterNotebook.png';
import KerasLogo from '../images/tech_logos/Keras.png';
import MysqlLogo from '../images/tech_logos/Mysql.png';
import OracleLogo from '../images/tech_logos/Oracle.png';
import PandasLogo from '../images/tech_logos/Pandas.png';
import PostgreSQLLogo from '../images/tech_logos/PostgreSQL.png';
import SKLearnLogo from '../images/tech_logos/SKLearn.png';
import TensorflowLogo from '../images/tech_logos/Tensorflow.png';
import VsCodeLogo from '../images/tech_logos/Vs Cde.webp';
import FirebaseLogo from '../images/tech_logos/firebase.jpg';
import HighchartsJSLogo from '../images/tech_logos/highschartsJs.png';
import MongoDBLogo from '../images/tech_logos/mongodb.svg';
import OpenCVLogo from '../images/tech_logos/openCV.png';
import PostmanLogo from '../images/tech_logos/postman.svg';

const technologies = [
  { name: 'React', logo: ReactLogo, size: 100 },
  { name: 'Java', logo: JavaLogo, size: 90 },
  { name: 'HTML', logo: HtmlLogo, size: 80 },
  { name: 'Python', logo: PythonLogo, size: 85 },
  { name: 'Flask', logo: FlaskLogo, size: 100 },
  { name: 'Django', logo: DjangoLogo, size: 105 },
  { name: 'GitHub', logo: GitHubLogo, size: 75 },
  { name: 'C', logo: CLogo, size: 70 },
  { name: 'C++', logo: CppLogo, size: 100 },
  { name: 'JavaScript', logo: JavascriptLogo, size: 95 },
  { name: 'SQL Server', logo: SQLServerLogo, size: 90 },
  { name: 'Git', logo: GitLogo, size: 80 },
  { name: 'CSharp', logo: CSharpLogo, size: 85 },
  { name: 'Jupyter Notebook', logo: JupyterNotebookLogo, size: 70 },
  { name: 'Keras', logo: KerasLogo, size: 75 },
  { name: 'MySQL', logo: MysqlLogo, size: 85 },
  { name: 'Oracle', logo: OracleLogo, size: 80 },
  { name: 'Pandas', logo: PandasLogo, size: 80 },
  { name: 'PostgreSQL', logo: PostgreSQLLogo, size: 90 },
  { name: 'scikit-learn', logo: SKLearnLogo, size: 85 },
  { name: 'TensorFlow', logo: TensorflowLogo, size: 95 },
  { name: 'VS Code', logo: VsCodeLogo, size: 80 },
  { name: 'Firebase', logo: FirebaseLogo, size: 85 },
  { name: 'Highcharts JS', logo: HighchartsJSLogo, size: 80 },
  { name: 'MongoDB', logo: MongoDBLogo, size: 80 },
  { name: 'OpenCV', logo: OpenCVLogo, size: 85 },
  { name: 'Postman', logo: PostmanLogo, size: 75 },
];

const WordCloud = () => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const updatePositions = () => {
      const container = containerRef.current;
      if (!container) return;

      const newPositions = [];
      technologies.forEach(tech => {
        const rect = container.getBoundingClientRect();
        let x, y;

        do {
          x = Math.random() * (rect.width - tech.size);
          y = Math.random() * (rect.height - tech.size);
        } while (checkOverlap(newPositions, x, y, tech.size));

        newPositions.push({ x, y });
      });

      setPositions(newPositions);
    };

    // Initial position update
    updatePositions();

    // Refresh positions every 4 seconds
    const interval = setInterval(updatePositions, 4000);

    return () => clearInterval(interval);
  }, []);

  const checkOverlap = (positions, x, y, size) => {
    for (const pos of positions) {
      if (
        x < pos.x + size &&
        x + size > pos.x &&
        y < pos.y + size &&
        y + size > pos.y
      ) {
        return true;
      }
    }
    return false;
  };

  const handleMouseOver = (index) => {
    const item = containerRef.current.childNodes[index];
    if (item) {
      item.title = technologies[index].name;
    }
  };

  return (
    <>
      <a style={{ float: 'right' }} href="/">view all skills</a>
     { /*<h4 style={{ float: 'center' }}>SKILLS</h4>*/}
      <div className="word-cloud-container" ref={containerRef}>
        {technologies.map((tech, index) => (
          <img
            key={index}
            src={tech.logo}
            alt={tech.name}
            className="word-cloud-item"
            style={{
              width: `${tech.size}px`, // Adjust size of logos
              height: `${tech.size}px`, // Adjust size of logos
              position: 'absolute',
              left: `${positions[index]?.x}px`,
              top: `${positions[index]?.y}px`,
            }}
            onMouseOver={() => handleMouseOver(index)}
          />
        ))}
      </div>
    </>
  );
};

export default WordCloud;
