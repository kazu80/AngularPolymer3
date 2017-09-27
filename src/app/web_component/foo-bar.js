let listboxTemplate = document.createElement('template');

listboxTemplate.innerHTML = `
<style></style>
<div>Hello WebComponent</div>
`.trim();

ShadyCSS.prepareTemplate(listboxTemplate, 'dash-listbox');

export class FooBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
}

window.customElements.define('foo-bar', FooBar);