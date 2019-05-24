import {
  LitElement,
  html,
  css,
  unsafeCSS,
  property,
  customElement,
} from "lit-element"
import { cardDimensions } from "../logic/constants"
import * as model from "../logic/model"

@customElement("focus-card")
export default class Card extends LitElement {
  draggable = true

  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: block;
        padding: 10px;
        background-color: #e7e7e7;
        width: ${unsafeCSS(cardDimensions.width)}px;
        height: ${unsafeCSS(cardDimensions.height)}px;
      }

      h1 {
        margin-bottom: 5px;
        font-size: 16px;
      }

      p {
      }
    `
  }

  @property({ type: Object })
  card: model.Card

  constructor() {
    super()
    ;(this as any).addEventListener("dragstart", this.onDragStart)
  }

  onDragStart(event: any) {
    console.log("drag start")
    event.dataTransfer.setData("text/plain", this.card.id)
  }

  render() {
    return html`
      <h1>${this.card.title}</h1>
      <p>${this.card.description}</p>
    `
  }
}
