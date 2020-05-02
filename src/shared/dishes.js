import ut from '../Components/assets/uthappizza.png';
import zu from '../Components/assets/zucchipakoda.png';
import va from '../Components/assets/vadonut.png';
import el from '../Components/assets/elaicheesecake.png';

export const DISHES =[
    {
        id: 0,
        name:'Uthappizza',
        image:ut,
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
     {
        id: 1,
        name:'Zucchipakoda',
        image: zu,
        category: 'appetizer',
        label:'',
        price:'1.99',
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
     {
        id: 2,
        name:'Vadonut',
        image: va,
        category: 'appetizer',
        label:'New',
        price:'1.99',
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
     {
        id: 3,
        name:'ElaiCheese Cake',
        image: el,
        category: 'dessert',
        label:'',
        price:'2.99',
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
    }
]