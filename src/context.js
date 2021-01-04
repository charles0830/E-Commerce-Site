import React, {Component} from 'react';
import Product from "./components/Product";
import {storeProducts,detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail = ()=>{
        console.log('Hello from details')
    }
    addToCart = ()=>{
        console.log('Hello from Cart')
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {
                    this.props.children
                }
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer}