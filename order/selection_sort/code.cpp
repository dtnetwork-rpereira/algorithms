#include <iostream>
#include <array>
#include "../product.h"

int getCheapProduct(Product products[], int arrStart, int arrEnd, int &comparisions) {
  int cheapProductIndex = arrStart;

  for (int i = arrStart; i < arrEnd; i++) {
    comparisions++;
    if (products[cheapProductIndex].price > products[i].price) {
      cheapProductIndex = i;
    }
  }

  return cheapProductIndex;
}

void sortProducts(Product products[], int size) {
  bool done = false;
  int comparisions = 0;

  while (!done) {
    for (int i = 0; i < size - 1; i++) {
      int cheapIndex = getCheapProduct(products, i, size, comparisions);
      
      Product tmp = products[cheapIndex];
      products[cheapIndex] = products[i];
      products[i] = tmp;
    }

    done = true;
  }

  std::cout << "Comparisions: " << comparisions << std::endl;

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
