import { Button } from "@/components/ui/button";
import banner1 from "../../assets/Banner1.png";
import banner2 from "../../assets/Banner2.png";
import banner3 from "../../assets/Banner3.png";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LaptopIcon,
  Smartphone,
  SmartphoneIcon,
  TabletSmartphoneIcon,
  Tv,
  Watch,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/Product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/hooks/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/Product-details";

const categorieswithIcons = [
  { id: "mobiles", label: "Mobiles", icon: Smartphone },
  { id: "tablets", label: "Tablets", icon: TabletSmartphoneIcon },
  { id: "tvs", label: "TVs", icon: Tv },
  { id: "laptops", label: "Laptops", icon: LaptopIcon },
  { id: "watches", label: "Watches", icon: Watch },
];

const brandwithIcons = [
  { id: "dell", label: "Dell", icon: LaptopIcon },
  { id: "apple", label: "Apple", icon: SmartphoneIcon },
  { id: "samsung", label: "Samsung", icon: TabletSmartphoneIcon },
  { id: "micromax", label: "Micromax", icon: SmartphoneIcon },
  { id: "sony", label: "Sony", icon: Tv },
];

function ShoppingHome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [banner1, banner2, banner3];
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const {toast} = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/shop/listing");
  }

  function handleGetProductDetails(getCurrentProductId) {
    //console.log('product id : ',getCurrentProductId)
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    console.log("Product Id : ", getCurrentProductId);
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveSlide((activeSlide + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt="banner"
            className={
              "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000" +
              (index === activeSlide ? " opacity-100" : " opacity-0")
            }
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
          onClick={() =>
            setActiveSlide((activeSlide - 1 + slides.length) % slides.length)
          }
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
          onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid gris-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categorieswithIcons.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid gris-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {brandwithIcons.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList && productList.length > 0
            ? productList.map((product) => (
                <ShoppingProductTile
                  handleGetProductDetails={handleGetProductDetails}
                  product={product}
                  handleAddtoCart={handleAddtoCart}
                />
              ))
            : null}
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
