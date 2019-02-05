class RatingComponent extends HTMLElement {
    static get observedAttributes() { return ['value']; }

    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'rate');

        const styleLink = document.createElement('link');
        styleLink.setAttribute('rel', 'stylesheet');
        styleLink.setAttribute('href', 'components/rating/rating-component.css');

        for (let i = 5; i > 0 ; i--) {
            let value = i;
            let id = `radio${value}`;
            let input = document.createElement('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('id', id);
            input.setAttribute('name', 'rating');
            input.setAttribute('value', value);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.textContent = `${value} star(s)`;

            wrapper.appendChild(input);
            wrapper.appendChild(label);
        }

        this.shadow.appendChild(styleLink);
        this.shadow.appendChild(wrapper);
    }

    updateValue() {
        const value = this.getAttribute('value');
        const input = this.shadow.getElementById(`radio${value}`);

        if (input) {
            input.setAttribute('checked', true);
        }
    }

    connectedCallback() {
        this.updateValue();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateValue();
    }
}

customElements.define('rating-component', RatingComponent);