import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import axios from 'axios';


const categories = ['Ethereum', 'Arbitrum', 'Optimism', 'BSC'];

const tokenLists: { [key: string]: string } = {
  Ethereum: 'https://raw.githubusercontent.com/viaprotocol/tokenlists/main/tokenlists/ethereum.json',
  Arbitrum: 'https://raw.githubusercontent.com/viaprotocol/tokenlists/main/tokenlists/arbitrum.json',
  Optimism: 'https://raw.githubusercontent.com/viaprotocol/tokenlists/main/tokenlists/optimism.json',
  BSC: 'https://raw.githubusercontent.com/viaprotocol/tokenlists/main/tokenlists/bsc.json',
};

export type GetTokensResponseData = Token[]

export interface Token {
  symbol: string
  name: string
  address: string
  decimals: number
  chainId: number
  logoURI: string
  coingeckoId?: string
  listedIn: string[]
}


const CategoryButtons: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Ethereum');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get<GetTokensResponseData>(tokenLists[selectedCategory]);
        console.log('response.data', response.data);
        setImages(response.data.map(obj => obj.logoURI))
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };
    fetchImages();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="flex justify-center m-[40px] space-x-4 sm:space-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            className="w-[96px] h-[28px] px-4 bg-[#051C33] text-white rounded text-[16px]"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="w-[1200px] mx-auto px-5 pb-8 token-gallery">
        <h2 className="text-center text-[32px] text-[#051c33] font-semibold mt-[52px] mx-0 mb-8">
          {selectedCategory} Token Library
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-5">
            {images && images.length > 0 ? (
              images.map((url, index) => (
                <div key={index} className="w-[220px] h-[220px] relative overflow-hidden cursor-pointer transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-lg token-main">
                  <img src={url} alt={`Token ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))
            ) : (
              <p>No tokens available for this category.</p>
            )}
          </div>
        )}

        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default CategoryButtons;
