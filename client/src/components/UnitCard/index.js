import React from 'react';

function unitCard() {
    return (
        <div class="card mt-5" style={{width:'22rem'}}>
        <img src={unit.imageLink} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{unit.firstName, unit.Lastname}</h5>
          <div class="card-text-container">
            <p>{unit.firstName}</p>
            <p>{unit.lastName}</p>
            <p>{unit.otherNames}</p>
            <p>{unit.mother}</p>
            <p>{unit.father}</p>
            <p>{unit.children}</p>
            <p>{unit.birthCountry}</p>
            <p>{unit.homeCountry}</p>
          </div>
          <a href="#" class="btn btn-primary">
            Add Parent
          </a>
        </div>
      </div>
    );
}

export default unitCard;