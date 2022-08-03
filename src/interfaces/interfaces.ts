export interface ICategory {
  id: string
  description: string
}
export interface DataLogin {
  username: string
  password: string
}
export interface Book {
  id: string
  public: boolean
  author: string
  resume: string
  title: string
  subtitle: string
  image: string
  url: string
  category: ICategory
  userRegister: string
}
