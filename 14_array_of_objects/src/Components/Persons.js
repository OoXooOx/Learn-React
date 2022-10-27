import persons from "../data/MOCK_DATA.json"
import Person from "./Person";
function Persons() {




    return (
        <div className="cards">
            {persons.map((el) => {
                return (
                    <Person key={el.id} {...el} />
                )
            })}
        </div>
    )
}
export default Persons;