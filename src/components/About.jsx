import React, { useEffect, useState } from 'react';
import aboutMeImage from '../assets/Aboutme.jpeg';
import soyHenry from '../assets/henryok_logo.jpeg';
import champagnat from '../assets/universidad_champagnat_logo.jpeg';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex flex-col items-center mt-4 text-center">
        <img
          src={aboutMeImage}
          alt="About Me"
          className={`w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full transition-transform duration-1000 ${imageLoaded ? 'transform scale-100' : 'transform scale-0'}`}
        />
        <div className="mt-4">
                 <p className="mt-4">
            Soy María Virginia Castillo, Abogada convertida en Full Stack Developer. Mi pasión por la resolución de problemas y la creación de soluciones innovadoras me ha llevado a explorar el mundo del desarrollo de software. Mi experiencia en una amplia gama de tecnologías me permite ofrecer soluciones completas tanto en el lado del servidor como en el lado del cliente.
          </p>
        </div>
      </div>
      <br />
      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">Education</h4>
      
      <div className="mt-4 flex flex-col items-center w-full max-w-3xl text-center">
        <img 
          src= {soyHenry} 
          alt="Henry Logo" 
          className="w-16 h-16 mr-4 rounded-full"
        />
        <div>
          <p className="text-lg font-bold">Henry</p>
          <p>Bootcamp Full Stack Developer</p>
          <p>Fecha de finalización: jun. 2023 - mar. 2024</p>
          <p>Titulación: Fullstack Developer</p>
        </div>
      </div>
   
      <div className="mt-4 flex flex-col items-center w-full max-w-3xl text-center">
        <img 
          src={champagnat}
          alt="Universidad Champagnat Logo" 
          className="w-20 h-20 mr-4 rounded-full" // Cambia w-16 h-16 a w-20 h-20
        />
        <div>
          <p className="text-lg font-bold">Universidad Champagnat</p>
          <p>Facultad de Derecho</p>
          <p>mar. 2014 - abr. 2024</p>
          <p>Titulación: Abogada</p>
        </div>
      </div>
      
      
      <div className="mt-4 flex flex-col items-center w-full max-w-3xl text-center">
        <img 
          src={champagnat} 
          alt="Universidad Champagnat Logo" 
          className="w-20 h-20 mr-4 rounded-full" // Cambia w-16 h-16 a w-20 h-20
        />
        <div>
          <p className="text-lg font-bold">Universidad Champagnat</p>
          <p>Facultad de Derecho</p>
          <p>mar. 1996 - feb. 2000</p>
          <p>Titulación: Lic. en Relaciones Internacionales</p>
        </div>
      </div>

     
      
    </div>
  );
};

export default About;

