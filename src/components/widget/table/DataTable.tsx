import Table, {type IColType} from "./Table.tsx";
import Loading from "../loading/Loading.tsx";
import Error from "../error/Error.tsx";

interface IComponentProps<T>{
    data?: T[];
    columns: IColType<T>[];
    isLoading: boolean;
    error: boolean;
    retry: ()=>void;
}
function DataTable<T> ({data, isLoading, error, retry, columns}: IComponentProps<T>) {
    return (
        <div>
            {isLoading && <Loading/>}

            {error && <Error retry={retry}/>}

            {data && <Table data={data} columns={columns} onRowClick={()=>{}} RenderSort={()=><div></div>} />}
        </div>
    );
};

export default DataTable;
