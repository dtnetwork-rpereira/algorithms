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
    void SelectionAlgorithm(Product products[], int array_size) {
      for (int index = 0; index < array_size - 1; index++) {
        int cheapProductIndex = GetCheapProduct(products, index, array_size);
        SwapArray(products, index, cheapProductIndex);
      }
    }

    void InserctionAlgorithm(Product products[], int array_size) {
      if (array_size < 1) return;

      for (int i = 1; i < array_size; i++) {
        int currentIndex = i;

        while (products[currentIndex].price < products[currentIndex - 1].price) {
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
