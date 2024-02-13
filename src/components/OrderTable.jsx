import { flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table"
import { columnDef } from "../utils/Column"
import orderData from "../utils/data.json"
import { useMemo } from "react"

const OrderTable = () => {

    const tableData = useMemo(()=> orderData, [])

    const tableColumn = useMemo(()=> columnDef, [])

    const tableInstance = useReactTable({
        columns: tableColumn,
        data: tableData,
        getCoreRowModel: getCoreRowModel()
    })

  return (
    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
                {tableInstance.getHeaderGroups().map((headerEl)=> {
                    return <tr key={headerEl.id}>
                        {headerEl.headers.map(columnEl=> {
                            return <th key={columnEl.id} scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                {flexRender(
                                    columnEl.column.columnDef.header,
                                    columnEl.getContext()
                                )}
                            </th>
                        })}
                    </tr>
                })}
            </thead>
            <tbody>
                {tableInstance.getRowModel().rows.map((rowEl)=> {
                    return(
                        <tr key={rowEl.id}>
                            {rowEl.getVisibleCells().map((cellEl)=>{
                                return(
                                    <td key={cellEl.id}>
                                        {flexRender(
                                            cellEl.column.columnDef.cell,
                                            cellEl.getContext()
                                        )}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>

    </div>
    </div>
  )
}

export default OrderTable
