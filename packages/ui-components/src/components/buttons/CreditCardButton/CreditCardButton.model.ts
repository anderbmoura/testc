export interface CreditCardButtonProps {
  active: boolean;
  number: string;
  date: string;
  type: string;
  cardBackground?: string;
  onPress: () => void;
}
