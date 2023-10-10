export const findAndReplace = <TItem extends { id: string }>(item: TItem, items: TItem[]) => {
  // Map through the items
  return items.map((existingItem) => {
    // If the id matches, replace the item, otherwise return the existing item
    return existingItem.id === item.id ? item : existingItem
  })
}
