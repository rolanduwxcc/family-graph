import React from 'react';

function unitCard() {
    return (
        <div class="card mt-5" style={{width:'22rem'}}>
        <img src={unit.imageLink} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{unit.firstName, unit.Lastname}</h5>
          <div class="card-text-container">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{otherNames}</p>
            <p>{mother}</p>
            <p>{father}</p>
            <p>{children}</p>
            <p>{birthCountry}</p>
            <p>{homeCountry}</p>
          </div>
          <a href="#" class="btn btn-primary">
            Add Parent
          </a>
        </div>
      </div>
    );
}

export default unitCard;