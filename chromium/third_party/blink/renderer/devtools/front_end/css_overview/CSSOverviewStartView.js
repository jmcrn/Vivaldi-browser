// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @unrestricted
 */
CssOverview.CSSOverviewStartView = class extends UI.Widget {
  constructor(controller) {
    super();
    this.registerRequiredCSS('css_overview/cssOverviewStartView.css');

    this._controller = controller;
    this._render();
  }

  _render() {
    const startButton = UI.createTextButton(
        ls`Capture overview`, () => this._controller.dispatchEventToListeners(CssOverview.Events.RequestOverviewStart),
        '', true /* primary */);

    this.setDefaultFocusedElement(startButton);

    const fragment = UI.Fragment.build`
      <div class="vbox overview-start-view">
        <h1>${ls`CSS Overview`}</h1>
        <div>${startButton}</div>
      </div>
    `;

    this.contentElement.appendChild(fragment.element());
    this.contentElement.style.overflow = 'auto';
  }
};
