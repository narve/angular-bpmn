import * as EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

export function CustomPropsProvider( translate, bpmnPropertiesProvider) {
  this.getTabs = function(element) {
    console.log( this.constructor.name, 'Creating property tabs', element, bpmnPropertiesProvider);
    const origTabs = bpmnPropertiesProvider.getTabs(element);
    origTabs.push({
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
    return origTabs;
  };
}
