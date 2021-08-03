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
define(['accUtils','knockout','demo-radio/loader'],
 function(accUtils,ko) {
    function DashboardViewModel() {
      this.metaPayTowards = [
        {
           "displayOrder":1,
           "minAmt":500,
           "conversionRate":0,
           "showOnWeb":"Y",
           "groupName":"First Group",
           "selection":"SINGLE",
           "currency":"INR",
           "fixedAmt":500,
           "payTowardsType":"First Pay Towards Type"
        },
        {
           "displayOrder":2,
           "minAmt":1000,
           "conversionRate":0,
           "showOnWeb":"Y",
           "groupName":"First Group",
           "selection":"SINGLE",
           "currency":"INR",
           "fixedAmt":1000,
           "payTowardsType":"Second Pay Towards Type"
        },
        {
           "displayOrder":3,
           "minAmt":1500,
           "conversionRate":0,
           "showOnWeb":"Y",
           "groupName":"First Group",
           "selection":"SINGLE",
           "currency":"INR",
           "fixedAmt":1500,
           "payTowardsType":"Third Pay Towards Type"
        },
        {
           "displayOrder":1,
           "minAmt":2000,
           "conversionRate":0,
           "showOnWeb":"Y",
           "groupName":"Second Group",
           "selection":"MULITPLE",
           "currency":"INR",
           "fixedAmt":2000,
           "payTowardsType":"First Pay Towards Type-Second Group"
        },
        {
           "displayOrder":2,
           "minAmt":4000,
           "conversionRate":0,
           "showOnWeb":"Y",
           "groupName":"Second Group",
           "selection":"MULITPLE",
           "currency":"INR",
           "fixedAmt":4000,
           "payTowardsType":"Second Pay Towards Type-Second Group"
        },
        {
           "displayOrder":3,
           "minAmt":1500,
           "conversionRate":0,
           "showOnWeb":"Y",
           "groupName":"Second Group",
           "selection":"MULITPLE",
           "currency":"INR",
           "fixedAmt":4000,
           "payTowardsType":"Third Pay Towards Type-Second Group"
        }
     ]

     this.metaPayTowardsSINGLE = this.metaPayTowards.filter(mt=>mt.selection === 'SINGLE');

     this.value = ko.observable();
     this.amount = ko.observable();

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
