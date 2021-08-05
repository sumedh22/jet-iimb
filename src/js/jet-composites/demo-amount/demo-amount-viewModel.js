/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
  ['knockout', 'ojL10n!./resources/nls/demo-amount-strings', 'ojs/ojcontext', 'ojs/ojknockout', 'demo-radio/loader', 'demo-checkbox/loader', 'ojs/ojvalidationgroup', 'ojs/ojformlayout'], function (ko, componentStrings, Context) {
    const transform = (array) => Object.values(array.reduce((acc, curr) => {
      if (acc[curr.groupName]) {
        acc[curr.groupName].options.push(curr); return acc
      };
      acc[curr.groupName] = { required: curr.required, options: [curr], selection: curr.selection, amount: 0, selectedId: null, name: curr.groupName }; return acc
    }, {}))
    function ExampleComponentModel(context) {
      var self = this;
      self.validationId = context.uniqueId;
      //At the start of your viewModel constructor
      var busyContext = Context.getContext(context.element).getBusyContext();
      var options = { "description": "Web Component Startup - Waiting for data" };
      self.busyResolve = busyContext.addBusyState(options);
      self.properties = context.properties;
      self.groups = ko.observableArray(transform(self.properties.meta));
      self.total = ko.observable()
      self.selectedIds = ko.observable()

      self.total.subscribe(value => {
        self.properties.setProperty('amount', value)
      })
      self.selectedIds.subscribe(value => {
        self.properties.setProperty('selectedId', value)
      })
      self.handleChange = () => {
        const amts = self.groups().map(gr => {
          const el = document.getElementById(gr.name + (gr.selection === 'SINGLE' ? '-radio' : '-checkbox'))

          return {
            selectedIds: el?.getProperty('selectedId'),
            amount: el?.getProperty('amount')
          }

        })
        self.total(amts.reduce((acc, curr) => { acc += curr.amount; return acc }, 0))
        self.selectedIds(amts.reduce((acc, curr) => {
          return acc.concat(curr.selectedIds)
        }, []))
      }
      self.composite = context.element;
      self.busyResolve();

      self.showMessages = function () {
        document.getElementById(self.validationId).showMessages();
      }
    };

    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnected = function(context){
    //};

    ExampleComponentModel.prototype.propertyChanged = function (context) {
      if (context.property === 'meta' && context.updatedFrom !== 'internal') {
        this.groups(transform(context.value))
      }
    };

    return ExampleComponentModel;
  });
