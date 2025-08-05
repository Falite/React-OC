import '../styles/Magasin.css';
import { platsList } from '../datas/platsList';

function Magasin() {
    return (
        <div className='magasin'>
            <ul>
                {platsList.map((plat)=>
                <li key={plat.id} className='magasin-item'>{plat.nom} 
                <div key={plat.id} className='magasin-prix'>{plat.prix} €</div>
                <div key={plat.id}>
                    {plat.good ? <span>👌</span> : null}
                </div>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Magasin;