const User = (data) => {
    console.log(data)
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