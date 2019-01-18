import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        // {console.log(this.props.employees)}
    //    console.log(this.props.employees)
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <h1 key={employee.id}>
                        {employee.name}
                    </h1>
                )
            }
            </section>
        )
    }
}
export default EmployeeList