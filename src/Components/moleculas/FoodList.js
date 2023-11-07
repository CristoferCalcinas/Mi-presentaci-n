
import { List } from '@mui/material';
import ListItemMio from '../atomos/ListItemMio';
import BasicButtons from '../atomos/BasicButtons';

const foodItems = [
    {
        name: 'Hamburguesa Clásica',
        description: 'Una deliciosa hamburguesa con carne, lechuga, tomate y queso.',
        image: 'hamburguesa.jpg',
    },
    {
        name: 'Pizza Margarita',
        description: 'Una pizza italiana con tomate, mozzarella y albahaca fresca.',
        image: 'pizza.jpg',
    },
    {
        name: 'Sushi Variado',
        description: 'Sushi fresco con variedad de pescados y vegetales.',
        image: 'sushi.jpg',
    },
    {
        name: 'Ensalada César',
        description: 'Ensalada con pollo a la parrilla, lechuga, crutones y aderezo César.',
        image: 'ensalada.jpg',
    },
];

function FoodList() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <List>
                {foodItems.map((item, index) => (
                    <ListItemMio key={index} index={index} item={item} />
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <BasicButtons />
                </div>
            </List>
        </div>
    );
}

export default FoodList;
