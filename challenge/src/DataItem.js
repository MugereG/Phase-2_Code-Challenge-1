import SearchBar from "./SearchBar";

const DataItem = ({name,date,description,category,amount}) =>{
    <SearchBar/>
    return(
            <div className="dataItem">
                NAME: SOLEDAD'S CLIENT
                <br></br>
                DATE: {date}
                <br></br>
                DESCRIPTION:{description}
                <br></br>
                CATEGORY: {category}
                <br></br>
                AMOUNT:{amount}
            </div>
        
    )
}

export default DataItem;