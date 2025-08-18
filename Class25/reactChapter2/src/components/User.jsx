const User = (data) => {
    return (
        <div>
            <p>
                Name: {data.name} <br />
                Age: {data.age}
            </p>
        </div>
    );
};

export default User;