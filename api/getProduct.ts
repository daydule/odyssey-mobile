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
  let result: { Items: Item[] } = { Items: [] };
  try {
    result = await rakutenApiClient.get('/IchibaItem/Search/20220601', {
      params: {
        ...options,
        formatVersion: 2,
      },
    });
  } catch (e) {
    console.error(e);
  }

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
