import { withFormsy, FormsyInjectedProps } from 'formsy-react';
import { TextField as MUITextField } from '@mui/material';

type TextFieldPropsBase = {
    name: string;
    label?: string;
    value?: string | number;
    type?: 'text' | 'password' | 'number';
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    helperText?: string | JSX.Element | null;
};

export interface TextFieldProps extends Omit<TextFieldPropsBase, 'onChange' | 'onBlur'> {
    sendValueChange(name: string, value: string): void;
}

function TextFieldInternal({ name, label, value, type, onBlur, onChange, required, helperText }: TextFieldPropsBase) {
    return (
        <MUITextField
            name={name}
            label={label}
            value={value}
            type={type}
            onBlur={onBlur}
            onChange={onChange}
            required={required}
            helperText={helperText}
        />
    );
}

export default function TextField({ sendValueChange, ...props }: TextFieldProps): JSX.Element {
    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        sendValueChange(event.target.name, event.target.value);
    };

    return <TextFieldInternal {...props} onBlur={onBlur} />;
}

type FormsyTextFieldProps = TextFieldProps & FormsyInjectedProps<string | number>;

function FormsyTextFieldInternal({ sendValueChange, errorMessage, ...props }: FormsyTextFieldProps) {
    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        sendValueChange(event.target.name, event.target.value);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.target.value);
    };

    return (
        <TextFieldInternal
            {...props}
            helperText={errorMessage ? <p>{errorMessage}</p> : null}
            onBlur={onBlur}
            onChange={onChange}
        />
    );
}

export const FormsyTextField = withFormsy(FormsyTextFieldInternal);
