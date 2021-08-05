/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['accUtils','knockout','demo-amount/loader','ojs/ojbutton','ojs/ojvalidationgroup'],
 function(accUtils,ko) {
    function DashboardViewModel() {
      this.metaPayTowards = [
         {
           "id": 1,
            "displayOrder":1,
            "minAmt":500,
            "conversionRate":0,
            "showOnWeb":"Y",
            "groupName":"First Group",
            "selection":"SINGLE",
            "currency":"INR",
            "fixedAmt":500,
            "payTowardsType":"First Pay Towards Type",
            "required": true
         },
         {
           "id": 2,
            "displayOrder":2,
            "minAmt":1000,
            "conversionRate":0,
            "showOnWeb":"Y",
            "groupName":"First Group",
            "selection":"SINGLE",
            "currency":"INR",
            "fixedAmt":1000,
            "payTowardsType":"Second Pay Towards Type",
            "required": true
            
         },
         {"id": 3,
            "displayOrder":3,
            "minAmt":1500,
            "conversionRate":0,
            "showOnWeb":"Y",
            "groupName":"First Group",
            "selection":"SINGLE",
            "currency":"INR",
            "fixedAmt":1500,
            "payTowardsType":"Third Pay Towards Type",
            "required": true
         },
         {
           "id": 4,
            "displayOrder":1,
            "minAmt":2000,
            "conversionRate":0,
            "showOnWeb":"Y",
            "groupName":"Second Group",
            "selection":"MULTIPLE",
            "currency":"INR",
            "fixedAmt":2000,
            "payTowardsType":"First Pay Towards Type-Second Group",
            "required": true
         },
         {
           "id": 5,
            "displayOrder":2,
            "minAmt":4000,
            "conversionRate":0,
            "showOnWeb":"Y",
            "groupName":"Second Group",
            "selection":"MULTIPLE",
            "currency":"INR",
            "fixedAmt":4000,
            "payTowardsType":"Second Pay Towards Type-Second Group",
            "required": true
         },
         {
           "id": 6,
            "displayOrder":3,
            "minAmt":1500,
            "conversionRate":0,
            "showOnWeb":"Y",
            "groupName":"Second Group",
            "selection":"MULTIPLE",
            "currency":"INR",
            "fixedAmt":4000,
            "payTowardsType":"Third Pay Towards Type-Second Group",
            "required": true
         }
      ]

     this.value = ko.observable();
     this.amount = ko.observable();
      this.handleValidate = () => {
        const el = document.getElementById('validate')
const valid = el.getProperty('valid')
if(valid !== 'valid'){
el.showMessages()
}
      }
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
