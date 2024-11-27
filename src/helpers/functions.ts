export function getBillItemId(item: BillItem) {
  return [item.name, ...(item.variation ?? [])].join('|')
}