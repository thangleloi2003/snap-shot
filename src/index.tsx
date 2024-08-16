import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import './main.scss';
import './main.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <CategoryButtons />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
