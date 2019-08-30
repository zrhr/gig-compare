import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function Explorer(props) {
    return (
        <div style={{color: "purple",padding:"1em"}}>
           <Link to="/">Home</Link> / <Link to={props.path}>{props.path}</Link>
        </div>
    )
}
