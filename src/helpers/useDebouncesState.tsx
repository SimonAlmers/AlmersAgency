import { debounce } from "lodash";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

/**
 * @returns a stateful object containing a `realtime` & `debounced` component as well as a function to update the state
 *
 * @remarks useDebouncedState can be used similar to useState and is prefered for wen the state is used to perform a API-request.
 *
 *
 * Use the `realtime` value for displaying the changing value in realtime (like in the value of a input that is driving the state)
 *
 * Use the `debounced` value for listening to changes that should be debounced (like in the dependency chain of a useEffect)
 *
 * @example
 * Example with default debounce delay
 * ```
 * const [state, setState] = useDebouncedState('');
 * ```
 *
 * @example Example with custom debounce delay set to 500ms
 * ```
 * const [state, setState] = useDebouncedState('', 500);
 * ```
 *
 * @example Usage of the returned values
 * ```tsx
 * const [state, setState] = useDebouncedState('');
 *
 * // Use the {searchTerm.debounced} for triggering the API-calls
 * useEffect(() => {
 * performAPIRequest();
 * }, [searchTerm.debounced]);
 *
 * // Use the {searchTerm.realtime} to display the state for the user
 * <input type="text" value={searchTerm.realtime} onChange={e => setSearchTerm(e.target.value)} />
 * ```
 *
 * @param initialState Provide the initial state
 * @param delay Time in ms (milliseconds) to debounce the state
 *
 * @author Simon Almers <simon@simonalmers.com>
 */

const useDebouncedState = <T,>(
  initialState: T,
  delay = 300
): [{ debounced: T; realtime: T }, Dispatch<SetStateAction<T>>] => {
  const [realtime, setRealtime] = useState<T>(initialState);
  const [debounced, setDebounced] = useState<T>(initialState);

  const debouncedSetState = useCallback(
    debounce((value: SetStateAction<T>) => setDebounced(value), delay),
    []
  );

  const handleNewState = (value: SetStateAction<T>) => {
    setRealtime(value);
    debouncedSetState(value);
  };

  return [
    {
      debounced,
      realtime,
    },
    handleNewState,
  ];
};

export default useDebouncedState;
