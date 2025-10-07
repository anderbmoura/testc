export type PageControllerProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
