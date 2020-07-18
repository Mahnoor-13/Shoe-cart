import React, { Component } from 'react'
import Products from "./section/Products"
import Details from "./section/Details"
import {Routes, Route} from "react-router-dom"


export class Section extends Component {
    render() {
        return (
           <Routes>
           <Route path="/product" element={<Products/>} />
           <Route path="/product/:id" element={<Details/>} />
           </Routes>
        )
    }
}

export default Section
