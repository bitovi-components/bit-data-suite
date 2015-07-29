import can from 'can';
import 'can/map/define/define';

import valueTemplate from './templates/value.stache!';
import cellTemplate from './templates/cell.stache!';
import rowTemplate from './templates/row.stache!';
import headerRowTemplate from './templates/headerRow.stache!';
import bodyTemplate from './templates/body.stache!';

can.view.preloadStringRenderer('valueTemplate', valueTemplate);
can.view.preloadStringRenderer('cellTemplate', cellTemplate);
can.view.preloadStringRenderer('rowTemplate', rowTemplate);
can.view.preloadStringRenderer('headerRowTemplate', headerRowTemplate);
can.view.preloadStringRenderer('bodyTemplate', bodyTemplate);

var Columns = can.Map.extend({
    init: function () {
        //generate map
    }
},{
    define: {
        _visible: {
            value: true,
            type: 'boolean'
        },
        _control: {
            value: false,
            type: 'boolean'
        }
    },
    getColumnByName: function (columnName) {

    },
    toggle: function () {
        this.attr('_visible', !this.attr('_visible'));
    }
});

export default can.Map.extend({
    define:{
        columns: {
            value: []
        },
        data: {
            value: []
        },
        headerRows: {
            value: [{
                _classes: 'primary-row'
            }]
        },
        isDataEmpty: {
            get: function () {
                return this.attr('data').length === 0;
            }
        }
    },
    getColumn: function (ctx, tree) {
        return ctx.attr('label');
    },
    getValue: function (ctx, tree) {
        console.log(ctx);
        console.log(tree);
        return tree._parent._context.attr(ctx.attr('key'));
    }
});
