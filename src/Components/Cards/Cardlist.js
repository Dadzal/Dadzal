import Card from './Card';

function Cardlist({list}){
    return(
        <section>
            {list.map((item, i)=> {
                return <Card myaddress={item.addressName} country={item.country} key={i} />
            })}
        </section>
    )
}

export default Cardlist;
