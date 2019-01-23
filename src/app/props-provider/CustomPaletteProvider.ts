import {IPalette, IPaletteProvider} from "../bpmn-js/bpmn-js";

export class CustomPaletteProvider implements IPaletteProvider {

  static $inject = ['palette', 'originalPaletteProvider', 'elementFactory'];

  private readonly elementFactory: any;

  // Note that names of arguments must match injected modules, see InjectionNames.
  // I don't know why originalPaletteProvider matters but it breaks if it isn't there.
  // I guess since this component is injected, and it requires an instance of originalPaletteProvider,
  // originalPaletteProvider will be new'ed and thus call palette.registerProvider for itself.
  // There probably is a better way.
  constructor(private palette: IPalette, private originalPaletteProvider: IPaletteProvider, elementFactory) {
    // console.log(this.constructor.name, "constructing", palette, originalPaletteProvider);
    palette.registerProvider(this);
    this.elementFactory = elementFactory;
  }

  getPaletteEntries() {
    // console.log(this.constructor.name, "getPaletteEntries", this.palette, this.originalPaletteProvider);
    return {
      save: {
        group: 'tools',
        className: ['fa-save', 'fa'],
        title: 'TEST',
        action: {
          click: () => console.log( 'TEST Action clicked! Elementfactory: ', this.elementFactory)
        }
      }
    };
  }
}
