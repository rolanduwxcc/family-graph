import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_UNITS, QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';
import UnitList from '../components/UnitList';

const Home = () => {
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
 
const { loading, data } = useQuery(QUERY_UNITS); //<-------WHOA!
console.log('wlr---', data);

const units = data?.units || [];
console.log('wlr---',units);
  
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn ? (
          <div className="col-12 mb-3">
            Hello World
          </div>
        ) : null}

        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          Hello World Again
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UnitList units={units} title="Are you related to these people..." />
          )}
        </div>

        {loggedIn ? (
          <div className="col-12 col-lg-3 mb-3">
              Only if you are logged in
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
