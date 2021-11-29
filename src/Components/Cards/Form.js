

function Form({address, setAddress,country, setCountry, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="address" value={address} onChange={(event)=> setAddress(event.target.value)}/>
            <input type="text" placeholder="country" value={country} onChange={event => setCountry(event.target.value)} />
            <button type="submit">submit</button>
        </form>
    )
}

export default Form
