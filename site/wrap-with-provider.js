/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { Provider } from 'mobx-react';
import { types, onSnapshot } from 'mobx-state-tree';
import { scaleLinear } from 'd3-scale';

const AnimalModel = types.model('AnimalModel', {
  Creature: '',
  Longevity__Years_: '',
  Mass__grams_: '',
  Resting_Heart_Rate__BPM_: ''
});

const ChartModel = types
  .model('ChartModel', {
    animals: types.array(AnimalModel),
    maxHeartrate: types.maybeNull(types.number),
    minHeartrate: types.maybeNull(types.number),
    maxLongevity: types.maybeNull(types.number),
    minLongevity: types.maybeNull(types.number),
    maxWeight: types.maybeNull(types.number),
    minWeight: types.maybeNull(types.number)
  })
  .actions(self => ({
    addAnimals(animals) {
      console.log({ animals });
      self.animals = animals;
    },
    setUpScales() {
      let maxHeartrate = 0,
        minHeartrate = 0,
        maxLongevity = 0,
        minLongevity = 0,
        maxWeight = 0,
        minWeight = 0;
      const marginX = 30;
      const marginY = 30;
      const marginTop = 30;
      const chartHeight = 500;
      console.log('hasdfa', self.animals);
      self.animals.forEach(
        ({
          Creature,
          Longevity__Years_,
          Mass__grams_,
          Resting_Heart_Rate__BPM_,
          ...rest
        }) => {
          maxHeartrate = Math.max(
            maxHeartrate,
            parseInt(Resting_Heart_Rate__BPM_, 10)
          );
          minHeartrate =
            minHeartrate === 0
              ? parseInt(Resting_Heart_Rate__BPM_, 10)
              : Math.min(minHeartrate, parseInt(Resting_Heart_Rate__BPM_, 10));
          maxLongevity = Math.max(
            maxLongevity,
            parseInt(Longevity__Years_, 10)
          );
          minLongevity =
            minLongevity === 0
              ? parseInt(Longevity__Years_, 10)
              : Math.min(minLongevity, parseInt(Longevity__Years_, 10));
          maxWeight = Math.max(maxWeight, parseInt(Mass__grams_, 10));
          minWeight =
            minWeight === 0
              ? parseInt(Mass__grams_, 10)
              : Math.min(minWeight, parseInt(Mass__grams_, 10));
        }
      );
      console.log({
        maxHeartrate,
        minHeartrate,
        maxLongevity,
        minLongevity,
        maxWeight,
        minWeight
      });
      self.heartScale = scaleLinear()
        .domain([maxHeartrate, minHeartrate])
        .range([marginTop, chartHeight - marginY - marginTop]);
      self.longevityScale = scaleLinear()
        .domain([minLongevity, maxLongevity])
        .range([marginY, 1000]);
      self.weightScale = scaleLinear()
        .domain([minWeight, maxWeight])
        .range([marginY, 1000]);
    }
  }))
  .views(self => ({
    heartAxis() {
      return self.heartScale.ticks(10).map(val => ({
        label: val,
        y: self.heartScale(val)
      }));
    },
    longevityAxis() {
      return self.longevityScale.ticks(10).map(val => ({
        label: val,
        x: self.longevityScale(val)
      }));
    },
    weightAxis() {
      return self.weightScale.ticks(10).map(val => ({
        label: val,
        x: self.weightScale(val)
      }));
    },
    longevityPoints() {
      return self.animals.map(
        ({
          Creature,
          Longevity__Years_,
          Mass__grams_,
          Resting_Heart_Rate__BPM_,
          ...rest
        }) => ({
          y: self.heartScale(Resting_Heart_Rate__BPM_),
          x: self.longevityScale(Longevity__Years_),
          pulse: Math.round(1000 / (Resting_Heart_Rate__BPM_ / 60)),
          label: Creature
        })
      );
    },
    weightPoints() {
      return self.animals.map(
        ({
          Creature,
          Longevity__Years_,
          Mass__grams_,
          Resting_Heart_Rate__BPM_
        }) => ({
          y: self.heartScale(Resting_Heart_Rate__BPM_),
          x: self.longevityScale(Mass__grams_),
          pulse: Math.round(Resting_Heart_Rate__BPM_ * (500 / 120)),
          label: Creature
        })
      );
    }
  }));

const Store = types.model('Store', {
  chart: ChartModel
});

const store = Store.create({
  chart: { animals: [] }
});

export default ({ element }) => <Provider store={store}>{element}</Provider>;
