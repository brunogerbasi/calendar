import React from 'react';
import { LoadContainer } from './styles';

import spinner from 'assets/img/spinner.gif'

function Load() {
  return (
      <LoadContainer>
          <img src={spinner} alt="Loading..." />
      </LoadContainer>
  );
}

export default Load;