export default function getDiscountPrice(price: number, discount: number): string {
  if (discount < 0 || discount > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  
  const discountAmount = (price * discount) / 100;
  return (price - discountAmount).toLocaleString('vi-VN');
}
