import {EntryFactory } from '../bpmn-js/bpmn-js';

// Note that names of arguments must match injected modules, see InjectionNames.
export function CustomPropsProvider( translate, bpmnPropertiesProvider) {
  this.getTabs = function(element) {
    console.log( this.constructor.name, 'Creating property tabs');
    return bpmnPropertiesProvider.getTabs(element).concat({
      id: 'custom',
      label: translate('Custom'),
      groups: [
        {
          id: 'customText',
          label: translate('customText'),
          entries: [
            EntryFactory.textBox({
              id: 'custom',
              label: translate('customText'),
              modelProperty: 'customText'
            }),
          ]
        }
      ]
    });
  };
}
