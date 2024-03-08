import React from 'react';
import { ItemsList } from './components';

import Header from './components/Header/Header';
import { BodyWrapper } from './AppStyled';

function App() {
  return (
    <div className='App'>
      <Header />
      <BodyWrapper>
        <ItemsList />
      </BodyWrapper>
    </div>
  );
}

export default App;
