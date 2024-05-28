// src/components/About.jsx
import React from 'react';

const About = () => (
  <>
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">About me</h2>
    <p className="mt-4">
      Soy María Virginia Castillo, Abogada convertida en Full Stack Developer. Mi pasión por la resolución de problemas y la creación de soluciones innovadoras me ha llevado a explorar el mundo del desarrollo de software. Mi experiencia en una amplia gama de tecnologías me permite ofrecer soluciones completas tanto en el lado del servidor como en el lado del cliente.
    </p>
    <br />
    <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">Education</h4>
    <div className="mt-4 flex items-center">
      <img 
        src="https://media.licdn.com/dms/image/C4D0BAQHxq9oq52ehKA/company-logo_200_200/0/1630576208270/universidad_champagnat_logo?e=1724889600&v=beta&t=B65vhQ8-E7qZlkVJ7YQds5Y-nN2ri3NkBHKgZJ7O3Ds" 
        alt="Universidad Champagnat Logo" 
        className="w-16 h-16 mr-4"
      />
      <div>
        <p className="text-lg font-bold">Universidad Champagnat</p>
        <p>Facultad de Derecho</p>
        <p>mar. 2004 - abr. 2024</p>
        <p>Titulación: Abogada</p>
      </div>
    </div>
    <div className="mt-4 flex items-center">
      <img 
        src="https://media.licdn.com/dms/image/C4D0BAQHxq9oq52ehKA/company-logo_200_200/0/1630576208270/universidad_champagnat_logo?e=1724889600&v=beta&t=B65vhQ8-E7qZlkVJ7YQds5Y-nN2ri3NkBHKgZJ7O3Ds" 
        alt="Universidad Champagnat Logo" 
        className="w-16 h-16 mr-4"
      />
      <br/>
      <div>
        <p className="text-lg font-bold">Universidad Champagnat</p>
        <p>Facultad de Derecho</p>
        <p>mar. 1996 - feb. 2000</p>
        <p>Titulación: Lic. en Relaciones Internacionales</p>
      </div>
    </div>
  </>
);

export default About;
