import { ChangeEventHandler } from 'react';

type Props = {
    checked?: boolean;
    label?: string;
    key?: React.Key;
    onChange?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
};

export default function CheckBox({
    checked = false,
    label,
    key,
    onChange,
}: Props) {
    return (
        <label key={key} className="flex cursor-pointer items-center">
            <input
                type="checkbox"
                onChange={onChange}
                checked={checked}
                className="mr-2"
            />
            <div>{label ? label : ''}</div>
        </label>
    );
}
