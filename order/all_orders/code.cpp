#include <iostream>
#include <array>
#include "../product.h"
#include "../sort.h"

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
  // sortProducts(products, productsSize);
  Sort()
//    .SelectionAlgorithm(products, productsSize);
    .InserctionAlgorithm(products, productsSize);

	std::cout << "The cheapest fruit is: " << products[0].name << ", it cost $" << products[0].price << std::endl << std::endl;

  for (int i = 0; i < productsSize; i++) {
    std::cout << products[i].name << ": " << products[i].price << std::endl;
  }

  return 0;
}
