interface IComponentProps{
    children: string;
}

const Label = ({children} : IComponentProps) => {
    return (
        <label>
            {children}
        </label>
    );
};

export default Label;
