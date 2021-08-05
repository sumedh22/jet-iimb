/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./demo-checkbox-view.html', './demo-checkbox-viewModel', 'text!./component.json', 'css!./demo-checkbox-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('demo-checkbox', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);