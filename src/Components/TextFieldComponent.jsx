
import { ReactSVG } from 'react-svg';
import { useRef, useState } from "react";  
import { usePassword } from '../context/passwordContext';
import IconCopy from "../assets/images/icon-copy.svg";

export default function TextFieldComponent() {
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);  
  const { generatedPassword } = usePassword();

  const handleCopyClick = () => {
    const inputValue = inputRef.current.value;
    navigator.clipboard.writeText(inputValue).then(() => {
      console.log("Texte copié avec succès !");
      setCopied(true); 
      setTimeout(() => setCopied(false), 2000);  
    }).catch((err) => {
      console.log("Erreur lors de la copie", err);
    });
  };

  return (
    <div className="bg-beige-black text-proper-white flex justify-between p-4 mb-4">
        <input 
            ref={inputRef}
            type="text"
            value={generatedPassword}   
            readOnly                   
            className='bg-beige-black outline-none placeholder:text-beige-blue'
            placeholder='PTx1f5DaFX' 
        />
        <div className='flex items-center'> 
            {copied && <span className="pr-2 uppercase text-green">copied</span>}
            <ReactSVG  
            onClick={handleCopyClick}
            src={IconCopy} className='cursor-pointer hover:custom-icon' />
        </div>
    </div>
  );
}
