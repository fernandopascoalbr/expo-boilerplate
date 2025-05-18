import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native-paper';

type FormInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
} & TextInputProps;

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error }
      }) => (
        <TextInput
          label={label}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={!!error}
          {...props}
        />
      )}
    />
  );
}
