import React from 'react';
import './index.css';

class AddBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopUp: false
        };
    }

    togglePopUp() {
        this.setState({
            showPopUp: !this.state.showPopUp
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.togglePopUp.bind(this)}><i class="fas fa-plus"></i></button>
            </div>
        );
    }
}

export default AddBtn;