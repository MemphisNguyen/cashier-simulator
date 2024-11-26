type FolderMenuData = {
  type: 'folder',
  name: string,
  image?: string,
  children: MenuData[]
}
type VariationOption = { name: string, price: number }
type Variation = {
  name: string,
  options: VariationOption[],
  required: boolean
}
type ItemMenuData = {
  type: 'item',
  name: string,
  image?: string,
  price: number,
  variations: Variation[]
}
type MenuData = FolderMenuData | ItemMenuData
type MenuItem = {
  name: string
  image?: string
  price: number
}
type BillItem = MenuItem & {
  qty: number
  variation?: string[]
  note?: string
}

type QuickAccessGroup = (MenuItem & { highlight?: boolean })[]
type QuickAccessData = QuickAccessGroup[]

type TableData = {
  tableName: string,
  customerName: string,
  itemList: Record<string, BillItem>,
}

type ReceiptData = {
  receiptNumber: string,
  itemList: BillItem[],
  cash: number,
  voucher: number,
  eftpos: number,
  change: number,
}