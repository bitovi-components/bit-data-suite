/**
 * @module {can.Component} list List
 * @parent components
 * @author Juan Orozco
 *
 * @description
 *
 * @signature '<fp-list></fp-list>'
 *
 * @param {can.List} items Items for search
 *
 * @body
 * ## Component Init
 * ```html
 *    <fp-list items="{model}"></fp-list>
 * ```
 *
 * @demo ../app/demo.html!#component/list
 */
 import can from 'can';

 import template from './bit-list.stache!';
 import ViewModel from './viewmodel';

 import bodyTemplate from './templates/body.stache!';
 import cellTemplate from './templates/item.stache!';
 import rowTemplate from './templates/row.stache!';

 can.view.preloadStringRenderer('rowTemplate', rowTemplate);
 can.view.preloadStringRenderer('bodyTemplate', bodyTemplate);
 can.view.preloadStringRenderer('cellTemplate', cellTemplate);

 //components
 import 'components/bit-grid/';

 export default can.Component.extend({
     tag: 'bit-list',
     template: template,
     viewModel: ViewModel
 });
