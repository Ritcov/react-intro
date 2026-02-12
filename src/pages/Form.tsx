import Header from "../components/Header"
import { Link } from "react-router-dom";
import { useState, useEffect  } from "react"; 
import axios from "axios";
 
type Person = {
    name: string;
    age: number;
    uf: string;
}

type Estado = {
    sigla: string;
}

function Form(){

    const [estados, setEstados] = useState<Estado[]>([])

    const [person, setPerson] = useState<Person>({
        name: "",
        age: 0,
        uf: "DF"
    });

    useEffect(() => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => setEstados(response.data))
    }, [])

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>){
        setPerson({...person, name: event.target.value});

    }
    function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>){
        setPerson({...person, age: parseInt(event.target.value)});
    }
    function handleUFChange(event: React.ChangeEvent<HTMLSelectElement>){
        setPerson({...person, uf: event.target.value});
    }




   function btnSaveForm(){
    alert('Only Jesus save '+person.name+' from '+ person.uf)
   }
   function btnFuckOff(){
    alert('Fuck This Shit!')
   }

    return (
        <>
            <Header title="Form Page" />
            <p>
                We dont like forms here!
            </p>
            <div>
                <form>
                    <fieldset>
                        <legend>
                            <h2>Register</h2>
                        </legend>

                        <div>
                            <label>Name:
                                <input type="text" id="name" onChange={handleNameChange} value={person.name}/>
                            </label>
                        </div>
                        <div>
                            <label>Age:
                                <input type="number" id="age" onChange={handleAgeChange} value={person.age} />
                            </label>
                        </div>
                        <div>
                            <label>UF:
                                <select id="uf" onChange={handleUFChange} value={person.uf}>
                                    {
                                        estados.map(estado => (<option value={estado.sigla}>{estado.sigla}</option>))
                                    }
                                </select>
                            </label>
                        </div>
                        <button type="button" onClick={btnSaveForm}>Save It!</button>
                        <button type="button" onClick={btnFuckOff}>Click Me If You Don't Like Forms Too!</button>
                    </fieldset>
                </form>
            </div>
            <Link to="/">Bring-me Home</Link>
        
        </>
    )
}

export default Form;