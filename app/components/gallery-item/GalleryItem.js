import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

import galleries from '../../../data';

require('./gallery-item.scss');

class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state.galleries = []
    }

    componentDidMount() {
        this.setState({
            galleries: [
                {
                    'name': '',
                    'url': '',
                    'phone': '',
                    'address': ''
                }
            ]
        })
    }

    render() {
        return (
            <section class="gallery-component-container">
                <header class="gallery-component-header">
                    <h1 class="gallery-component-name">
                        <a href="#">{this.state.galleries.name}</a>
                    </h1>
                </header>
                <p class="gallery-component-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Temporibus dicta hic ut culpa blanditiis harum reiciendis.</p>
                <p class="gallery-component-description">Quas culpa repellendus provident error quis earum quibusdam
                    quisquam delectus dolores atque sunt, veniam reprehenderit dolor laudantium, eveniet consectetur
                    laboriosam incidunt pariatur.</p>
                <section class="gallery-component-details-section">
                    <h2 class="gallery-component-details-heading">Details</h2>
                    <ul class="gallery-component-details-list">
                        <li>
                            <i class="fa fa-bus"></i>
                            <p class="gallery-component-trolley-type">Trolley 2</p>
                        </li>
                        <li>
                            <i class="fa fa-phone"></i>
                            <p class="gallery-component-phone">
                                <a href="tel:+941-555-1234">{this.state.galleries.phone}</a>
                            </p>
                        </li>
                        <li>
                            <i class="fa fa-map-marker"></i>
                            <a class="gallery-component-address">
                                <p class="gallery-component-address-street">2403 3rd Ave N</p>
                                <p class="gallery-component-city">St. Pete, FL 34237</p>
                            </a>
                        </li>
                        <li>
                            <i class="fa fa-globe"></i>
                            <a href="#" class="gallery-component-url">{this.state.galleries.url}</a>
                        </li>
                    </ul>
                </section>
            </section>
        );
    }
}

export default GalleryItem;