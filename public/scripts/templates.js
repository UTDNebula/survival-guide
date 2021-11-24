/*
  templates.js: The goal of this file is to automatically convert <template> tags into usable web components
  Features:
    Define tag just from an id eg. if you write <template id="my-tag"><p>...</p></template> then you can later use <my-tag></my-tag>
    Allow for slotting: the ability to insert content inside a template
      <slot> tags are defined only as descendants of shadow trees, but we want to avoid shadow trees here, so we mimic the functionality ourselves
      eg. <template id='new-tag'><p>First</p><slot name="e"></slot><slot></slot></template> -> <new-tag><p>Third</p><p slot="e">Second</p></new-tag>
    Allow for inner attribute setting
      Defined with a string that goes t-<descendant tag name>-<attribute>="value" eg. t-sorter-placeholder="Hello world"
      eg. <template id="last-tag"><input type="text" name="fizz"></template> -> <last-tag t-fizz-value="Default text"></last-tag>

  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
  https://developer.mozilla.org/en-US/docs/Web/Web_Components
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
*/

// select one element eg. $("body"), $("#title"), etc
// by default, search entire document for element,
//   but if two arguments specified, use first as base eg. $(myelem, "#subelement")
function $(arg1, arg2) {
  const element = arg2 ? arg1 : document;
  const query = arg2 ?? arg1;
  return element.querySelector(query);
}

// select multiple elements eg. $$("div"), $$(".list-disc"), $$(myelem, "div"), etc
function $$(arg1, arg2) {
  const element = arg2 ? arg1 : document;
  const query = arg2 ?? arg1;
  return [...element.querySelectorAll(query)];
}

// For each attribute of template, if attribute begins with "t-" (indicating a custom template attribute),
//   find the descendant it refers to and set its value
function setattributes() {
  [...this.attributes].forEach(attr => {
    if (attr.name.startsWith("t-")) {
      const arr = attr.name.split("-");
      $(this, `[name=${arr[1]}]`)?.setAttribute(arr[2], attr.value);
    }
  });
}

// For each child of template, assign it the appropriate slot given its slot attribute (or lack thereof)
function setslots(element) {
  const slotname = element.getAttribute("slot");
  $(this, slotname ? `slot[name=${slotname}]` : "slot:not([name])")?.appendChild(element);
};

// For each template defined in html...
$$("template").forEach(template => {
  // Define a new element...
  class TemplateElement extends HTMLElement {
    connectedCallback() {
      // Only call connectedCallback if it has not already been called: avoid duplication
      if (!this.connected) {
        this.connected = true;

        // Sometimes children and attributes are available to set immediately, in which case do so:
        const children = [...this.children];
        this.appendChild(template.content.cloneNode(true));
        children.forEach(setslots.bind(this));
        setattributes.call(this);

        // Sometimes children don't come until later, in which case set an observer to wait for their arrival:
        if ($$(this, "slot").length) {
          new MutationObserver((changes, observer) => {
            changes.forEach(change => change.addedNodes.forEach(setslots.bind(this)));
            setattributes.call(this);
            // And then kill the observer once it has finished its job:
            observer.disconnect();
          }).observe(this, {childList: true});
        }
      }
    }
  }
  // and finally, use customElements to define it
  customElements.define(template.getAttribute("id"), TemplateElement);
});
