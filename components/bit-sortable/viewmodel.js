import can from 'can';
import 'can/map/define/';

export default can.Map.extend({
    define: {
        direction: {
            get: function () {
                var sorting = this.attr('sortBucket');
                return sorting[this.attr('sortKey')] || 'desc';
            },
            set: function (newVal) {
                var sorting = this.attr('sortBucket'),
                    sort = {};
                newVal = newVal === 'desc' || newVal === 'asc'? newVal: 'desc';
                sort[this.attr('sortKey')] = newVal;
                sorting.push(sort);
            }
        }
    },
    toggleDirection: function () {
        var current = this.attr('direction');
        if (current === 'desc') {
            this.attr('direction', 'asc');
        } else {
            this.attr('direction', 'desc');
        }
    }
});
