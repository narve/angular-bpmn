import * as _Modeler from 'bpmn-js/lib/Modeler.js';
import * as _PropertiesPanelModule from 'bpmn-js-properties-panel';
import * as _BpmnPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/bpmn';
import * as _EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

export const InjectionNames = {
  eventBus: 'eventBus',
  bpmnFactory: 'bpmnFactory',
  elementRegistry: 'elementRegistry',
  translate: 'translate',
  propertiesProvider: 'propertiesProvider',
  bpmnPropertiesProvider: 'bpmnPropertiesProvider',
};

export const Modeler = _Modeler;
export const PropertiesPanelModule = _PropertiesPanelModule;
export const BpmnPropertiesProvider = _BpmnPropertiesProvider;
export const EntryFactory = _EntryFactory;
