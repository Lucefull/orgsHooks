import { ListaProdutores } from "./components/ListaProdutores";
import { Topo } from "./components/Topo";

export default function Home() {
    return <ListaProdutores Topo={<Topo/>}/>
    
}