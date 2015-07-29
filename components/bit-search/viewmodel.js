import can from 'can';
import _ from 'lodash';
import 'can/map/define/';
import 'can/list/promise/';

export default can.Map.extend({
    define:{
        searchQuery: {
            value: {}
        },

        results: {
            value: []
        }
    },

    model: {},

    doSearch: function () {
        var search = this.attr('searchQuery'),
            Model = this.attr('model'),
            self = this,
            def;

        def = Model.findAll(search.attr());

        def.then(function (resp) {
            self.attr('results', resp);
        });
    }

});
