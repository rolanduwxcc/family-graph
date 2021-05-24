import React from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME, QUERY_UNIT } from '../utils/queries';
import { ADD_UNIT } from '../utils/mutations';
import Auth from '../utils/auth';
import UnitCard from '../components/UnitCard';

const Unit = props => {
    const { firstName: unitParam } = useParams();

    const { loading, data } = useQuery(unitParam ? QUERY_UNIT : QUERY_ME, {
        variables: { firstName: unitParam }
    });

    const unit = data?.unit || {};


    //from deep thoughts but not certain how to implement for ours
    // if (
    //     Auth.loggedIn() &&
    //     Auth.getProfile().data.username === userParam
    //   ) {
    //     return <Redirect to="/profile" />;
    //   }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div className="card px-1 py-1">
        <Link to={`/unit/${_id}`}>
        <div>
          <UnitCard/>
        </div>
        </Link>
        <div>
          <button onclick={addParent}>Add parent</button>
        </div>
      </div>
    );

}

export default Unit;