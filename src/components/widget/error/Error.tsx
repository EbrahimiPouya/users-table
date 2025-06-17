interface IComponentProps{
    retry: ()=>void;
}
const Error = ( {retry} : IComponentProps) => {
    return (
        <div>
           error
            <button onClick={retry}>retry </button>
        </div>
    );
};

export default Error;
