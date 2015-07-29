import can from 'can';

import template from './bit-pagination.stache!';
import ViewModel from './viewmodel';
import './bit-pagination.less!';

export default can.Component.extend({
    tag: 'bit-pagination',
    template: template,
    scope: ViewModel,
    events: {
        '{viewModel} page': function (vm, key, page) {
            var limit = vm.attr('limit');
            //update the offset
            vm.attr('offset', (page * limit)-limit);
        }
    }
});
