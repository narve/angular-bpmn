import {EntryFactory, IPropertiesProvider} from '../bpmn-js/bpmn-js';

export class CustomPropsProvider implements IPropertiesProvider {

  static $inject = ['translate', 'bpmnPropertiesProvider'];

// Note that names of arguments must match injected modules, see InjectionNames.
  constructor(private translate, private bpmnPropertiesProvider) {
  }

  getTabs(element) {
    console.log(this.constructor.name, 'Creating property tabs');
    return this.bpmnPropertiesProvider.getTabs(element)
      .concat({
        id: 'custom',
        label: this.translate('Custom'),
        groups: [
          {
            id: 'customText',
            label: this.translate('customText'),
            entries: [
              EntryFactory.textBox({
                id: 'custom',
                label: this.translate('customText'),
                modelProperty: 'customText'
              }),
            ]
          }
        ]
      });
  }
}
