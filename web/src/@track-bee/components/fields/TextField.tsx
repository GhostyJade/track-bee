import { TextField as MUITextField } from '@mui/material';

export interface TextFieldProps {
    name: string;
    label?: string;
    value?: string | number;
    type?: 'text' | 'password' | 'number';
}

export default function TextField({ name, label, value, type }: TextFieldProps): JSX.Element {
    return <MUITextField name={name} label={label} value={value} type={type} />;
}
