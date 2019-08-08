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
      self.animals = animals;
    },
    setUpScales() {
      let maxHeartrate = 0,
        minHeartrate = 0,
        maxLongevity = 0,
        minLongevity = 0,
        maxWeight = 0,
        minWeight = 0;
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
        .domain([minHeartrate, maxHeartrate])
        .range([0, 1000]);
      self.longevityScale = scaleLinear()
        .domain([minLongevity, maxLongevity])
        .range([0, 1000]);
      self.weightScale = scaleLinear()
        .domain([minWeight, maxWeight])
        .range([0, 1000]);
    }
  }))
  .views(self => ({
    heartAxis() {
      return self.heartScale.ticks(10);
    },
    longevityAxis() {
      return self.longevityScale.ticks(10);
    },
    weightAxis() {
      return self.weightScale.ticks(10);
    }
  }));

const Store = types.model('Store', {
  chart: ChartModel
});

const store = Store.create({
  chart: { animals: [] }
});

export default ({ element }) => <Provider store={store}>{element}</Provider>;
