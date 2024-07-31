import React from 'react';

// Import images
import image1 from '../img/img1.jpg';
import image2 from '../img/img2.jpg';
import image3 from '../img/img3.jpg';
import image4 from '../img/img4.jpg';
import image5 from '../img/img5.jpg';
import image6 from '../img/img6.jpg';
import image7 from '../img/img7.jpg';
import image8 from '../img/img8.jpg';
import image9 from '../img/img9.jpg';
import image10 from '../img/img10.jpg';
import image11 from '../img/img11.jpg';
import image12 from '../img/img12.jpg';
import image13 from '../img/img13.jpg';
import image14 from '../img/img14.jpg';
import image15 from '../img/img15.jpg';
import image16 from '../img/img16.jpg';
import image17 from '../img/img17.jpg';
import image18 from '../img/img18.jpg';
import image19 from '../img/img19.jpg';
import image20 from '../img/img20.jpg';
import image21 from '../img/img21.jpg';
import image22 from '../img/img22.jpg';
import image23 from '../img/img23.jpg';
import image24 from '../img/img24.jpg';

// Array of images
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, 
image11, image12, image13, image14, image15, image16, image17, image18, image19, 
image20, image21, image22, image23, image24];

const Image: React.FC = () => {
  return (
    
    <div className="w-[1200px] m-auto">
      <h2 className="text-center text-3xl font-semibold mt-[52px] mx-0 mb-[40px]">Mountain Pictures</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {images.map((image, index) => (
          <div key={index} className="w-[255px] h-[180px] overflow-hidden">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
