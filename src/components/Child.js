import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import NoMatch from "./NoMatch";
import Explorer from "./Explorer";
import Header from "./Header";
import Single from "./Single";
import {addRatings} from '../actions/gigs'
import {receivePosts} from '../actions/gigs'
import {
    Container,
    Row,
    Col
} from 'reactstrap';
function Child({match, gigs, addRatings, receivePosts}) {
    const [loaded,
        setLoaded] = useState(false)
    const [update,
        setUpdate] = useState(false)
    useEffect(() => {

        receivePosts();
        return setLoaded(true);
    }, [])

    useEffect(() => {
        if (loaded) {
            console.log("hello")
            gigs.map(x => addRatings(x.id));
            setLoaded(false)
            setUpdate(true)
        }
    }, [gigs]);
    const names = gigs.map(gig => gig.name.toLowerCase());
    const index = names.indexOf(match);
    if (!update) 
        return (
            <div>Loading</div>
        )
    else if (index !== -1) 
        return (
            <div>
                <Header></Header>
                <Container>
                    <Explorer path={match}/>
                    <Single item={gigs[index]}/>

                </Container>
            </div>
        );
    else 
        return (
            <div>
                <Header></Header>
                <NoMatch/>
            </div>
        )
}
function mapStateToProps(state, ownProps) {
    console.log(state)
    const match = ownProps.match.params.id;

    const object1 = {
        "match": match,
        "gigs": state.gigs
    }

    return object1

}
function mapDispatchToProps(dispatch) {
    return {
        addRatings: (id) => dispatch(addRatings(id)),
        receivePosts: () => dispatch(receivePosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);