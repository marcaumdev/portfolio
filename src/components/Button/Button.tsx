import classNames from 'classnames';

type Props = {
    variant?: 'default' | 'primary' | 'light' | 'dark';
    children: React.ReactNode;
};

export function Button({ variant, children }: Props) {
    let bgColor = 'text-black';
    if(variant === 'dark') bgColor = 'bg-primaryDark text-white';
    if(variant === 'primary') bgColor = 'bg-primary hover:bg-primaryLight active:bg-primaryDark transiton-all text-white';
    if(variant === 'light') bgColor = 'bg-primaryLight text-white';
    return <button className={classNames("py-2 px-4 rounded-md bg-primary font-bold",bgColor)}>{children} </button>
    
}