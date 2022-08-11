import React from "react";
import ProductsMain from "../../components/products/products-main";


const ShopPage = ()=>{
    return<div className="P-shop">
            <div className="P-shop-row">
                <div className="filter">
                    <h5>Filter by price</h5>
                <div className="checkboxes">
                    <form>
                        <div className="checked">
                            <div>
                                <input type="checkbox" className="custom-control-input" checked id="price-all"/>
                                <label className="custom-control-label" for="price-all">All Price</label>
                            </div>
                            <span className="badge border">1000</span>
                        </div>
                        <div className="checked">
                            <div>
                                <input type="checkbox" className="custom-control-input" id="price-1"/>
                                <label className="custom-control-label" for="price-1">$0 - $100</label>
                            </div>
                            <span className="badge border">150</span>
                        </div>
                        <div className="checked">
                            <div>
                                <input type="checkbox" className="custom-control-input" id="price-2"/>
                                <label className="custom-control-label" for="price-2">$100 - $200</label>
                            </div>
                            <span className="badge border">295</span>
                        </div>
                        <div className="checked">
                            <div>
                                <input type="checkbox" className="custom-control-input" id="price-3"/>
                                <label className="custom-control-label" for="price-3">$200 - $300</label>
                            </div>
                            <span className="badge border">246</span>
                        </div>
                        <div className="checked">
                            <div>
                                <input type="checkbox" className="custom-control-input" id="price-4"/>
                                <label className="custom-control-label" for="price-4">$300 - $400</label>
                            </div>
                            <span className="badge border">145</span>
                        </div>
                        <div className="checked">
                            <div>
                                <input type="checkbox" className="custom-control-input" id="price-5"/>
                                <label className="custom-control-label" for="price-5">$400 - $500</label>
                            </div>
                            <span className="badge border">168</span>
                        </div>
                    </form>
                </div>

            </div>
            <div className="P-product-component">
                <ProductsMain/>
            </div>
        </div>
    </div>
}
export default ShopPage