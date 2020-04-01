import React from 'react';
import bg from '../../img/bg-shape.svg';
import './Info.css';

const Info = (props) => {
    return (
        <section>
            <img src={bg} alt='Background Shape' id='bg' />
            <h1>WEATHER<br />ME<span>NOW</span></h1>
            <hr />
            <p>A minimal weather app design to brighten up your day.<br />Designed and developed by Jozsef Sido</p>
            <div className='bottom'>
                <p>Your weather is currently showing in:</p>
                <div className='buttons'>
                    <div className='btn'>
                        { props.tempSymbol === 'C' ?
                        <button className='clicked'>C</button>
                        :
                        <button onClick={props.setTempSymbol}>C</button>
                        }
                        <p>Celsius</p>
                    </div>
                    <div className='btn'>
                        { props.tempSymbol === 'F'  ?
                        <button className='clicked'>F</button>
                        :
                        <button onClick={props.setTempSymbol}>F</button>
                        }
                        <p>Fahrenheit</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;