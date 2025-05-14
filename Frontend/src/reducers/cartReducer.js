export default function cartReducer(state, action) {
  if (action.type == "ADD_ITEM") {
    const updatedItems = [...state.items];

    updatedItems.push({ ...action.item, quantity: 1 }); // title, id, price, quantity

    return { ...state, items: updatedItems }; //items, items: güncellenenler öncekileri ezer.
  }

  if (action.type == "REMOVE_ITEM") {
  }
  return state;
}
