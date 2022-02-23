/* eslint-disable */
import React, {useContext, useEffect} from 'react';
import TopBar from "../components/TopBar";
import {Card, Pagination} from "antd";
import Meta from "antd/es/card/Meta";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getProducts} from "../http/productsApi";

const ProductsPage = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        getProducts(1, 1).then((data) => {
            product.setProducts(data.rows)
            product.setTotal(data.count)
        })
    }, [])

    const updateProducts = () => {
        return function (pageNum, pageSize) {
            getProducts(pageNum, pageSize).then((data) => {
                product.setProducts(data.rows)
                product.setTotal(data.count)
            })
        }
    }

    return (
        <div>
            <TopBar/>
            <div className="p-10 flex flex-wrap align-center">
                {product.products.map(product =>
                    <Card
                        hoverable
                        className="border-black"
                        style={{width: 240, margin: 10}}
                        cover={<img alt="example" style={{border:'1px black solid'}} src={'http://localhost:5000/' + product.img}/>}
                        key={product.id}
                    >
                        <h3>{product.name}</h3>
                        <p>{product.price} ₽</p>
                    </Card>
                )}
                <Pagination
                    defaultCurrent={1}
                    total={product.total}
                    defaultPageSize={1}
                    onChange={updateProducts()}
                />
            </div>
        </div>
    );
});

export default ProductsPage;