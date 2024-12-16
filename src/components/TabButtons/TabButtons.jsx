function TabButtons({children , onSelect , isSlected}){
    return(
        <li><button className= {isSlected ? 'active' : ''} onClick={onSelect}>{children}</button></li>
    )
}

export default TabButtons