import { useParams } from "react-router-dom";
import Card from "../Componentes/card";

export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("lista"));

    const atividade = lista.filter( (atividade) => {
        console.log(atividade)
        if(atividade.id ==id){
            return atividade;
        }

        return null;

    })
    return (
        <Card atividade={atividade[0]}></Card>
    
        )

}


