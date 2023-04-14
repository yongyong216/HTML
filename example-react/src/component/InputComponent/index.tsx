import {Dispatch,  SetStateAction} from 'react'

interface Props{
    label: string;
    type: string;
    name: string;
    setter: Dispatch<SetStateAction<string>>;
    maxLenght:number;
    iconClass: string;
}

export default function NaverInput(props: Props) {
    const { label, type, name, setter, maxLenght, iconClass } = props;
    return (
    <div className="input-row">
    <div className="icon-cell">
        <span className={iconClass}>
            <span className="blind">{label}</span>
        </span>
    </div>
    <input 
        type={type} 
        className="input-text" 
        maxLength={maxLenght} 
        placeholder={label}
        name={name}
        onChange={(event) => setter(event.target.value)}  //input의 입력값이 바뀔때 마다 호출한다.
    />
</div>
    )
}
