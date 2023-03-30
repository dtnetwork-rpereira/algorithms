#include <iostream>
#include <array>
#include "product.h"

void sortProducts(Product products[], int size) {
  bool done = false;

  while (!done) {
    bool swapped = false;

    for (int i = 0; i < size; i++) {
      if (i > 0 && products[i - 1].price > products[i].price) {
        Product tmp = products[i - 1];
        products[i - 1] = products[i];
        products[i] = tmp;

        swapped = true;
      }
    }

    if (!swapped) {
      done = true;
    }
  }

  return;
}

int main() {
	Product products[] = {
		Product("Avocado", 5.00),
		Product("Apple", 2.00),
		Product("Golden Apple", 150.00),
		Product("Melon", 8.00),
		Product("Orange", 1.50),
    Product("Strawberry", 10.00)
	};

  int productsSize = std::end(products) - std::begin(products);
  sortProducts(products, productsSize);

	std::cout << "The cheapest fruit is: " << products[0].name << ", it cost $" << products[0].price << std::endl << std::endl;

  for (int i = 0; i < productsSize; i++) {
    std::cout << products[i].name << ": " << products[i].price << std::endl;
  }

  return 0;
}
