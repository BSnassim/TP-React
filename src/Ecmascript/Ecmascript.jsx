import { useState } from "react";

function Ecmascript() {
    // ex1
    const words = ["test", "testt", "testsdfjk", "fd", "sdflj"];
    const findLongestWord = (tab) => {
        return tab.reduce((acc, e) => {
            return acc.length > e.length ? acc : e;
        }, tab[0]);
    }
    // ex2
    const input = [
        ["a","b","c"],
        ["c","d","f"],
        ["d","f","g"]
    ];
    const occurence = (tab) => {
        const flatArr = tab.flat();
        return flatArr.reduce((acc, e) => {
            acc[e] = (acc[e] || 0) + 1;
            return acc;
        },{});
    }
    // ex3
    const students = [
        { name: 'John', id: 123, mark: 98 },
        { name: 'Chris', id: 101, mark: 23 },
        { name: 'Alex', id: 456, mark: 45 },
        { name: 'Steve', id: 102, mark: 75 },
    ];
    const calculeNote = (tab) => {
        return tab.reduce((acc,e) => {
            let f = (e.mark > 50 ? e.mark : e.mark + 15);
            acc = f > 50 ? acc + f : acc;
            return acc;
        },0)
    }
    // ex4
    const tab = [ {"id":1,"value":"Banana"}];
    var id = 1;
    const [tabInput, setTabInput] = useState();
    const addStart = (i) => {tab.unshift({"id":id++,"value":tabInput})};
    const addEnd = (i) => {console.log(tabInput);};
    const handleChange = event => setTabInput(event.target.value);
    return (
        <>
            <h3>Exercice 1</h3>
            <div>Tableau: {words.map((e) => e + " / ")}</div>
            <div>Longest word: {findLongestWord(words)}</div>
            <h3>Exercice 2</h3>
            <div>Input : {JSON.stringify(input)}</div>
            <div>Result : {JSON.stringify(occurence(input))}</div>
            <h3>Exercice 3</h3>
            <div>Input : {JSON.stringify(students)}</div>
            <div>Result : {calculeNote(students)}</div>
            <h3>Exercice 4</h3>
            <div>Input : {JSON.stringify(tab)}</div>
            <div>
                <input type="text" value={tabInput} onChange={handleChange}/>
                <button onClick={addStart(tabInput)}>Add to start</button>
                <button onClick={addEnd(tabInput)}>Add to end</button>
            </div>
            <div>
                Search <input type="text" />
            </div>
            <div> Result : {}</div>
        </>
    )
}

export default Ecmascript