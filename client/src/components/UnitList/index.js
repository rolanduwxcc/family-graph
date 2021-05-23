import React from 'react';
import { Link } from 'react-router-dom';

const UnitList = ({ units }) => {
    
    return (
        <div>
            <h5>
                Possible Relatives
            </h5>
            {units.map(unit => (
                <button className="btn w-100 display-block mb-2" key={unit._id}>
                    <Link to={`/unit/${unit.firstName}`}>{unit.firstName}</Link>
                </button>
            ))}
        </div>
    );
};



export default UnitList;