import React from "react";
import SearchPhoto from "../../components/SearchPhoto/SearchPhoto";

const Home = (props) => {
    return (
        <SearchPhoto input={props.searchP} setInput={props.setSearchP}></SearchPhoto>
    )
}
export default Home;