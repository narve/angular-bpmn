// import _Modeler from 'bpmn-js/lib/Modeler.js';
import * as _Modeler from "bpmn-js/dist/bpmn-modeler.production.min.js";
import * as _PropertiesPanelModule from 'bpmn-js-properties-panel';
import * as _BpmnPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/bpmn';
import * as _EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import _PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
import _ContextPadProvider from 'bpmn-js/lib/features/context-pad/ContextPadProvider';

export const InjectionNames = {
  eventBus: 'eventBus',
  bpmnFactory: 'bpmnFactory',
  elementRegistry: 'elementRegistry',
  translate: 'translate',
  propertiesProvider: 'propertiesProvider',
  bpmnPropertiesProvider: 'bpmnPropertiesProvider',
  paletteProvider: 'paletteProvider',
  originalPaletteProvider: 'originalPaletteProvider',
  contextPadProvider: 'contextPadProvider',
  originalContextPadProvider: 'originalContextPadProvider',
};

export const Modeler = _Modeler;
export const PropertiesPanelModule = _PropertiesPanelModule;
export const EntryFactory = _EntryFactory;
export const OriginalPaletteProvider = _PaletteProvider;
export const OriginalPropertiesProvider = _BpmnPropertiesProvider;
export const OriginalContextPadProvider = _ContextPadProvider;

export interface IPaletteProvider {
  getPaletteEntries(): any;
}

export interface IPalette {
  registerProvider(provider: IPaletteProvider): any;
}

export interface IPropertiesProvider {
  getTabs(elemnt): any;
}

export interface IContextPad {
  registerProvider(provider: IContextPadProvider): any;
}

export interface IContextPadProvider {
  getContextPadEntries(elemnt): any;
}
