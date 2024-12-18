
import { lazy, Suspense } from 'react';
import Loader from '../components/Loader/Loader';


const Layout = () => {

  const DataListingLazyLoaded = lazy(() => import("../components/DataListing/DataListing"));
  const DataViewLazyLoading = lazy(() => import("../components/DataViewing/DataView"));
  return (
    <div className='ml-10'>
      <Suspense fallback={<Loader />}>
        <DataListingLazyLoaded />
        <DataViewLazyLoading />
      </Suspense>

    </div>
  );
};

export default Layout;