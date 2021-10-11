import React from 'react';

 function Card() {

    const department = "WEB DEVELOPMENT";
    const venue = "MUFAKOSE HUB";
    const details = "monthly goals and aob";
    const time = `09:00`
    
    return (
        <div className="col-md-6 ">
            <div className="card ">
                <div class="card-body">
                    <h5 class="card-title">
                        {department}
                    </h5>
                    <p class="card-text">
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


export default Card;