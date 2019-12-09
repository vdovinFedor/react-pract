import React from 'react';

export default class Slider extends React.Component {
    render() {
        console.log(this.props.urls);
        return (
            <React.Fragment>
                {this.props.urls === [] ? <h1>Loading ...</h1> :  this.props.urls.map((el)=>{
                    return (
                        <React.Fragment>
                            <img className='img' src={el.src} key={el.id} alt="Curiosity Photo" />
                        </React.Fragment>
                    )})}

            </React.Fragment>
        )
    }
}
