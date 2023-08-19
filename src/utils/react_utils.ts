import { MutableRefObject, useEffect } from 'react';

/**
 * @author <https://stackoverflow.com/a/42234988>
 */
export const useOutsideAlerter = (handleClickOutside: () => void, ref: MutableRefObject<any>): void => {
  useEffect(() => {
    const ensureUserClickedOutside = (event: MouseEvent): boolean => ref.current && !ref.current.contains(event.target);
    const listener = (event: MouseEvent) => (ensureUserClickedOutside(event) ? handleClickOutside() : undefined);
    document.addEventListener('mousedown', listener);
    return () => (document.removeEventListener('mousedown', listener));
  }, [ref]);
}

export const useTabChangeOrMinimize = (handleBlur: () => void) => {
  useEffect(() => {
    window.addEventListener('blur', handleBlur);
    return () => (window.removeEventListener('blur', handleBlur));
  }, []);
}