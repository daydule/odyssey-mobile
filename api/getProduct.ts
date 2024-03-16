import { rakutenApiClient } from '../lib/axios';

interface Item {
  itemName: string;
  itemPrice: number;
  mediumImageUrls: string[];
  itemUrl: string;
}

interface Product {
  name: string;
  price: number;
  imagePath: string;
  altText: string;
  title: string;
  url: string;
}

export const getProducts = async (options?: Record<string, string | number>): Promise<Product[]> => {
  const result: { Items: Item[] } = await rakutenApiClient.get('/IchibaItem/Search/20220601', {
    params: {
      ...options,
      formatVersion: 2,
    },
  });

  return result.Items.map((item: Item): Product => {
    return {
      name: item.itemName,
      price: item.itemPrice,
      imagePath: item.mediumImageUrls[0],
      altText: item.itemName,
      title: item.itemName,
      url: item.itemUrl,
    };
  });
};
