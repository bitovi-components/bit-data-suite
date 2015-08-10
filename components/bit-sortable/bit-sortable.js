import can from 'can';

import template from './bit-sortable.stache!';
import ViewModel from './viewmodel';

export default can.Component.extend({
    tag: 'bit-sortable',
    template: template,
    viewModel: ViewModel,
    events: {
        inserted: function () {
            // this.targetColumn = opts.targetColumn;
            // this.queryKey = opts.queryKey;
            // this.data = new SortableData({});
            // //add template
            // $ele.append(sortableTemplate(this.data));
        },
        '.sort-ascending click': function ($el, ev) {
            this.viewModel.toggleDirection();
        },
        '.sort-descending click': function ($el, ev) {
            this.viewModel.toggleDirection();
        }
    }
});
