let nextId = 1

export interface Card {
  id: number
  title: string
  description: string
}

export interface Store {
  cards: { [k: number]: Card }
  plan: Card[]
  deck: Card[]
}

export function emptyStore(): Store {
  return {
    cards: {},
    plan: [],
    deck: [],
  }
}

export function createCard(
  { title, description }: { title: string; description: string },
  store: Store,
) {
  const card = {
    id: nextId++,
    title: title,
    description: description,
  }
  store.cards[card.id] = card
  return card
}

export function getCard(id: number, store: Store) {
  return store.cards[id]
}
