export interface Budget {
  id: number;
  name: string;
  percentage: number;
  currentTotal: number;
  isSavings: boolean;

  //frontend only
  isEditing: boolean;
}
