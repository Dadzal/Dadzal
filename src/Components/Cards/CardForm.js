import React from 'react'
import PropTypes from 'prop-types'

class CardForm extends React.Component {

    constructor(){
        super();
        this.state ={
            department:"",
            venue:"",
            time:"",
            details:"",
        };
    }

    setDepartment(e) {
        this.setState({ department: e.target.value });
    }
    setVenue(e) {
        this.setState({ venue: e.target.value });
    }

    setTime(e) {
        this.setState({ time: e.target.value });
    }

    setDetails(e) {
        this.setState({ details: e.target.value });
    }

    

    render(){
        
        return (
            <form className="form-group " onSubmit={this.addCard}>
                <label className="control-label" >Department:
                    <input type="text" className="form-control" value={this.state.department} onChange={e => this.setDepartment(e)}/>
                </label>
                <label className="control-label" >Venue:
                    <input type="text" className="form-control" value={this.state.venue} onChange={e => this.setVenue(e)}/>
                </label>
                <label className="control-label" >Time:
                    <input type="text" className="form-control" value={this.state.time} onChange={e => this.setTime(e)}/>
                </label>
                <label className="control-label" >Details:
                    <input type="text" className="form-control" value={this.state.details} onChange={e => this.setDetails(e)}/>
                </label>
                <button type="submit" className="btn">Add Meeting</button>
            </form>
        )
    }
}
CardForm.propTypes = {addCard:PropTypes.func.isRequired};
export default CardForm


///jnnhjjmpkkpkpok[po]