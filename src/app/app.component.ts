import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//
import * as BpmnJS from 'bpmn-js/lib/Modeler.js';
import * as panelModule from 'bpmn-js-properties-panel';
import * as providerModule from 'bpmn-js-properties-panel/lib/provider/bpmn';
// import * as providerModule from 'bpmn-js-properties-panel/lib/provider/camunda';
// import * as data from 'camunda-bpmn-moddle/resources/camunda.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  viewer: BpmnJS;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.viewer = new BpmnJS({
      container: '#canvas',
      width: '100%',
      height: '600px',
      additionalModules: [
        panelModule,
        providerModule
      ],
      propertiesPanel: {
        parent: '#properties'
      },
      moddleExtensions: {
        // camunda: data
      }
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  load(): void {
    // const url = 'https://raw.githubusercontent.com/bpmn-io/bpmn-js/master/resources/initial.bpmn';
    const url = '/assets/bpmn/initial.bpmn';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    })
      .subscribe(
        (x: any) => {
          console.log('got something: ', x);
          this.viewer.importXML(x, this.handleError);
        },
        this.handleError
      );
  }
}
