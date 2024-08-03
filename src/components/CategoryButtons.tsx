import { Button } from '@nextui-org/react';
import React from 'react';

const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];

const CategoryButtons: React.FC = () => {
  return (
    <div className="flex justify-center m-[40px] space-x-3 sm:space-x-2 ">
      {categories.map(category => (
        <Button key={category} className=" w-[100px] h-[28px] px-4 bg-[#051C33] text-white rounded text-[16px]">
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryButtons;
