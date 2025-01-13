

export const registerFormControls = [
    {
        type: "text",
        name: "userName",
        label: "User Name",
        placeholder: "Enter your user name",
        componentType: "input",
        //required: true,
    },
    {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
    },
    {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
    },
]

export const loginFormControls = [
    {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
    },
    {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
    },
]

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "mobiles", label: "Mobiles" },
      { id: "tablets", label: "Tablets" },
      { id: "tvs", label: "TVs" },
      { id: "laptops", label: "Laptops" },
      { id: "watches", label: "Watches" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "dell", label: "Dell" },
      { id: "apple", label: "Apple" },
      { id: "samsung", label: "Samsung" },
      { id: "micromax", label: "Micromax" },
      { id: "sony", label: "Sony" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  // {
  //   id: "products",
  //   label: "Products",
  //   path: "/shop/listing",
  // },
  {
    id: "mobiles",
    label: "Mobiles",
    path: "/shop/listing",
  },
  {
    id: "tablets",
    label: "Tablets",
    path: "/shop/listing",
  },
  {
    id: "tvs",
    label: "TVs",
    path: "/shop/listing",
  },
  {
    id: "laptops",
    label: "Laptops",
    path: "/shop/listing",
  },
  {
    id: "watches",
    label: "Watches",
    path: "/shop/listing",
  },
  // {
  //   id: "search",
  //   label: "Search",
  //   path: "/shop/search",
  // },
];

export const categoryOptionsMap = {
  mobiles: "Mobiles",
  tablets: "Tablets",
  tvs: "TVs",
  laptops: "Laptops",
  watches: "Watches",
};

export const brandOptionsMap = {
  dell: "Dell",
  apple: "Apple",
  samsung: "Samsung",
  micromax: "Micromax",
  sony: "Sony",
};

export const filterOptions = {
  category: [
    { id: "mobiles", label: "Mobiles" },
    { id: "tablets", label: "Tablets" },
    { id: "tvs", label: "TVs" },
    { id: "laptops", label: "Laptops" },
    { id: "watches", label: "Watches" },
  ],
  brand: [
    { id: "dell", label: "Dell" },
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "micromax", label: "Micromax" },
    { id: "sony", label: "Sony" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];
















