import { forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { RadioInput } from '../radio-input/radio-input.component';

interface RadioGroupProps extends ControllerRenderProps<any, any> {
  options: {
    label: string;
    value: string;
  }[];
  label?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ options, name, onChange, value, label }, ref) => {
    return (
      <div ref={ref} className="pb-6">
        <div className="mb-3 text-sm font-medium text-gray-900">{label}</div>
        <div>
          {options.map(option => (
            <RadioInput
              key={`radio-input-${name}-${option.value}`}
              {...option}
              name={name}
              onChange={onChange}
              defaultChecked={option.value === value}
            />
          ))}
        </div>
      </div>
    );
  }
);
