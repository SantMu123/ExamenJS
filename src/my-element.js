import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

export class MyElement extends LitElement {
  static get properties() {
    
  }

  constructor() {
    super()
    
  }

  render() {
    return html`
      <section>
        <my-side-bar></my-side-bar>
      </section>
      <section>
        <my-side-bar></my-side-bar>
      </section>
      
    `
  }

  static get styles() {
    return css`
      
    `
  }
}

window.customElements.define('my-element', MyElement)


export class MySideBar extends {
  static get properties() {
    
  }

  constructor() {
    super()
    
  }

  render() {
    return html`
      
    `
  }

  static get styles() {
    return css`
      
    `
  }

}

window.customElements.define('my-side-bar', MySideBar)