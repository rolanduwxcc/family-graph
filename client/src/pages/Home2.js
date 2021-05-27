import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_UNITS } from '../utils/queries';

import Auth from '../utils/auth';
import UnitList from '../components/UnitList';

const Home = () => {
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
 
const { loading, error, data } = useQuery(QUERY_UNITS); //<-------WHOA!
console.log('wlr--data!--', data);

const units = data?.units || [];
console.log('wlr--units?--',units);
  
  const loggedIn = Auth.loggedIn();

  return (
    <main className="container-fluid">
      <div className='flex-row justify-space-between'>
          <div className="col-12 mb-3">
            Hello World
          </div>

          <div className="col-12 mb-3">
          <br/>
          Hello World Again
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UnitList units={units} title="Are you related to these people..." />
          )}
        </div>

      </div>
    </main>
  );
};

export default Home;
