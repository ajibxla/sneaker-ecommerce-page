const productInfo = [
  {
    id: 1,
    fallCollection: {
      productTitle: "Fall Limited Edition Sneakers",
      productInfo:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      discount1: 0.5,
      discount: (0.5).toLocaleString("en", {
        style: "percent",
      }),
      fullPrice: 250,
      productImg: [
        {
          imageNumber: 1,
          image: "/images/image-product-1.jpg",
        },
        {
          imageNumber: 2,
          image: "/images/image-product-2.jpg",
        },
        {
          imageNumber: 3,
          image: "/images/image-product-3.jpg",
        },
        {
          imageNumber: 4,
          image: "/images/image-product-4.jpg",
        },
      ],
    },
  },
];

export default productInfo;
