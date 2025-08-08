/**
 * @description Thông tin người dùng
 */
export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
}

/**
 * @description Danh mục sản phẩm
 */
export interface Category {
  id: number;
  name: string;
}

/**
 * @description Sản phẩm chậu hoa
 */
export interface FlowerPot {
  id: number;
  name: string;
  shortDescribe: string;
  information: string;
  image: string;
  price: number;
  rate: number;
  discount: number;
  createdAt: string; 
  potColor: string;
  categoryId: number; 
  tag: string[];
}

/**
 * @description Bài viết blog
 */
export interface Blog {
  id: number;
  tags: string[];
  title: string;
  content: string;
  previewContent: string;
  createdAt: string;
  previewImage: string;
}

/**
 * @description Thẻ (tag) cho bài viết blog
 */
export interface BlogTag {
  id: number;
  content: string;
}

/**
 * @description Bình luận trong một bài viết blog
 */
export interface Comment {
  id: number;
  userId: number;   
  blogId: number;   
  content: string;
  createdAt: string;
  parentCmtId: number | null; 
}

/**
 * @description Đơn hàng
 */
export interface Order {
  id: number;
  userId: number;        
  flowerPotIds: number[]; 
  totalPrice: number;
  isPurchased: boolean;
}