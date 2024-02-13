import { ReactElement, createContext, useState } from "react";

export type ProductType = {
	sku: string;
	name: string;
	price: number;
};

const initState: ProductType[] = [
	{
		sku: "item0001",
		name: "Flip Phone",
		price: 89.99,
	},
	{
		sku: "item0002",
		name: "Premium Phone",
		price: 119.99,
	},
	{
		sku: "item0003",
		name: "Deluxe Phone",
		price: 229.99,
	},
];

export type UseProductsContextType = { products: ProductType[] };
const initContextState: UseProductsContextType = { products: [] };
const ProductsContext = createContext<UseProductsContextType>(initContextState);
type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
	const [products, setProducts] = useState<ProductType[]>(initState);

	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
};
