/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
    ['knockout', 'ojL10n!./resources/nls/demo-radio-strings', 'ojs/ojcontext', 'ojs/ojknockout','ojs/ojradioset','ojs/ojinputnumber'], function (ko, componentStrings, Context) {
    
    function RadioComponentModel(context) {
        var self = this;
        
        //At the start of your viewModel constructor
        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);
        self.composite = context.element;
          self.value = ko.observable()
          self.amount = ko.observable()
          self.showMessage = ko.observable(false)
        self.groupValid = ko.observable();
          self.value.subscribe(val=>{
            self.amount(self.properties.options.find(op=>op.id === val).fixedAmt)
            self.properties.setProperty('selectedId', val)
          })
          self.amount.subscribe(val => {
            self.properties.setProperty('amount', val)
          })
        self.properties = context.properties;
        // self.data = ko.observable( self.properties.options.map(op=>({value: op.fixedAmt})))
        self.res = componentStrings['demo-radio'];

        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();

        self.handleRadioSelection = function(_, row) {
          self.value(row.data.id)
      }

      self.validate(!this.properties.selectedId)
      self.showMessages = function(){
        self.showMessage(true)
        self.validate(!this.properties.selectedId)
        
      };

      self.groupValid.subscribe(v=>{
        if(v!== 'valid'){
          this.properties.setProperty('valid',v)
        }
      })
    };

    RadioComponentModel.prototype.validate = function(value){
      this.properties.setProperty('valid','pending')
          if(this.properties.required && value){
            this.properties.setProperty('valid', this.showMessage() ?'invalidShown': 'invalidHidden')
          }else{
            this.properties.setProperty('valid',this.groupValid())
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

    RadioComponentModel.prototype.propertyChanged = function(ctx){
      if(ctx.property === 'selectedId'){
        this.validate(!ctx.value)
      }
    };

    return RadioComponentModel;
});
