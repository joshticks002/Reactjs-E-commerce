import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "iPhones",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712_960_720.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/09/11/19/suit-714357_960_720.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg",
    },
    {
      id: 4,
      title: "Laptops",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_960_720.jpg",
    },
    {
      id: 5,
      title: "Womens",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/11/16/16/30/clothing-1045960_960_720.jpg",
    },
    {
      id: 6,
      title: "Mens",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/21/23/10/tshirt-2429016_960_720.jpg",
    },
    {
      id: 7,
      title: "Children",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/28/10/48/child-1864718_960_720.jpg",
    },
    {
      id: 8,
      title: "Babies",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/05/26/12/30/baby-784608_960_720.jpg",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
