var can = require('can');
require('can/map/define/define');

module.exports = can.Map.extend({
    define:{
        limit: {
            value: 25,
            type: 'number'
        },
        page: {
            value:1,
            type: 'number'
        },
        offset: {
            value: 0,
            type: 'number'
        },
        count: {
            value: 0,
            type: 'number'
        },
        totalPages: {
            get: function () {
                var count = this.attr('count'),
                    limit = this.attr('limit');

                return Math.ceil(count/limit);

            }
        },
        pages: {
            get: function () {
                var totalPages = this.attr('totalPages'),
                    pages = [];

                for (var i = 0; i < totalPages; i++) {
                    pages.push(i+1);
                }

                return pages;
            }
        }
    },
    updatePage: function (ctx) {
        this.attr('page',ctx);
    }
});
