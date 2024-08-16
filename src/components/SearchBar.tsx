import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { Form } from 'react-router-dom';

const SearchBar: React.FC = () => {
    return (
        <Form className="search-form flex justify-center">
            <Input type="text" placeholder="Search..." className="rounded-none p-0 auto w-[369px]" />
            <Button type="submit" className="min-w-fit w-16 h-10 rounded-md cursor-pointer bg-[#051c33]" disabled>
                <svg height="32" width="32"><path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff" fill-rule="evenodd"></path>
                </svg>
            </Button>
        </Form>
    );
};

export default SearchBar;
