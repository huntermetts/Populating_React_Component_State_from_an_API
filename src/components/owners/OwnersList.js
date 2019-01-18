import React, { Component } from 'react'

class OwnersList extends Component {
    render() {
        // {console.log(this.props.employees)}
    //    console.log(this.props.locations)
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <section key={owner.id}>
                        <h1>{owner.name}</h1>
                        <p>{owner.phone}</p>
                    </section>

                )
            }
            </section>
        )
    }
}
export default OwnersList