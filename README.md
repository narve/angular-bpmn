# Angular BPMN Sample project

This is a simple project demonstrating how to integrate Angular (5) with the BPMN-JS components. It is the 
start of a rewrite of my previous project integrating Angular2 with BPMN-JS: https://github.com/narve/ang2-bpmnjs 

The previous project was created in an ancient period when Angular2 was still hot, 
and suffered from several problems, 
chief among them the complicated setup (lots of webpack configuration) and difficulty of upgrading components.  

This time around I wanted to use the Angular CLI and as many defaults, standards and conventions as possible. 

NB: This project is not affiliated with / created by / endorsed by (etc) Camunda/BPMN.IO or anybody but myself. 


# Feedback

Feedback is welcome, as issues, pull requests, comments, whatever. 


# Documentation

The documentation is kept to a bare minimum in order to avoid out-of-date information. 
Especially Angular is a moving target. See the `docs` folder for the small amount of documentation there is. 
Otherwise, consult the documentation for Typescript/Angular/AngularCLI/BPMN-JS. Remember to check that 
you are viewing the correct version!
 
To run this project: 
 
    git clone git@github.com:narve/angular-bpmn.git
    cd angular-bpmn
    npm install -g @angular/cli
    npm install
    ng serve 
    
Then look at http://localhost:4200
    

# Features / Status

- Angular CLI based project (see `docs` and `package.json` for exact versions).
- Async loading of a sample BPMN diagram
- Properties panel
- Custom properties
- Surprisingly little actual code
- Hopefully usable as a template / inspiration for actual production use
- Hopefully as future-proof as any front-end code can be these days
 
