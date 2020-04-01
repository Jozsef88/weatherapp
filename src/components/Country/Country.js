import React from 'react';
import './Country.css';

import sun from '../../img/sun-icon.svg';
import snow from '../../img/snow-icon.svg';
import ca from '../../img/pic-1.jpg'
import ru from '../../img/pic-2.jpg'

const Country = (props) => {

    let currentTemp = 0;

    if (props.cities) {
        let fahrenheit = parseInt(props.cities.main.temp);
        let celsius = parseInt((fahrenheit - 32) * (5 / 9));
        if (props.tempSymbol === 'F') {
            currentTemp = fahrenheit;
        } else {
            currentTemp = celsius;
        }
    }

    return (
        <section>
            <div className='floater'>
                <div className='icon-temp'>
                { props.cities && props.cities.name === 'Los Angeles' ?
                    <img src={sun} alt='Sun'/>
                    :
                    <img src={snow} alt='Snow'/>
                }
                    <p id='temp'>{props.cities ? currentTemp : ''}°</p>
                </div>
                <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ''}</p>
            </div>
            { props.cities && props.cities.name === 'Los Angeles' ?
            <img src={ca} alt='Los Angeles' id='country-img' />
            :
            <img src={ru} alt='Moscow' id='country-img' />
            }
            <div className='country'>
                { props.cities && props.cities.name === 'Los Angeles' ?
                <div>
                    <p>Los Angeles</p>
                    <p>California</p>
                </div>
                :
                <div>
                    <p>Moscow</p>
                    <p>Russia</p>
                </div>
                }
            </div>
        </section>
    )
}

export default Country;