import React,{ Component } from 'react';
import Product from './Product'
import Title from "./Title";
import {storeProducts} from "../data";

export default class ProductList extends Component{
    state={
        product : storeProducts
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="Product"/>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}