import can from 'can';
import 'can/util/fixture/';
import 'can/list/sort/';

import 'components/bit-table/';
import 'components/bit-pagination/';
import 'components/bit-search/';
import 'components/bit-sortable/';

import './demo.less!';

var tableData = [
    {name:'Juan', twitter:'Guamaso', github: 'Macrofig'},
    {name:'Curtis', twitter:'', github: ''},
    {name:'Jan', twitter:'', github: ''},
    {name:'Julia', twitter:'', github: ''},
    {name:'Joe', twitter:'', github: ''},
    {name:'Lela', twitter:'', github: ''},
    {name:'Adri', twitter:'', github: ''},
    {name:'Chasen', twitter:'', github: ''}
];

var tableColumns = [
    {key: "name", label:"Name"},
    {key: "twitter", label:"Twitter"},
    {key:'github',label:'Github'}
];

//Search model
var Search = can.Model.extend({
  findAll: "GET /test"
},{});

// Fixture
can.fixture('GET /test', function(req) {
    var resp = new can.List(tableData),
        count = resp.length,
        params = req.data,
        searchOn = [];
    console.log(params);
    //filter results if search params exist
    can.each(tableColumns, function (item) {
        if (params[item.key]) {
            searchOn.push({key:item.key, value: params[item.key]});
        }
    });
    if (searchOn.length > 0) {
        resp = resp.filter(function(item) {
            var resp = false;
            //"begins with" search
            can.each(searchOn, function (searchItem) {

                resp = item[searchItem.key].toLowerCase().indexOf(searchItem.value.toLowerCase()) > -1;
                if (resp) {
                    return false;
                }
            });
            return resp;
        });
    }

    //sort results
    if (params.sort && params.sort.length > 0) {
        var sortKey = '', sortDirection='';
        can.each(params.sort[0],function (item, key) {
            sortKey = key;
            sortDirection = item;
        });
        resp.attr('comparator', function (a,b) {
            return a[sortKey] > b[sortKey]? 1: -1;
        });
        resp.sort();
    }
    //crop results down using limit and offset
    if (typeof params.offset !== 'undefined' && typeof params.limit !== 'undefined') {
        resp = resp.splice(params.offset, params.limit);
    }
    return {count: count, data: resp}
});

can.$('#demo_template').viewModel({
    Search: Search,
	results: [],
    query: {
        limit:3,
        offset: 0,
        sort: []
    },
	columns: tableColumns,
    valueTemplate: './value.stache',
    headerRowTemplate: './header.stache'
});
