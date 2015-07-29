import can from 'can';

import template from './bit-grid.stache!';
import ViewModel from './viewmodel';
import './bit-grid.less!';

export default can.Component.extend({
    tag: 'bit-pagination',
    template: template,
    scope: ViewModel
});
