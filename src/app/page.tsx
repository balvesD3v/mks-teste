import Header from "@/components/Header/index";
import Product from "../components/products";
import { HomeSection } from "./styles";

export default async function Home() {
  const { products } = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
  ).then((response) => response.json());
  console.log(products);

  return (
    <main>
      <header>
        <Header />
      </header>

      <HomeSection>
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </HomeSection>
    </main>
  );
}
