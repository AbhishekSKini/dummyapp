import React from 'react';
import { useSelector } from 'react-redux';
import DataListing from '../components/DataListing/DataListing';
import DataView from '../components/DataViewing/DataView';

// // Define interface for search state
// interface SearchState {
//   value: string;
// }

// // Define interface for name state
// interface NameState {
//   value: string;
// }

// Define combined state interface
// interface RootState {
//   search: SearchState;
//   name: NameState;
// }

const Layout= () => {
 

  return (
    <div>
  <DataListing/>
  <DataView/>
    </div>
  );
};

export default Layout;