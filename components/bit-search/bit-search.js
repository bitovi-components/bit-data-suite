/**
 * @module {can.Component} bit-search Bit-Search
 * @parent components
 * @group bit-search/events 0 Events
 * @group bit-search/viewModel 1 ViewModel
 *
 * @author Juan Orozco
 *
 *
 * @description
 * Bit-Search handles executing a search query on a specific model, it will populate an array
 * with the results. It uses the can.List.promise, so the query's state can be easily checked.
 *
 *
 * @signature '<bit-search></bit-search>'
 *
 * @param {can.Model} model Contains the model to search with.
 * @param {can.Map} results The query results object.
 * @param {can.Map} search-query The query to search, changing this value triggers `findAll` on the model.
 * @param {Number} debounce-delay The amount of time to wait before searching. Helpful for constant changes
 * to `search-query`, will keep each change from doing a query.
 *
 * @body
 *
 * ## Component Initialization
 *
 * ```html
 *   <bit-autocomplete model="{model}" results="{results}" search-query="{searchQuery}"></bit-autocomplete>
 * ```
 *
 * Add the `debounce-delay` value if needed.
 * ```html
 *   <bit-autocomplete model="{model}" results="{results}" search-query="{searchQuery}" debounce-delay="{{debounceDelay}}"></bit-autocomplete>
 * ```
 *
 * @demo index.html
 */
import can from 'can';
import 'can/view/stache/stache';
import template from './bit-search.stache!';
import './bit-search.less!';

import ViewModel from './viewmodel';

can.Component.extend({
	tag: 'bit-search',
	template: template,
	viewModel: ViewModel,
    events: {

		/**
		* @parent bit-search/events
		* @description Triggered when component is inserted in DOM. Checks search
		* query, triggers initial search.
		*/
		inserted: function () {
			var searchQuery = this.viewModel.attr('searchQuery');
			if (searchQuery && !can.isEmptyObject(searchQuery)) {
				this.viewModel.doSearch();
			}
		},

        /**
		 * @function searchField Search Field Input Event
         * @parent bit-search/events
         * @description When searchQuery is changed, executes search
		 * @param {can.Map} ctx The viewmodel.
		 * @param {string} keyName The key name of the object that changed.
		 * @param {can.Map} searchQuery The search query object.
         */
        '{searchQuery} change': function(ctx, keyName, searchQuery) {
			if (searchQuery && !can.isEmptyObject(searchQuery)) {
				this.viewModel.doSearch();
			}
        }
    }
});

export default ViewModel;
