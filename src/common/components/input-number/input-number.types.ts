import { ComponentProps } from "react";

export enum InputNumberSize {
  sm = 'sm',
  base = 'base',
}

export interface InputNumberProps {
  onChange?: ComponentProps<'input'>['onChange'];
  onBlur?: ComponentProps<'input'>['onBlur'];
  name?: ComponentProps<'input'>['name'];
  disabled?: ComponentProps<'input'>['disabled'];
  readOnly?: ComponentProps<'input'>['readOnly'];
  label: string;
  placeholder?: string;
  error?: string;
  fullWidth?: boolean;
  setValue?: (value: number) => void;
  value?: number;
  size?: keyof typeof InputNumberSize;
  hideErrorMessage?: boolean;
}