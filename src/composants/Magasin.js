import '../styles/Magasin.css';
import { platsList } from '../datas/platsList';
import CareScale from './CareScale';

function clique(NomPlat) {
    alert(`tu vas acheter ${NomPlat} ? bon choix !`);
}

function Magasin() {
    return (
        <div className='magasin'>
            {platsList.map((plat)=>
                <div key={plat.id} className='magasin-item' onClick={() => clique(plat.nom)}>
                    {plat.nom}
                    <div className='magasin-prix'>
                        {plat.prix} €</div>
                    <div>
                        {plat.good ? <span>👌</span> : null}
                    </div>
                    <CareScale careType='ecologique' scaleValue={plat.ecologique} />
                </div>
            )}
        </div>
    )
}

export default Magasin;