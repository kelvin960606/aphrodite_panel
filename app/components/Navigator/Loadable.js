/**
 *
 * Asynchronously loads the component for Navigator
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
    loader: () => import('./index'),
    loading: () => null,
});
