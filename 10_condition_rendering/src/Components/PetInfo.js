function PetInfo(props) {
    const { animal, age, hasPet } = props;
    
    return (
        hasPet
        ? <h1>My ${animal} is ${age} years old</h1>
        : <h3>"I don't have an animal</h3>
    )

}
export default PetInfo;
