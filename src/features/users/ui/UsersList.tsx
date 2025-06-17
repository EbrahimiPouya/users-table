import {useUsers} from "../api/useUsers.ts";
import DataTable from "../../../components/widget/table/DataTable.tsx";
import type {IColType} from "../../../components/widget/table/Table.tsx";
import type {UserType} from "../types/userType.ts";

const UsersList = () => {

    const {data , error , isLoading, getUsers} = useUsers();

    return (
            <DataTable  columns={columns} data={data} isLoading={isLoading} error={error} retry={getUsers}/>
    );
};

export default UsersList;

const columns : IColType<UserType>[] = [
    {
        title: 'نام کاربری',
        field: 'username',
        className: '',
        render: (row)=>{
         return row.username
        }
    },
    {
        title: 'نام',
        field: 'firstName',
        className: '',
        render: (row)=>{
         return row.firstName
        }
    },
    {
        title: 'نام خانوادگی',
        field: 'lastName',
        className: '',
        render: (row)=>{
         return row.lastName
        }
    },
    {
        title: 'سن',
        field: 'age',
        className: '',
        render: (row)=>{
         return row.age
        }
    },
    {
        title: 'عملیات',
        field: 'actions',
        className: '',
        render: ()=>{
         return <select>
             <option value={'show'}>مشاهده</option>
             <option value={'delete'}>حذف</option>
         </select>
        }
    },
]
