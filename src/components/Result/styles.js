import styled from 'styled-components';

export const WeatherResults = styled.div`
  padding-bottom: 20px;
  > h3 {
    color: #fff;
    margin-left: 28px;
  }
  > ul {
    font-weight: lighter;
    list-style-type: none;
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;

    > li {
      list-style-type: none;
      color: #fff;
      font-size: 20px;
      margin-bottom: 10px;
      > span {
        > span {
          font-weight: bold;
        }
      }
    }
  }
`;
