import { LoaderWrapper } from 'pages/Contacts/ContactList/StyledContactList';
import React from 'react';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <LoaderWrapper>
        <FallingLines
          color="#315cad"
          width="300"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </LoaderWrapper>
    </div>
  );
};

export default Loader;
