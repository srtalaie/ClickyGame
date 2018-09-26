import React, { Component } from 'react';
import Images from '../../images.json';

class PicCard extends Component{
    state = {
        // clicked: false,
        imageUrl: "",
        imageArray: [Images[0].image, Images[1].image, Images[2].image, Images[3].image, Images[4].image, Images[5].image, Images[6].image, Images[7].image, Images[8].image, Images[9].image, Images[10].image, Images[11].image, Images[12].image]
    }

    // componentDidMount() {
    //     this.setState.imageUrl = '../../assets/House_Arryn.png';
    // }

    randomHouseImage = () => {
        let ranNum = Math.floor(Math.random() * (this.state.imageArray.length + 1));
        this.setState.imageUrl = this.state.imageArray[ranNum];
    }

    render() {
        return (
            <div>
                <div className="row">
                    <img onClick={this.randomHouseImage} src={this.state.imageArray[0]} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                </div>
                <div className="row">
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                </div>
                <div className="row">
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                </div>
                <div className="row">
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                    <img onClick={this.randomHouseImage} src={this.state.imageUrl} className="img-fluid" alt="House-Banner"></img>
                </div>
            </div>
        );
    }
}

export default PicCard;