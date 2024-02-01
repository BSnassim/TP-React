function Ecmascript(){
    const findLongestWord = (tab) => {
        return tab.reduce((acc, e) => {
            return acc>e.length ? acc : e.length;
        },tab[0].length);
    }
    

    var words = ["test", "testt", "testsdfjk", "fd", "sdflj"] ;
    return (
        <>
        <div>{findLongestWord(words)}</div>
        </>
    )
}

export default Ecmascript