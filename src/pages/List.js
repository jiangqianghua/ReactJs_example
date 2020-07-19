import React from 'react';

function List(props) {
    console.log(props.match.url)
    return <h2>this is list {props.match.params.id}</h2>
}

export default List;