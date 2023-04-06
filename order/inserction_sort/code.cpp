#include <iostream>
#include <array>
#include <cstdlib>
#include "../product.h"

void sortProducts(Product products[], int size) {
  int comparisions = 0;

  if (size < 1) return;

  for (int i = 1; i < size; i++) {
    int currentIndex = i;
    
    while (products[currentIndex].price < products[currentIndex - 1].price) {
      Product currentProduct = products[currentIndex];
      Product previousProduct = products[currentIndex - 1];

      products[currentIndex - 1] = currentProduct;
      products[currentIndex] = previousProduct;

      comparisions++;
      currentIndex--;
    }
  }

  std::cout << "Comparisions: " << comparisions << std::endl;

  return;
}

double price() {
  double price = rand() % 1000 + 1;

  return price;
}

int main() {
  srand (time(NULL));

  std::string names[] = {"Avocado", "Apple", "Golden Apple", "Melon", "Golden Melon", "Orange", "Strawberry"};
  int productsSize = std::end(names) - std::begin(names);

  Product products[productsSize];

  for (int idx = 0; idx < productsSize; idx++) {
    double productPrice = price();
    products[idx] = Product(names[idx], productPrice);
  }


  std::cout << "Before sort:" << std::endl << std::endl;
  for (int i = 0; i < productsSize; i++) {
    std::cout << products[i].name << ": " << products[i].price << std::endl;
  }

  std::cout << std::endl;
  sortProducts(products, productsSize);

	std::cout << "The cheapest fruit is: " << products[0].name << ", it cost $" << products[0].price << std::endl << std::endl;
  for (int i = 0; i < productsSize; i++) {
    std::cout << products[i].name << ": " << products[i].price << std::endl;
  }

  return 0;
}
