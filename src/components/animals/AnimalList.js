import React, { Component } from 'react'

class AnimalList extends Component {
    render() {

        // CHALLENGE ATTEMPT:
        // {console.log(this.props.employees)}
    //    console.log(this.props.animals)
    //     return (
    //         <section className="animals">
    //         {
    //             this.props.animals.map(animal =>
    //                 this.props.owners.map(owner =>
    //                 <section key={animal.animalId++}>
    //                     <h1>{owner.name}</h1>
    //                 </section>
    //                 ))
    //         }
    //         </section>
    //     )
    // }

    return (
        <section className="animals">
        {
            this.props.animals.map(animal =>
                <section key={animal.id}>
                <h1>{animal.name}</h1>
                </section>
                )
        }
        </section>
    )
}
}
export default AnimalList
