import {React, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_UNITS } from '../utils/queries';

import Auth from '../utils/auth';
import UnitList from '../components/UnitList/index';
import { Flowpoint, Flowspace } from 'flowpoints';


const Home = () => {
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
 
const { loading, error, unitData } = useQuery(QUERY_UNITS); //<-------WHOA!

const [formState] = useState({ message: '' });

const { message } = formState;


console.log('wlr--!', unitData);

const units = unitData?.units || [];
console.log('wlr--?',units);
  
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn ? (
          <div className="col-12 mb-3">
            Welcome to your Home Page!
          </div>
        ) : null}

        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          <br/>
          Welcome to Family Graph! Please move the boxes below to create a flow chart for you family. Right click to add text.          {loading ? (
            <div>Loading...</div>
          ) : (
            <UnitList units={units} title="Are you related to these people..." />
          )}
          <Flowspace class="flowspace">
          <Flowpoint key="point_a" outputs={["point_c"]} id="mom" >
            <label htmlFor="message">Mom:</label>


            <textarea name="message" rows="5" defaultValue={message} />


          </Flowpoint>
          <Flowpoint key="point_b" outputs={["point_c"]} id="dad">
            <label htmlFor="message">Dad:</label>

            <textarea name="message" rows="8" defaultValue={message} />
          </Flowpoint>
            </Flowspace>

        </div>

        {loggedIn ? (
          <div className="col-12 col-lg-3 mb-3">
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
