import React, {Component} from 'react';
import {detailProduct, storeProducts} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }
    componentDidMount() {
        this.setProducts();
    }

    setProducts = ()=>{
        let tempProduct = []
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProduct = [...tempProduct,singleItem];
            }
        )
        this.setState(()=>{
            return {products : tempProduct};
        });
    }

    getItem = (id)=>{
        return this.state.products.find(item => item.id === id);
    }

    handleDetail = id=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product};
        });
    };

    addToCart = (id)=>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count +=1;
        const price = product.price;
        product.total+= product.count * price;
        this.setState(()=>{
            return {products:tempProduct,cart:[...this.state.cart,product]};
        },()=>{
            this.addTotals();
        });
    }
    openModal = id=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true};
        })
    }
    closeModal = () =>{
        this.setState(()=>{
            return {modalOpen: false};
        });
    }
    increment = (id)=>{

    }
    decrement = (id)=>{

    }
    removeItem = (id)=>{
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item=>item.id!==id);
        const index = tempProduct.indexOf(this.getItem(id));
        let removedProduct = tempProduct[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(()=>{
            return {
                cart:[...tempCart],
                products:[...tempProduct]
            }
        },()=>{
            this.addTotals();
        })
    }
    clearCart = ()=>{
        this.setState(()=>{
            return {cart:[]};
        },()=>{
           this.setProducts();
           this.addTotals();
        });
    }
    addTotals = ()=>{
        let subtotal = 0;
        this.state.cart.map(item => (subtotal+=item.total));
        const tempTax = subtotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = tax+subtotal;
        this.setState(()=>{
            return{
                cartSubTotal:subtotal,
                cartTax:tax,
                cartTotal:total
            }
        });
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
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