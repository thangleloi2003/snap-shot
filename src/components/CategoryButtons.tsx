import { Button } from '@nextui-org/react';
import React from 'react';

const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];

const CategoryButtons: React.FC = () => {
  return (
    <div className="flex justify-center m-[16px] gap-5 sm:gap-2 p-2">
      {categories.map(category => (
        <Button key={category} className=" w-[100px] h-[28px] p-[5px] bg-[#051C33] text-white rounded text-[16px]">
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryButtons;
