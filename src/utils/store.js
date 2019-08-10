import { inject } from 'mobx-react';
import * as R from 'ramda';

const getAndMap = (path, stores, mapper) => {
  const pathAsArray = path.split('.');
  const name = R.last(pathAsArray);
  const toBeInjected = R.path(['store', ...pathAsArray], stores);
  return {
    [name]: toBeInjected,
    ...((mapper && toBeInjected && mapper(toBeInjected)) || {})
  };
};

export const withPath = (path, transformer) =>
  inject(stores => getAndMap(path, stores, transformer));

export const withPaths = mappers =>
  inject(stores =>
    mappers.reduce((all, mapper) => {
      const mapped =
        typeof mapper === 'string'
          ? getAndMap(mapper, stores)
          : getAndMap(mapper[0], stores, mapper[1]);
      return {
        ...all,
        ...mapped
      };
    }, {})
  );

export const toEntries = R.pipe(
  R.unless(x => Array.isArray(x), R.of),
  R.map(obj => [obj.id, obj])
);
