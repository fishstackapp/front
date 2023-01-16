import { FrontCustomer } from "../../types/user";

export interface UpdateInfoProps {
  initialValues?: FrontCustomer;
  onSubmitCallback?: (values: UpdateInfoFormValues) => Promise<void>;
  isUpdating?: boolean;
}

export interface UpdateInfoFormValues {
  phoneNumber: string;
  name: string;
  address: string;
}