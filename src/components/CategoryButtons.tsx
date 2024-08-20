import React, { useState, useEffect } from 'react';
import { Button, Input, Skeleton } from '@nextui-org/react';
import axios from 'axios';


const tokenListsBaseURL = 'https://raw.githubusercontent.com/viaprotocol/tokenlists/main/tokenlists/';

export type GetTokensResponseData = Token[];

export interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  chainId: number;
  logoURI: string;
  coingeckoId?: string;
  listedIn: string[];
}

const defaultToken = 'https://e7.pngegg.com/pngimages/710/778/png-clipart-question-mark-question-mark.png';

const CategoryButtons: React.FC = () => {
  
  const [serverCategories, setServerCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/viaprotocol/tokenlists/contents/tokenlists');
        const categoryFiles = response.data.map((file: any) => file.name.replace('.json', ''));
        setServerCategories(categoryFiles);
        setSelectedCategory(categoryFiles[0] || '');
      } catch (err) {
        console.error('Failed to fetch categories', err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000)); 

        const response = await axios.get<Token[]>(`${tokenListsBaseURL}${selectedCategory}.json`);
        const checkedTokens = response.data.map((token) => {
          if (token.logoURI === null) {
            return { ...token, logoURI: defaultToken, };
          }
          return token;
        });
        setTokens(checkedTokens);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchTokens();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTokenError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = defaultToken;
  };

  return (
    <div>
      <div className="flex justify-center">
        <Input type="text" placeholder="Search..." className="rounded-none w-[369px] custom-input" value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button className="min-w-fit w-16 h-10 rounded-md cursor-pointer bg-[#051c33]" disabled>
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#ffffff"
              fillRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>

      <div className="flex flex-wrap justify-center m-[40px] gap-5 sm:gap-3">
        {serverCategories.map((category) => (
          <Button key={category} className="w-[125px] h-[28px] px-4 bg-[#051C33] text-white rounded text-[16px]" onClick={() => handleCategoryChange(category)}>
            {category}
          </Button>
        ))}
      </div>

      <div className="w-[1200px] mx-auto px-5 pb-8 sm:w-full md:w-full lg:w-full xl:w-full">
        <h2 className="text-center text-[32px] text-[#051c33] font-semibold mt-[52px] mx-0 mb-8">
          {selectedCategory} token library
        </h2>

        {loading ? (
          <div className="flex flex-wrap justify-center gap-10">
            {Array.from({ length: 100 }).map((_, index) => (
              <Skeleton key={index} className="w-24 h-24 rounded-[50%]" />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-10">
            {filteredTokens && filteredTokens.length > 0 ? (filteredTokens.map((url, index) => (
              <div key={index} className="w-24 h-24 relative overflow-hidden cursor-pointer transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-lg rounded-[50%]
                bg-[#f0f0f0] border border-[#cccccc]">
                <img src={url.logoURI} alt={`Token ${index + 1}`} className="w-full h-full object-cover" onError={handleTokenError}
                />
              </div>
            ))
            ) : (
              <p>No tokens available for this category.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryButtons;
