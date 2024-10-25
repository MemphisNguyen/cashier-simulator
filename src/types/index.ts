type FolderMenuData = {
  type: 'folder',
  name: string,
  image?: string,
  children: MenuData[]
}
type ItemMenuData = {
  type: 'item',
  name: string,
  image?: string,
  price: number,
}
type MenuData = FolderMenuData | ItemMenuData
type MenuItem = {
  name: string
  price: number
}
type BillItem = MenuItem & {
  qty: number
  note?: string
}

type QuickAccessGroup = (MenuItem & { highlight?: boolean })[]
type QuickAccessData = QuickAccessGroup[]

type TableData = {
  tableName: string,
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