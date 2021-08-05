/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./demo-amount-view.html', './demo-amount-viewModel', 'text!./component.json', 'css!./demo-amount-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('demo-amount', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);