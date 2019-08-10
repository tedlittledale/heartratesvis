import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

const TableWrap = styled('div')`
  table {
    width: 100%;
    padding: 20px;
  }
  tr {
    width: 100%;
    display: grid;
    grid: 1fr / 20px 150px 3fr 3fr 3fr;
    ${media.phablet`grid: 1fr / 20px 70px 3fr 3fr 3fr;`}
    ${media.phone`grid: 1fr / 20px 70px 3fr 3fr 3fr;`}
    text-align: left;
    background: hsl(210, 36%, 96%);
    border-bottom: 1px solid hsla(210, 22%, 49%, 0.1);
    &:nth-child(2n) {
      background: hsl(210, 36%, 99%);
    }
    td,
    th {
      padding: 10px 0;
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        text-align: right;
      }
      &:nth-child(5) {
        padding-right: 20px;
      }
    }
  }
  thead tr {
    background: white;
    border-bottom: none;
    font-weight: normal;
    background: hsl(205, 65%, 55%);
    color: white;

    ${media.phablet`font-size:12px;`}
    ${media.phone`font-size:12px;`}
    th {
      ${media.phablet`padding: 5px 0 5px 10px;`}
      ${media.phone`padding:  5px 0 5px 10px;`}
    }
  }
`;

const Table = () => {
  return (
    <>
      <TableWrap>
        <table className="js-csv-data csv-data js-file-line-container">
          <thead>
            <tr id="LC1" className="js-file-line">
              <td
                id="L1"
                className="blob-num js-line-number"
                data-line-number="1"
              ></td>
              <th>Creature</th>
              <th>Mass (grams)</th>
              <th>Resting Heart Rate (BPM)</th>
              <th>Longevity (Years)</th>
            </tr>
          </thead>
          <tbody>
            <tr id="LC2" className="js-file-line">
              <td
                id="L2"
                className="blob-num js-line-number"
                data-line-number="2"
              ></td>
              <td>Human</td>
              <td>90000</td>
              <td>60</td>
              <td>70</td>
            </tr>
            <tr id="LC3" className="js-file-line">
              <td
                id="L3"
                className="blob-num js-line-number"
                data-line-number="3"
              ></td>
              <td>Cat</td>
              <td>2000</td>
              <td>150</td>
              <td>15</td>
            </tr>
            <tr id="LC4" className="js-file-line">
              <td
                id="L4"
                className="blob-num js-line-number"
                data-line-number="4"
              ></td>
              <td>Small dog</td>
              <td>2000</td>
              <td>100</td>
              <td>10</td>
            </tr>
            <tr id="LC5" className="js-file-line">
              <td
                id="L5"
                className="blob-num js-line-number"
                data-line-number="5"
              ></td>
              <td>Medium dog</td>
              <td>5000</td>
              <td>90</td>
              <td>15</td>
            </tr>
            <tr id="LC6" className="js-file-line">
              <td
                id="L6"
                className="blob-num js-line-number"
                data-line-number="6"
              ></td>
              <td>Large dog</td>
              <td>8000</td>
              <td>75</td>
              <td>17</td>
            </tr>
            <tr id="LC7" className="js-file-line">
              <td
                id="L7"
                className="blob-num js-line-number"
                data-line-number="7"
              ></td>
              <td>Hamster</td>
              <td>60</td>
              <td>450</td>
              <td>3</td>
            </tr>
            <tr id="LC8" className="js-file-line">
              <td
                id="L8"
                className="blob-num js-line-number"
                data-line-number="8"
              ></td>
              <td>Chicken</td>
              <td>1500</td>
              <td>275</td>
              <td>15</td>
            </tr>
            <tr id="LC9" className="js-file-line">
              <td
                id="L9"
                className="blob-num js-line-number"
                data-line-number="9"
              ></td>
              <td>Monkey</td>
              <td>5000</td>
              <td>190</td>
              <td>15</td>
            </tr>
            <tr id="LC10" className="js-file-line">
              <td
                id="L10"
                className="blob-num js-line-number"
                data-line-number="10"
              ></td>
              <td>Horse</td>
              <td>1200000</td>
              <td>44</td>
              <td>40</td>
            </tr>
            <tr id="LC11" className="js-file-line">
              <td
                id="L11"
                className="blob-num js-line-number"
                data-line-number="11"
              ></td>
              <td>Cow</td>
              <td>800000</td>
              <td>65</td>
              <td>22</td>
            </tr>
            <tr id="LC12" className="js-file-line">
              <td
                id="L12"
                className="blob-num js-line-number"
                data-line-number="12"
              ></td>
              <td>Pig</td>
              <td>150000</td>
              <td>70</td>
              <td>25</td>
            </tr>
            <tr id="LC13" className="js-file-line">
              <td
                id="L13"
                className="blob-num js-line-number"
                data-line-number="13"
              ></td>
              <td>Rabbit</td>
              <td>1000</td>
              <td>205</td>
              <td>9</td>
            </tr>
            <tr id="LC14" className="js-file-line">
              <td
                id="L14"
                className="blob-num js-line-number"
                data-line-number="14"
              ></td>
              <td>Elephant</td>
              <td>5000000</td>
              <td>30</td>
              <td>70</td>
            </tr>
            <tr id="LC15" className="js-file-line">
              <td
                id="L15"
                className="blob-num js-line-number"
                data-line-number="15"
              ></td>
              <td>Giraffe</td>
              <td>900000</td>
              <td>65</td>
              <td>20</td>
            </tr>
            <tr id="LC16" className="js-file-line">
              <td
                id="L16"
                className="blob-num js-line-number"
                data-line-number="16"
              ></td>
              <td>Large whale</td>
              <td>120000000</td>
              <td>20</td>
              <td>80</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </>
  );
};

export default Table;
