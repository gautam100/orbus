
const Wrapper = ({children,color='red'}) => {
    return (
        <div style={{color:color, border:'1px solid #000, padding: 20px, margin:20px'}}>
            {children}
        </div>
    );
}

export default Wrapper;