import { useReducer } from 'react';

// Types
interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartItem extends Product {
    quantity: number;
}

type CartAction =
    | { type: 'add_item'; product: Product }
    | { type: 'remove_item'; id: number }
    | { type: 'update_quantity'; id: number; quantity: number }
    | { type: 'clear_cart' };

// Initial State
const initialCart: CartItem[] = [];

// Reducer
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
    switch (action.type) {
        case 'add_item': {
            const existingItem = state.find(item => item.id === action.product.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...state, { ...action.product, quantity: 1 }];
        }
        case 'remove_item':
            return state.filter(item => item.id !== action.id);
        case 'update_quantity':
            if (action.quantity <= 0) {
                return state.filter(item => item.id !== action.id);
            }
            return state.map(item =>
                item.id === action.id ? { ...item, quantity: action.quantity } : item
            );
        case 'clear_cart':
            return [];
        default:
            return state;
    }
};

// Dummy Products
const PRODUCTS: Product[] = [
    { id: 1, name: '🍎 Apple', price: 1.5 },
    { id: 2, name: '🍌 Banana', price: 0.8 },
    { id: 3, name: '🍇 Grapes', price: 3.0 },
];

const ShoppingCart = () => {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">3️⃣ Shopping Cart (Array Logic)</h3>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Product List */}
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-bold mb-3 border-b border-white border-opacity-30 pb-2">Products</h4>
                    <div className="space-y-2">
                        {PRODUCTS.map(product => (
                            <div key={product.id} className="flex justify-between items-center bg-black bg-opacity-20 p-3 rounded">
                                <span>{product.name} - ${product.price.toFixed(2)}</span>
                                <button
                                    onClick={() => dispatch({ type: 'add_item', product })}
                                    className="bg-white text-purple-600 px-3 py-1 rounded font-bold hover:bg-gray-100 transition-colors"
                                >
                                    Add
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cart Display */}
                <div className="bg-white text-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3 border-b pb-2">
                        <h4 className="font-bold">Your Cart</h4>
                        <button
                            onClick={() => dispatch({ type: 'clear_cart' })}
                            className="text-xs text-red-500 hover:text-red-700 underline"
                        >
                            Clear All
                        </button>
                    </div>

                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">Cart is empty</p>
                    ) : (
                        <div className="space-y-2">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center text-sm">
                                    <div className="flex-1">
                                        <span className="font-bold">{item.name}</span>
                                        <span className="text-gray-500 ml-2">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => dispatch({ type: 'update_quantity', id: item.id, quantity: item.quantity - 1 })}
                                            className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center"
                                        >
                                            -
                                        </button>
                                        <span className="w-4 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch({ type: 'update_quantity', id: item.id, quantity: item.quantity + 1 })}
                                            className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => dispatch({ type: 'remove_item', id: item.id })}
                                            className="text-red-500 hover:text-red-700 ml-2"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
