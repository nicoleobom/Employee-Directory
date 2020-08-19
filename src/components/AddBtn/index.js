import React from 'react';
import './index.css';
import Popup from '../Popup/index';

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

                {this.state.showPopUp ? 
                <Popup 
                    text='The "Add Employee" feature is currently unavailable.'
                    closePopup={this.togglePopUp.bind(this)}
                />
                : null
            }
            </div>
        );
    }
}

export default AddBtn;