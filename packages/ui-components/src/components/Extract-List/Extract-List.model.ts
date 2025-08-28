export interface ExtractListProps {
  data: any;

  testID?: string;

  refreshAction?: () => Promise<void>;
}
