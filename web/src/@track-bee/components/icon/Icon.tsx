import { Icon as IconifyIcon } from '@iconify/react';

export interface IconProps {
    icon: string;
    pack?: string;
    size?: number | string;
}

export default function Icon(props: IconProps): JSX.Element {
    return <IconifyIcon icon={`${props.pack}:${props.icon}`} width={props.size} height={props.size} />;
}

Icon.defaultProps = {
    pack: 'mdi',
};
