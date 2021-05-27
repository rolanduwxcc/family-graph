import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME, QUERY_UNIT } from '../utils/queries';
// not sure if we want this one here but in case this is how we choose to add other members
import { ADD_UNIT } from '../utils/mutations';
import Auth from '../utils/auth';
import { Flowpoint, Flowspace } from 'flowpoints';


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
        <div>
            <div>
                <Flowspace>
                    {/* <Flowpoint key="point_a" outputs={["point_b"]}>
                    Start Here typing in Family Information
                </Flowpoint>
                <Flowpoint key="point_b">
                    Another Family Member
                </Flowpoint> */}
                    <Flowpoint
                        key="point_a"
                        outputs={{
                            "point_b": {
                                output: "auto",
                                input: "auto",
                                inputColor: "red"
                            },
                            "point_": {
                                output: "right",
                                input: "left"
                            }
                        }}>Hello World!</Flowpoint>
                </Flowspace>            </div>
            <div>

            </div>
        </div>
    )

}