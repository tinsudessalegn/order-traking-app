
import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper()

export const columnDef = [
  // columnHelper.accessor("_id",{
  //   header: "ID"
  // }),
  {
    accessorFn: (row) => `${row.company_logo} ${row.transaction_id} ${row.reference_no} ${row.company_name}`,
    header: 'Transaction'
  },
  {
    accessorFn: (row) => `${row.from_place} ${row.from}`,
    header: "From"
  },
  {
    accessorFn: (row) => `${row.to_place} ${row.to}`,
    header: "To"
  },
  {
    accessorKey: 'shipment_date',
    header: "Shipment Date"
  },
  {
    accessorKey: 'price',
    header: "Price"
  },
  {
    accessorKey: 'pickup_status',
    header: "Pickup Status"
  },
  {
    accessorKey: 'status',
    header: "Status"
  }

]