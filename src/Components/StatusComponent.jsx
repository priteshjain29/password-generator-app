import { usePassword } from "../context/passwordContext";

export default function StatusComponent() {
  const { checkedOptionsCount } = usePassword();  

  return (
    <div className="text-proper-white p-2">
      {checkedOptionsCount === 1 && (
        <Status label="too weak!" color="bg-tomato" count={1} />
      )}
      {checkedOptionsCount === 2 && (
        <Status label="weak" color="bg-orange" count={2} />
      )}
      {checkedOptionsCount === 3 && (
        <Status label="medium" color="bg-yellow" count={3} />
      )}
      {checkedOptionsCount === 4 && (
        <Status label="strong" color="bg-green" count={4} />
      )}
    </div>
  )
}

function Status({ label, color, count }) {
  return (
    <div className="bg-hole-black flex justify-between p-2">
      <span className="uppercase text-beige-blue">strength</span>
      <span className="uppercase flex">
        {label}
        {[...Array(count)].map((_, index) => (
          <span key={index} className={`h-6 w-2.5 block ${color} ml-2`}></span>
        ))}
        {[...Array(4 - count)].map((_, index) => (
          <span key={index + count} className="h-6 w-2.5 block border-2 ml-2"></span>
        ))}
      </span>
    </div>
  );
}
