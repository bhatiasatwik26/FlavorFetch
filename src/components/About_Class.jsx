import React from "react";

class About_Class extends React.Component{
    constructor(props){
        super(props);

        // creating state variable
        this.state = { // state is an ----------> object📦
            count : 15,
            // more state variables should be added here...
        }
        // IMPORTANT
        // never do this as it will overwrite the previous state object 👇🏻
        // this.state = {                           
        //     Number : 201,
        // }

    }
    // to update the state object, use setState() method

    //eg:
    // this.setState({count : 20}); ❗❕❗❕

    // eg:
    // async componentDidMount(){
    // const data = await fetch('API_URL');
    // const dataJson = await data.json();
    // this.setState({count : dataJson.});
    // }

    render(){
        const {location} = this.props;
        return (
            <div className="about-container">
                <div className="left">
                <div>
                <h2> Dear {location},</h2>
                <h2> confused about What to order?</h2>
                </div>
                <h4>Dont worry, we got you...😉</h4>
                <div>
                <p>List of {this.state.count}+ handpicked , top rated restaurants for you to choose from</p>
                <p>Additional filters to further filter out top rated takeaway centres</p>
                <p>Search your favourite restaurant by name if it gets a place in our list👀</p>
                </div>
                </div>
                <div className="right">
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        )
    }
}
export default About_Class;