import { useDispatch as useReduxDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationActions } from '../store/reducer';

/**
 * Wraps the `useDispatch` hook of `react-redux` with a type-safe version.
 */
export const useDispatch = (): Dispatch<ApplicationActions> => {
  return useReduxDispatch<Dispatch<ApplicationActions>>();
};
