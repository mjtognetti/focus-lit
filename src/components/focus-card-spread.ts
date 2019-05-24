import {
  LitElement,
  html,
  css,
  unsafeCSS,
  property,
  customElement,
} from "lit-element"
import { cardDimensions } from "../logic/constants"
import "./focus-card"
import { Card } from "../logic/model"

@customElement("focus-card-spread")
export default class CardSpread extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: relative;
        padding: 10px;
        background-color: blue;
        display: grid;
        grid-template-columns: repeat(
          auto-fill,
          ${unsafeCSS(cardDimensions.width)}px
        );
        grid-gap: 10px;
        justify-content: center;
        overflow-y: auto;
      }
    `
  }

  @property({ type: Object })
  cards: Card[] = []

  constructor() {
    super()
    ;(this as any).addEventListener("dragover", this.onDragOver)
    ;(this as any).addEventListener("drop", this.onDrop)
  }

  onDragOver(event: any) {
    event.preventDefault()
  }

  onDrop(event: any) {
    event.preventDefault()
    const card = event.dataTransfer.getData("text/plain")
    this.cards = [card, ...this.cards]
  }

  render() {
    return html`
      ${this.cards.map(
        card =>
          html`
            <focus-card .card=${card}></focus-card>
          `,
      )}
    `
  }
}
