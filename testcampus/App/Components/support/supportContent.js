export class SupportContent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = /* html */`
          <style rel="stylesheet">
              @import "./App/Components/support/supportStyle.css";
          </style>
          <div class="first-message">
          <h1>Preguntas mas frecuentes</h1>
          </div>
          <div class="homepage">
          <p> ¿Qué servicios ofrece campus?</p>
          </div>
          <div class="homepage">
          <p> ¿Estos servicios y zonas manejan algun tipo de horario?, y si es así ¿Cómo se distribuye?</p>
          </div>
          <div class="homepage">
          <p> ¿Puedo usar o solicitar estos servicios en cualquier momento?</p>
          </div>
          `;
      }
}     
customElements.define("support-content", SupportContent);