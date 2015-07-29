import can from 'can';

import template from './bit-table.stache!';
import ViewModel from './viewmodel';

import cellTemplate from './templates/cell.stache!';
import rowTemplate from './templates/row.stache!';
import headerRowTemplate from './templates/headerRow.stache!';
import bodyTemplate from './templates/body.stache!';

can.view.preloadStringRenderer('cellTemplate', cellTemplate);
can.view.preloadStringRenderer('rowTemplate', rowTemplate);
can.view.preloadStringRenderer('headerRowTemplate', headerRowTemplate);
can.view.preloadStringRenderer('bodyTemplate', bodyTemplate);

//components
import 'components/bit-grid/';

export default can.Component.extend({
    tag: 'bit-table',
    template: template,
    viewModel: ViewModel
});
