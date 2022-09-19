import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "iPhones",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712_960_720.jpg",
    route: "shop/iphones",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/09/11/19/suit-714357_960_720.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Laptops",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_960_720.jpg",
    route: "shop/laptops",
  },
  {
    id: 5,
    title: "Women",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/11/16/16/30/clothing-1045960_960_720.jpg",
    route: "shop/women",
  },
  {
    id: 6,
    title: "Men",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/06/21/23/10/tshirt-2429016_960_720.jpg",
    route: "shop/men",
  },
  {
    id: 7,
    title: "Children",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/28/10/48/child-1864718_960_720.jpg",
    route: "shop/children",
  },
  {
    id: 8,
    title: "Babies",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/05/26/12/30/baby-784608_960_720.jpg",
    route: "shop/babies",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
