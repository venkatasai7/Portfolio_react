import React from 'react';
import '../Styles/Experience.css';

const CardFlip = (props) => {
  return (<div className='aboutcontent'>
    <a style={{ float: 'right' }} href="/">view experiences</a>

       <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <div className="maincontainer">
        <div className="thecard">
        <div className="thefront" style={{ backgroundImage: `url(${"../images/tcsjpg.jpg"})` }}>
          </div>
          <div className="theback">
            <h1>TATA CONSULTANCY SERVICES</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis aspernatur eius beatae, tempora totam velit non nulla quis officiis culpa aliquam laudantium commodi reprehenderit nihil illum laboriosam impedit! Praesentium.
            </p>
            <button className='btn btn-primary'>Details</button>
          </div>
        </div>
      </div>

      <div className="maincontainer">
        <div className="thecard">
        <div className="thefront" style={{ backgroundImage: `url(${"../images/axiom.jpg"})` }}>

          </div>
          <div className="theback">
            <h1>AXIOM IO</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis aspernatur eius beatae, tempora totam velit non nulla quis officiis culpa aliquam laudantium commodi reprehenderit nihil illum laboriosam impedit! Praesentium.
            </p>
            <button className='btn btn-primary'>Details</button>
          </div>
        </div>
      </div>

    </div>

    </div>
  );
};

export default CardFlip;
