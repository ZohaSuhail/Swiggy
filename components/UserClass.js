import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo:{
                name:"Dummy",
                location:"default",
            }
        };

    }
    async componentDidMount() {
        const data = await fetch(" https://api.github.com/users/ZohaSuhail");
        const json = await data.json();

        this.setState({
            userInfo:json,
        
        })
        console.log(json);
    }

    render() {
        //const { name, location } = this.props;

        const{login,id}=this.state.userInfo;

        return (
            <div className="user-card">

                <h2>Name:{login}</h2>
                <h3>Location:{id}</h3>

             </div>
        )
    }
}
export default UserClass;