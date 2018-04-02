import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modeler, BpmnPropertiesProvider, PropertiesPanelModule, InjectionNames} from "./bpmn-js/bpmn-js";
import {CustomPropsProvider} from './props-provider/CustomPropsProvider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular/BPMN';
  viewer;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.viewer = new Modeler({
      container: '#canvas',
      width: '100%',
      height: '600px',
      additionalModules: [
        PropertiesPanelModule,
        // Re-use original bpmn-properties-module, see CustomPropsProvider for how it is used
        {
          __init__: [InjectionNames.bpmnPropertiesProvider],
          bpmnPropertiesProvider: ['type', BpmnPropertiesProvider.propertiesProvider[1]]
        },
        {
          __init__: [InjectionNames.propertiesProvider],
          propertiesProvider: ['type', CustomPropsProvider]
        },
      ],
      propertiesPanel: {
        parent: '#properties'
      },
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  load(): void {
    const url = '/assets/bpmn/initial.bpmn';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
        (x: any) => {
          console.log('Fetched XML, now importing: ', x);
          this.viewer.importXML(x, this.handleError);
        },
        this.handleError
      );
  }
}
