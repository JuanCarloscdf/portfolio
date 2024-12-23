export interface CreateCategory {
      category: string,
      intro: string,
      icon: string
}

export interface Category extends CreateCategory {
    id: string,
}