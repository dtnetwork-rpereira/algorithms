#include <iostream>
#include <array>
#include "product.h"

int findMajorPrice(Product products[], int size) {
  int majorIndex = 0;

  for (int i = 0; i < size; i++) {
    if (products[i].price > products[majorIndex].price) {
      majorIndex = i;
    }
  }

  return majorIndex;
}

int findMinorPrice(Product products[], int size) {
  int minorIndex = 0;

  for (int i = 0; i < size; i++) {
    if (products[i].price < products[minorIndex].price) {
      minorIndex = i;
    }
  }

  return minorIndex;
}

int main() {
	Product products[] = {
		Product("Avocado", 5.00),
		Product("Apple", 2.00),
		Product("Golden Apple", 150.00),
		Product("Melon", 8.00),
		Product("Orange", 1.50)
	};

  int productsSize = std::end(products) - std::begin(products);
	int minorPriceIndex = findMinorPrice(products, productsSize);
	int majorPriceIndex = findMajorPrice(products, productsSize);

	std::cout << "The cheap fruit is: " << products[minorPriceIndex].name << ", it cost $" << products[minorPriceIndex].price << std::endl;
	std::cout << "The expensive fruit is: " << products[majorPriceIndex].name << ", it cost $" << products[majorPriceIndex].price << std::endl;

  return 0;
}
