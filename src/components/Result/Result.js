import React from 'react';
import { WeatherResults } from './styles';

const Result = props => {
  return (
    <WeatherResults className="results" id="weatherResults">
      {props.title && <h3 className="title"> {props.title} </h3>}
      <ul>
        <li className="weatherValue">
          {props.city &&
            props.country && (
              <span className="data">
                <span>Location :</span> {props.city},{props.country}
              </span>
            )}
        </li>
        <li className="description">
          {props.description && (
            <span className="data">
              <span>Description :</span> {props.description}
            </span>
          )}
        </li>
        <li className="temp">
          {props.temp && (
            <span className="data">
              <span>Tempreature :</span> {props.temp}
            </span>
          )}
        </li>
        <li className="humidity">
          {props.humidity && (
            <span className="data">
              <span>Humidity :</span> {props.humidity}
            </span>
          )}
        </li>
        <li className="wind">
          {props.wind && (
            <span className="data">
              <span>Wind :</span> {props.wind}
            </span>
          )}
        </li>
      </ul>
      {props.error && <span className="error"> {alert(props.error)} </span>}
    </WeatherResults>
  );
};

export default Result;
