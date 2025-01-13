import * as APIBROKER from './apibroker';
import * as NDBROKER from './ndbroker';
const Broker = {
    ...APIBROKER,
    ...NDBROKER,
};
export default Broker;
