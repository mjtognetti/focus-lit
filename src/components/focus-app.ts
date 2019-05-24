import { LitElement, html, css, customElement, unsafeCSS } from "lit-element"
import { cardDimensions } from "../logic/constants"
import * as model from "../logic/model"
import "./focus-card-spread"

@customElement("focus-app")
export default class Focus extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: relative;
        background-color: red;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr minmax(
            ${unsafeCSS(cardDimensions.width + 25)}px,
            1fr
          );
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: "Plan Plan Plan Deck" "Plan Plan Plan Deck" "Complete Discard Discard New";
        grid-gap: 1px;
      }

      .Plan {
        grid-area: Plan;
      }

      .Deck {
        grid-area: Deck;
      }

      .New {
        grid-area: New;
      }

      .Discard {
        grid-area: Discard;
      }

      .Complete {
        grid-area: Complete;
      }
    `
  }

  store: model.Store = model.emptyStore()

  constructor() {
    super()
    this.store = model.emptyStore()

    this.store.plan.push(
      model.createCard(
        {
          title: "Card 1",
          description: "Desc 1",
        },
        this.store,
      ),
    )
  }

  render() {
    return html`
      <div class="Plan">
        <focus-card-spread .cards=${this.store.plan}></focus-card-spread>
      </div>
      <div class="Deck">
        <focus-card-spread .cards=${this.store.deck}></focus-card-spread>
      </div>
      <div class="New">New Card!</div>
      <div class="Discard">Discard Area</div>
      <div class="Complete">Complete Area</div>
    `
  }
}
