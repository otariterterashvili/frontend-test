import React from "react";
import { IUser } from "../../interfaces";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./Column/UserColumn";
import { Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type Props = {
  data: IUser[];
};

const UserTable = (props: Props) => {
  const table = useReactTable({
    data: props.data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    
  });
  const navigate = useNavigate()
  const onClickRow = (id: number) => {
    navigate(`/posts/${id}`)
  }
  return (
    <Table striped highlightOnHover withBorder withColumnBorders mt="xl">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id} onClick={() => onClickRow(cell.row.original.id)}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
