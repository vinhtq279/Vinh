import React, {Component} from "react";
import AnchorTag from "../Anchortag";
import Table from "../table/Table";
import { useState, useEffect } from "react";


const ProductCategoryList = () => {
        
    const [columnList, setColumnList] = useState(["ID", "Name", "Total Product", "Action"]);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/product-category-list')
        .then(response => response.json())
        .then((data) => {
            console.log(data); 
            setTableData(data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        })
    }, []);

    return (
        <div className="admin-content mx-auto">
            <div className="w-100 mb-5">
                <AnchorTag link="/app/shop/product-category/create" className="btn btn-info float-right" itemValue="Create Category"></AnchorTag>
                <h4>Product Category List</h4>
            </div>
            <Table className="table table-striped" columnList={columnList} tableData={tableData} actionLinkPrefix=""></Table>
        </div>
    ) 
}

export default ProductCategoryList;