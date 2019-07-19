/**
 *
 * Asynchronously loads the component for Scroll
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
