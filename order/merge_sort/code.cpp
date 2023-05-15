#include <iostream>
#include <array>
#include <cstdlib>
#include "../product.h"
#include "../sort.h"

int main() {
  srand (time(NULL));

  std::string names[] = {"Avocado", "Apple", "Golden Apple", "Melon", "Golden Melon", "Orange", "Strawberry"};
  int productsSize = std::end(names) - std::begin(names);

  static Product products1[] = {
    Product("Avocado", 2.00),
    Product("Apple", 4.00),
    Product("Melon", 6.50),
    Product("Strawberry", 7)
  };

  static Product products2[] = {
    Product("Orange", 1.50),
    Product("Golden Melon", 10),
    Product("Golden Apple", 100)
  };

  Product newProducts[] = Sort().MergeSortAlgorithm(products1, products2);

	std::cout << "The cheapest fruit is: " << newProducts[0].name << ", it cost $" << newProducts[0].price << std::endl << std::endl;
  
  return 0;
}
