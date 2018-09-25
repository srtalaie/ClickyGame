import React from 'react';

class PicCard {
    state = {
        clicked: false,
        images: []
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                </div>
                <div className="row">
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                </div>
                <div className="row">
                    <div id="picCard" className="img-fluid"></div>
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                </div>
                <div className="row">
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                    <div id="picCard" className="img-fluid">></div>
                </div>
            </div>
        );
    }
}

export default PicCard;