import {IContextPad, IContextPadProvider} from "../bpmn-js/bpmn-js";

export class CustomContextPadProvider implements IContextPadProvider {

  static $inject = ['translate', 'create', 'contextPad', 'originalContextPadProvider', 'elementFactory'];

  private readonly elementFactory: any;

  // Note that names of arguments must match injected modules, see InjectionNames.
  // I don't know why originalPaletteProvider matters but it breaks if it isn't there.
  // I guess since this component is injected, and it requires an instance of originalPaletteProvider,
  // originalPaletteProvider will be new'ed and thus call palette.registerProvider for itself.
  // There probably is a better way.
  constructor(private create, private translate, private contextPad: IContextPad , private originalContextPadProvider: IContextPadProvider, elementFactory) {
    // console.log(this.constructor.name, "constructing", palette, originalPaletteProvider);
    contextPad.registerProvider(this);
    this.elementFactory = elementFactory;
  }

    // see also https://github.com/bpmn-io/bpmn-js-example-custom-controls/blob/master/app/custom/CustomContextPad.js
  getContextPadEntries(element) {

    function appendServiceTask(event) {

        appendServiceTaskStart(event);

    }

    function appendServiceTaskStart(event) {
      console.log( 'appendServiceTaskStart Action clicked! ');
    // const shape = elementFactory.createShape({ type: 'bpmn:ServiceTask' });

//     create.start(event, shape, element);      
    }

    return {
      'append.service-task': {
        group: 'model',
        className: 'bpmn-icon-service-task',
        title:  'Append ServiceTask',
        action: {
          click: appendServiceTask,
          dragstart: appendServiceTaskStart
        }
      }
    };
  }
}


