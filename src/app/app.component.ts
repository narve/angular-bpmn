import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BpmnModules} from "./di/di";
import {CustomPropsProvider} from './props-provider/CustomPropsProvider';

import * as BpmnJS from 'bpmn-js/lib/Modeler.js';
import * as PropertiesPanelModule from 'bpmn-js-properties-panel';
import * as BpmnPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/bpmn';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular/BPMN';
  viewer: BpmnJS;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.viewer = new BpmnJS({
      container: '#canvas',
      width: '100%',
      height: '600px',
      additionalModules: [
        PropertiesPanelModule,
        // Re-use original bpmn-properties-module, see CustomPropsProvider for how it is used
        {
          __init__: [BpmnModules.BpmnPropertiesProvider],
          bpmnPropertiesProvider: ['type', BpmnPropertiesProvider.propertiesProvider[1]]
        },
        {
          __init__: [BpmnModules.propertiesProvider],
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
    } else {
      // Modify( CustomPropsProvider);
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
