import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Input, Products, Items, ItemName, Price } from "./styles";

export default function Search() {
  const [query, setQuery] = useState([]);
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      if (query.length >= 3) {
        const response = await api.get(`${query}`);
        setItems(response.data.items);
        console.log(response.data.items);
        setIsLoading(false);
      } else if (query.length === 0) {
        setIsLoading(false);
      } else {
        setItems([]);
        setIsLoading(true);
      }
    };
    loadItems();
  }, [query]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Input
        onChange={handleQuery}
        placeholder="Buscar produtos, marcas e muito mais…"
      />

      {isLoading ? (
        <Products>
          <Items>Buscando por produtos...</Items>
        </Products>
      ) : (
        <Products>
          {items.map((item) => (
            <Items key={item.map.id}>
              <a
                target="_blank"
                href={`https://store.omelete.com.br${item.map.uri}`}
              >
                <img
                  src={`https://static-store.worldticket.com.br/${item.map["images.url"][0]}`}
                />
                <div>
                  <ItemName>{item.map.name}</ItemName>
                  <Price>
                    {item.map.salePrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Price>
                </div>
              </a>
            </Items>
          ))}
        </Products>
      )}
    </Container>
  );
}
