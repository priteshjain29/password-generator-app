
import { usePassword } from "../context/passwordContext";
import CheckIcon from "../assets/images/icon-check.svg"

export default function CheckboxComponent() {
    const {
        includeUppercase, setIncludeUppercase,
        includeLowercase, setIncludeLowercase,
        includeNumbers, setIncludeNumbers,
        includeSymbols, setIncludeSymbols
    } = usePassword();

    return (
        <div className=" text-proper-white p-2  mt-4">
            <label htmlFor="check" className="container mb-4">
                <input 
                    type="checkbox"
                    id="check"
                    checked={includeUppercase}
                    onChange={() => setIncludeUppercase(prev => !prev)}
                />
                <span className="checkmark">
                    <img src={CheckIcon} alt="icon" className="absolute top-0.5 left-0.5" />
                </span>
                Include Uppercase Letters
            </label>

            <label htmlFor="check1" className="container mb-4">
                <input 
                    type="checkbox"
                    id="check1"
                    checked={includeLowercase}
                    onChange={() => setIncludeLowercase(prev => !prev)}
                />
                <span className="checkmark">
                    <img src={CheckIcon} alt="icon" className="absolute top-0.5 left-0.5" />
                </span>
                Include Lowercase Letters
            </label>

            <label htmlFor="check2" className="container mb-4">
                <input 
                    type="checkbox"
                    id="check2"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(prev => !prev)}
                />
                <span className="checkmark">
                    <img src={CheckIcon} alt="icon" className="absolute top-0.5 left-0.5" />
                </span>
                Include Numbers
            </label>

            <label htmlFor="check3" className="container">
                <input 
                    type="checkbox"
                    id="check3"
                    checked={includeSymbols}
                    onChange={() => setIncludeSymbols(prev => !prev)}
                />
                <span className="checkmark">
                    <img src={CheckIcon} alt="icon" className="absolute top-0.5 left-0.5" />
                </span>
                Include Symbols
            </label>
        </div>
    )
}
