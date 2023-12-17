import { usePassword } from "../context/passwordContext";

export default function SliderComponent() {
    const { passwordLength, setPasswordLength } = usePassword();

    const handleChange = (event) => {
        setPasswordLength(event.target.value);
    }

    return (
        <div className="text-proper-white">
            <p className="flex justify-between">
                <span className="my-2">Character Length</span>
                <span className="text-green">{passwordLength}</span>
            </p>
            <input 
            type="range" 
            min="1" 
            max="20" 
            value={passwordLength} 
            onChange={handleChange}
            style={{ "--percent": `${(passwordLength / 20) * 100}%` }}
            className="slider" 
            />
        </div>
    )
}
