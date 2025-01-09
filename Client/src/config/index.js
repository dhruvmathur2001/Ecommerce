

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














// {
    //     type: "password",
    //     name: "confirmPassword",
    //     label: "Confirm Password",
    //     placeholder: "Confirm your password",
    //     required: true,
    // }, 