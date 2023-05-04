import { createColumnHelper } from "@tanstack/react-table";
import { IUser } from "../../../interfaces";

const columnHelper = createColumnHelper<IUser>();

export const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.address, {
    id: "address",
    cell: (info) => {
      const { city, street, zipcode } = info.getValue();
      return <span>{`${street}, ${city}, ${zipcode}`}</span>;
    },
    header: () => <span>Address</span>,
    footer: (info) => info.column.id,
  }),
];
