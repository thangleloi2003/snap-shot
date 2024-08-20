import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import CategoryButtons from './components/CategoryButtons';
import './main.scss';
import './main.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <CategoryButtons />
    </div>
    
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
