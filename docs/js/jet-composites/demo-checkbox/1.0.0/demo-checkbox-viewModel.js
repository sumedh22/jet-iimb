/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
    ['knockout', 'ojL10n!./resources/nls/demo-checkbox-strings', 'ojs/ojcontext', 'ojs/ojknockout','ojs/ojcheckboxset'], function (ko, componentStrings, Context) {
    
    function ExampleComponentModel(context) {
        var self = this;
        //At the start of your viewModel constructor
        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

          self.amount = ko.observable()
          self.showMessage = ko.observable(false)
          self.groupValid = ko.observable();
          self.amount.subscribe(val => {
            self.properties.setProperty('amount', val)
          })
        self.properties = context.properties;
        self.res = componentStrings['demo-checkbox'];
        self.data = ko.observableArray(self.properties.options.map(op=>({value: ko.observableArray(), amount: ko.observable(op.fixedAmt)})));
        self.data().forEach(el => {
          el.value.subscribe(e=>{
            const varr = self.data().filter(v=>v.value().length > 0).map(v=>v.amount())
            const sum = varr.length > 0 ? varr.reduce((acc, curr)=>acc + curr):0
            self.amount(sum)
            self.properties.setProperty('selectedId', self.data().filter(v=>v.value().length > 0).map(v=>v.value()[0]))
          })

          el.amount.subscribe(e=> {
            const sum = self.data().filter(v=>v.value().length > 0).map(v=>v.amount()).reduce((acc, curr)=>acc + curr,0)
            self.amount(sum)
          })
        });
        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
        self.validate((this.properties.selectedId || []).length === 0)

        self.showMessages = function(){
          self.showMessage(true)
          self.validate((this.properties.selectedId || []).length === 0)
        };
        self.groupValid.subscribe(v=>{
          if(v!== 'valid'){
            this.properties.setProperty('valid',v)
          }
        })
        

    };
    ExampleComponentModel.prototype.validate = function(value){
      this.properties.setProperty('valid','pending')
          if(this.properties.required && value){
            this.properties.setProperty('valid', this.showMessage() ?'invalidShown': 'invalidHidden')
          }
          this.properties.setProperty('valid',this.groupValid())
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

    ExampleComponentModel.prototype.propertyChanged = function(ctx){
      if(ctx.property === 'selectedId'){
        this.validate(ctx.value.length === 0)
      }
    };
    return ExampleComponentModel;
});
