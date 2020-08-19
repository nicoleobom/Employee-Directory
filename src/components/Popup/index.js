import React from 'react';
import './index.css';

class Popup extends React.Component {
    render() {  
        return (  
            <div className='popup'>  
                <div className='popup\_inner'>  
                    <p id="error">{this.props.text}</p>  
                    <button id="close" onClick={this.props.closePopup}>X</button>  
                </div>  
            </div>  
        );  
        }  
}

export default Popup;