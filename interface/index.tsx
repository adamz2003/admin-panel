import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  name: string;
  icon?: object;
}

export interface MenuProp {
  title: string;
  id: number;
}

export interface BodyProps {
  children: React.ReactNode;
}

export interface ApiClientProps {
  url: string;
}

export interface ApiClientPostProps {
  url: string;
  data: any;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface GigCardProps {
  title: string;
  img: string;
  authorLogo: string;
  authorName: string;
  href: string;
  price: number;
  level: number;
  rating: number;
  orders: number;
  data: any;
  favor: any;
  fetchFavor: any;
}

export interface BlogPostInterface {
  title: string;
  date: string;
  author: string;
  category: string;
  content: any;
}

export interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ApiResponse {
  message: string;
  data: any;
}
