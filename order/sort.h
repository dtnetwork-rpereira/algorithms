class Sort {
  private:
    void SwapArray(Product products[], int currentIndex, int newIndex) {
      Product currentProduct = products[currentIndex];
      Product previousProduct = products[newIndex];

      products[newIndex] = currentProduct;
      products[currentIndex] = previousProduct;
    }

    int GetCheapProduct(Product products[], int arrStart, int arrEnd) {
      int cheapProductIndex = arrStart;

      for (int i = arrStart; i < arrEnd; i++) {
        // comparisions++;
        if (products[cheapProductIndex].price > products[i].price) {
          cheapProductIndex = i;
        }
      }

      return cheapProductIndex;
    }

  public:
    Product * MergeSortAlgorithm(Product firstHalf[], Product secondHalf[]) {
    int firstHalfIndex = 0;
    int secondHalfIndex = 0;

    int firstHalfSize = std::end(firstHalf) - std::begin(firstHalf);
    int secondHalfSize = std::end(secondHalf) - std::begin(secondHalf);

    statis Product newProducts[firstHalfSize + secondHalfSize];

    bool done = false;
    int currentIndex = 0;

    while(!done) {
      if (currentIndex == firstHalfSize + secondHalfSize) {
        done = true;
      }

      Product firstProduct = firstHalf[firstHalfIndex];
      Product secondProduct = secondHalf[secondHalfIndex];

      if (firstProduct.price() <= secondProduct.price()) {
        newProducts.push(firstProduct);
        firstHalfIndex++;
      } else {
        newProducts.push(secondProduct);
        secondHalfIndex++;
      }
    }

    return newProducts;
    }

    void SelectionAlgorithm(Product products[], int array_size) {
      for (int index = 0; index < array_size - 1; index++) {
        int cheapProductIndex = GetCheapProduct(products, index, array_size);
        SwapArray(products, index, cheapProductIndex);
      }
    }

    void InsertionAlgorithm(Product products[], int array_size) {
      if (array_size < 1) return;

      for (int i = 1; i < array_size; i++) {
        int currentIndex = i;

        while (currentIndex > 0 && products[currentIndex].price < products[currentIndex - 1].price) {
          SwapArray(products, currentIndex, currentIndex - 1);
          currentIndex--;
        }
      }
    }
    
    Sort() {}
    /*Sort(Product products[], std::string sort_alg) {
      switch (sort_alg) {
        case "selection":

          break;
        case "inserction":
          break;
      }
    }*/
};
