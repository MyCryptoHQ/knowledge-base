import { useSelector as useReduxSelector } from 'react-redux';
import { ApplicationState } from '../store';

/**
 * Wraps the `useSelector` hook of `react-redux` with a type-safe version.
 *
 * @param {(state: ApplicationState) => S} selector The store selector
 * @template S
 */
export const useSelector = <S>(selector: (state: ApplicationState) => S): S => {
  return useReduxSelector<ApplicationState, S>(selector);
};
