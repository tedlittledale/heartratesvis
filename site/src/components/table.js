import React from 'react';
import styled from 'styled-components';

const TableWrap = styled('div')`
  table {
    width: 100%;
  }
  tr {
    width: 100%;
    display: grid;
    grid: 1fr / 0px repeat(4, 1fr);
    text-align: left;
  }
`;

const Table = () => {
  return (
    <>
      <TableWrap>
        <table class="js-csv-data csv-data js-file-line-container">
          <thead>
            <tr id="LC1" class="js-file-line">
              <td
                id="L1"
                class="blob-num js-line-number"
                data-line-number="1"
              ></td>
              <th>Creature</th>
              <th>Mass (grams)</th>
              <th>Resting Heart Rate (BPM)</th>
              <th>Longevity (Years)</th>
            </tr>
          </thead>
          <tbody>
            <tr id="LC2" class="js-file-line">
              <td
                id="L2"
                class="blob-num js-line-number"
                data-line-number="2"
              ></td>
              <td>Human</td>
              <td>90000</td>
              <td>60</td>
              <td>70</td>
            </tr>
            <tr id="LC3" class="js-file-line">
              <td
                id="L3"
                class="blob-num js-line-number"
                data-line-number="3"
              ></td>
              <td>Cat</td>
              <td>2000</td>
              <td>150</td>
              <td>15</td>
            </tr>
            <tr id="LC4" class="js-file-line">
              <td
                id="L4"
                class="blob-num js-line-number"
                data-line-number="4"
              ></td>
              <td>Small dog</td>
              <td>2000</td>
              <td>100</td>
              <td>10</td>
            </tr>
            <tr id="LC5" class="js-file-line">
              <td
                id="L5"
                class="blob-num js-line-number"
                data-line-number="5"
              ></td>
              <td>Medium dog</td>
              <td>5000</td>
              <td>90</td>
              <td>15</td>
            </tr>
            <tr id="LC6" class="js-file-line">
              <td
                id="L6"
                class="blob-num js-line-number"
                data-line-number="6"
              ></td>
              <td>Large dog</td>
              <td>8000</td>
              <td>75</td>
              <td>17</td>
            </tr>
            <tr id="LC7" class="js-file-line">
              <td
                id="L7"
                class="blob-num js-line-number"
                data-line-number="7"
              ></td>
              <td>Hamster</td>
              <td>60</td>
              <td>450</td>
              <td>3</td>
            </tr>
            <tr id="LC8" class="js-file-line">
              <td
                id="L8"
                class="blob-num js-line-number"
                data-line-number="8"
              ></td>
              <td>Chicken</td>
              <td>1500</td>
              <td>275</td>
              <td>15</td>
            </tr>
            <tr id="LC9" class="js-file-line">
              <td
                id="L9"
                class="blob-num js-line-number"
                data-line-number="9"
              ></td>
              <td>Monkey</td>
              <td>5000</td>
              <td>190</td>
              <td>15</td>
            </tr>
            <tr id="LC10" class="js-file-line">
              <td
                id="L10"
                class="blob-num js-line-number"
                data-line-number="10"
              ></td>
              <td>Horse</td>
              <td>1200000</td>
              <td>44</td>
              <td>40</td>
            </tr>
            <tr id="LC11" class="js-file-line">
              <td
                id="L11"
                class="blob-num js-line-number"
                data-line-number="11"
              ></td>
              <td>Cow</td>
              <td>800000</td>
              <td>65</td>
              <td>22</td>
            </tr>
            <tr id="LC12" class="js-file-line">
              <td
                id="L12"
                class="blob-num js-line-number"
                data-line-number="12"
              ></td>
              <td>Pig</td>
              <td>150000</td>
              <td>70</td>
              <td>25</td>
            </tr>
            <tr id="LC13" class="js-file-line">
              <td
                id="L13"
                class="blob-num js-line-number"
                data-line-number="13"
              ></td>
              <td>Rabbit</td>
              <td>1000</td>
              <td>205</td>
              <td>9</td>
            </tr>
            <tr id="LC14" class="js-file-line">
              <td
                id="L14"
                class="blob-num js-line-number"
                data-line-number="14"
              ></td>
              <td>Elephant</td>
              <td>5000000</td>
              <td>30</td>
              <td>70</td>
            </tr>
            <tr id="LC15" class="js-file-line">
              <td
                id="L15"
                class="blob-num js-line-number"
                data-line-number="15"
              ></td>
              <td>Giraffe</td>
              <td>900000</td>
              <td>65</td>
              <td>20</td>
            </tr>
            <tr id="LC16" class="js-file-line">
              <td
                id="L16"
                class="blob-num js-line-number"
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
