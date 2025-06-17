import  {type ReactNode} from "react";
import * as React from "react";

interface IComponentProps<T> {
    columns: IColType<T>[];
    data: T[];
    onRowClick: (row: T) => void;
    RenderSort: (col: IColType<T>) => ReactNode;
}

function Table <T>({columns, data, onRowClick, RenderSort }: IComponentProps<T>) {

    const handleRowClick = (
        rowIndex: number,
        event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
    ) => {
            const clickedElement = event.target as HTMLElement;
            const clickedCell = clickedElement.closest("td");
            if (
                clickedCell &&
                (clickedCell.parentElement as HTMLTableRowElement).rowIndex === rowIndex + 1
            ) {
                onRowClick(data[rowIndex]);
            }
    };

    return (
        <table>
            <thead>
            <tr>
            {columns.map(col => {
                return (
                    <th key={col.field} className={`${col.className}`}>
                        {col.title}
                        {col.sort && RenderSort ? RenderSort(col) : undefined}
                    </th>
                );
            })}
            </tr>
            </thead>
            <tbody>
            {data.map((dataItem, index) => {
                return (
                    <tr
                        key={`${dataItem}`}
                        onClick={e => {
                            e.stopPropagation();
                            handleRowClick(index, e);
                        }}
                        >
                        {columns.map(colItem => {
                            return (
                                <td
                                    key={colItem.field}
                                >
                                    {colItem.render(dataItem)}
                                </td>
                            );
                        })}
                    </tr>)}
            )}
            </tbody>
        </table>
    );
};

export default Table;

export interface IColType<T> {
    field: string;
    title: string;
    render: (data: T) => ReactNode;
    className?: string;
    sort?: boolean;
}
