import PropTypes from 'prop-types'

 function Card(props) {

    const {department = "WEB DEVELOPMENT", venue = "MUFAKOSE HUB",details = "monthly goals and aob", time = `09:00`, } = props
   
    
    return (
        <div className="col-md-4 ">
            <div className="card ">
                <div className="card-body">
                    <h5 className="card-title">
                        {department}
                    </h5>
                    <p className="card-text">
                        {details}
                    </p>
                    <div className="card-footer">
                        {venue}
                        <br></br>
                        <span className="time">
                            {time}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
	department: PropTypes.string,
	venue: PropTypes.string,
    time: PropTypes.string,
	details: PropTypes.string
};

export default Card;