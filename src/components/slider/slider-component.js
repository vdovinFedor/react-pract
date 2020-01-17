import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickedIndex: 0,
            isOpen: false,
            isMin: true
        };
    }
    render() {

        const { isOpen } = this.state;
        const newArrPhoto = this.props.urls.map((el) =>el.src);
        return (
            <React.Fragment>
                {!isOpen && (<React.Fragment>
                    <img onClick={()=>this.setState({ isOpen: true, clickedIndex: 0 })} className='img' src={newArrPhoto[0]} alt="Curiosity Photo" />
                    <img onClick={()=>this.setState({ isOpen: true, clickedIndex: 1 })} className='img' src={newArrPhoto[1]} alt="Curiosity Photo" />
                    <img onClick={()=>this.setState({ isOpen: true, clickedIndex: 2 })} className='img' src={newArrPhoto[2]} alt="Curiosity Photo" />
                </React.Fragment>
                )}
                {isOpen && (
                    <Lightbox
                        mainSrc={newArrPhoto[this.state.clickedIndex]}
                        nextSrc={newArrPhoto[(this.state.clickedIndex + 1) % newArrPhoto.length]}
                        prevSrc={newArrPhoto[(this.state.clickedIndex + newArrPhoto.length - 1) % newArrPhoto.length]}
                        onCloseRequest={() => this.setState({ isOpen: false, photoIndex: 0 })}
                        onMovePrevRequest={() =>
                            this.setState({
                                clickedIndex: (this.state.clickedIndex + newArrPhoto.length - 1) % newArrPhoto.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                clickedIndex: (this.state.clickedIndex + 1) % newArrPhoto.length,
                            })
                        }
                    />
                )}
            </React.Fragment>
        );
    }
}
