import React, { Component } from 'react'

import './index.css'

export class Album extends Component {
    constructor (props){
        super(props);
        this.state = {
            albums : []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data =>this.setState({
            albums : data
        }))
        .catch(err => console.log(err))
        console.log(this.state.albums)
    }

    render() {
        return (
            <div className = 'albumlist'>
                {
                    this.state.albums.map((data)=>{
                        return(
                        <article id = {data.id}>
                            <img src = {data.thumbnailUrl} />
                            <p>{data.title}</p>
                        </article>
                        )
                      })
                }
            </div>
        )
    }
}

export default Album
