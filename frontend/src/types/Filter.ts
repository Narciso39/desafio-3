export type Filter = {
    totalProducts: number;
    limit: number;
    onPageChange: (
      newLimit: number,
      sortByValue: string,
      order: "asc" | "desc"
    ) => void;
    baseUrl: string;
  }
  