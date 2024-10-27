
export type Paginate = {
    nPage: number;
    currentPage: number; 
    onPageChange: (page: number) => void; 
    filters: string[]; 
    limit: number; 
    sortBy: string; 
    baseUrl: string;
  }
  