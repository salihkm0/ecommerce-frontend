import React, { useState } from "react";
import {
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { StyledContainer } from "../styles/ContainerStyle";

const categories = [
  "T-shirts",
  "Shirts",
  "Sweatshirts & Hoodies",
  "Sweaters",
  "Jeans",
  "Pants",
  "Leggings",
  "Shorts",
  "Skirts",
  "Underwear",
  "Hats",
  "Caps",
  "Gloves",
  "Belts",
  "Socks",
  "Hair accessories",
];
const prices = [
  "$0-$50",
  "$50-$100",
  "$100-$150",
  "$150-$200",
  "$200-$250",
  "$250+",
];

const dummyProducts = [
  { id: 1, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 2, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 3, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 4, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 5, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 6, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 7, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 8, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 9, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 10, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 11, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  { id: 12, name: "Men's Winter Jacket", price: "$99", category: "Jackets" },
  // Add more products as needed
];

export const ProductListingPage = () => {
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterPrice, setFilterPrice] = useState([]);
  const [sortBy, setSortBy] = useState("popular");
  const [page, setPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(dummyProducts.length / productsPerPage);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setFilterCategories((prev) => {
      if (prev.includes(value)) {
        return prev.filter((category) => category !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handlePriceChange = (event) => {
    const { value } = event.target;
    setFilterPrice((prev) => {
      if (prev.includes(value)) {
        return prev.filter((price) => price !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredProducts = dummyProducts.filter((product) => {
    if (
      filterCategories.length > 0 &&
      !filterCategories.includes(product.category)
    ) {
      return false;
    }
    // Add price filter logic if needed
    return true;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      case "price-desc":
        return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      case "newest":
        return b.id - a.id; // Assuming the newest products have higher IDs
      case "popular":
      default:
        return a.id - b.id; // Just an example, adjust sorting logic as needed
    }
  });

  const paginatedProducts = sortedProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <StyledContainer>
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-col lg:flex-row">
        <aside className="lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="mb-4">
            <h3 className="font-medium">Categories</h3>
            <FormGroup>
              {categories.map((category) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterCategories.includes(category)}
                      onChange={handleCategoryChange}
                      value={category}
                    />
                  }
                  label={category}
                  key={category}
                />
              ))}
            </FormGroup>
          </div>
          <div className="mb-4">
            <h3 className="font-medium">Filter with Price</h3>
            <FormGroup>
              {prices.map((price) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterPrice.includes(price)}
                      onChange={handlePriceChange}
                      value={price}
                    />
                  }
                  label={price}
                  key={price}
                />
              ))}
            </FormGroup>
          </div>
        </aside>
        <main className="lg:w-3/4 lg:pl-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
            <p>
              Showing{" "}
              {Math.min(
                (page - 1) * productsPerPage + 1,
                sortedProducts.length
              )}
              -{Math.min(page * productsPerPage, sortedProducts.length)} of{" "}
              {sortedProducts.length} Products
            </p>
            <FormControl className="w-full lg:w-auto mt-4 lg:mt-0">
              <InputLabel id="sort-by-label">Sort By</InputLabel>
              <Select
                labelId="sort-by-label"
                value={sortBy}
                onChange={handleSortChange}
              >
                <MenuItem value="popular">Popular</MenuItem>
                <MenuItem value="newest">Newest</MenuItem>
                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                <MenuItem value="price-desc">Price: High to Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg">
                <div className="bg-gray-200 h-48 mb-4"></div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.price}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </main>
      </div>
    </div>
    </StyledContainer>
  );
};
